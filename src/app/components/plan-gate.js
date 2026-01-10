"use client";

import Link from "next/link";
import { usePlanLimits } from "@/hooks/usePlanLimits";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Lock } from "lucide-react";

/**
 * PlanGate Component
 * Wraps features that require specific plan access
 * Shows upgrade prompt if user doesn't have access
 *
 * @param {Object} props
 * @param {string} props.feature - Feature name to check (from plan-config.js)
 * @param {React.ReactNode} props.children - Content to show if user has access
 * @param {string} props.fallbackTitle - Optional custom title for locked state
 * @param {string} props.fallbackMessage - Optional custom message for locked state
 */
export function PlanGate({
  feature,
  children,
  fallbackTitle = "Premium Feature",
  fallbackMessage = "Upgrade your plan to unlock this feature"
}) {
  const { loading, hasAccessToFeature, planInfo } = usePlanLimits();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const hasAccess = hasAccessToFeature(feature);

  if (!hasAccess) {
    return (
      <Card className="border-2 border-dashed border-muted-foreground/25">
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{fallbackTitle}</h3>
          <p className="text-muted-foreground mb-4 max-w-md">
            {fallbackMessage}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Current plan: <strong>{planInfo?.selected_plan || 'None'}</strong>
            </span>
          </div>
          <Link href="/pricing" className="mt-4">
            <Button className="bg-gradient-primary">
              Upgrade Plan
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return <>{children}</>;
}

/**
 * FeatureBadge Component
 * Shows a small badge indicating if a feature is locked
 * Useful for navigation items or feature lists
 */
export function FeatureBadge({ feature, children, showLockIcon = true }) {
  const { hasAccessToFeature } = usePlanLimits();
  const hasAccess = hasAccessToFeature(feature);

  if (hasAccess) {
    return <>{children}</>;
  }

  return (
    <div className="flex items-center gap-2 opacity-50 cursor-not-allowed">
      {children}
      {showLockIcon && <Lock className="w-4 h-4 text-muted-foreground" />}
    </div>
  );
}
