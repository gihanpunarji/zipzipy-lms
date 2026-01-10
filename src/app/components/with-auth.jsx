"use client";

import { useAuth } from "@/app/components/auth-provider";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * HOC for protecting routes that require authentication
 * @param {Component} Component - Component to protect
 * @param {Object} options - Protection options
 * @param {string} options.allowedRole - Required role (teacher, student, admin)
 * @param {string} options.redirectTo - Where to redirect if unauthorized
 */
export function withAuth(Component, options = {}) {
  return function ProtectedRoute(props) {
    const { user, userRole, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const { allowedRole, redirectTo } = options;

    useEffect(() => {
      if (!loading) {
        // Not authenticated
        if (!user) {
          const loginUrl = `/auth/login?redirectTo=${encodeURIComponent(pathname)}`;
          router.push(loginUrl);
          return;
        }

        // Check role if specified
        if (allowedRole && userRole !== allowedRole.toLowerCase()) {
          const fallbackUrl = redirectTo || '/dashboard';
          router.push(fallbackUrl);
        }
      }
    }, [user, userRole, loading, router, pathname]);

    if (loading) {
      return (
        <div className="flex h-screen w-full items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      );
    }

    if (!user) {
      return null;
    }

    // Check role authorization
    if (allowedRole && userRole !== allowedRole.toLowerCase()) {
      return (
        <div className="flex h-screen w-full items-center justify-center flex-col gap-4">
          <h1 className="text-2xl font-bold">Access Denied</h1>
          <p className="text-muted-foreground">
            You don't have permission to access this page.
          </p>
          <button
            onClick={() => router.push('/dashboard')}
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            Go to Dashboard
          </button>
        </div>
      );
    }

    return <Component {...props} />;
  };
}

/**
 * Component-based route guard
 * Use in page components instead of HOC
 */
export function RequireAuth({ children, allowedRole, fallback }) {
  const { user, userRole, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      const loginUrl = `/auth/login?redirectTo=${encodeURIComponent(pathname)}`;
      router.push(loginUrl);
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return (
      fallback || (
        <div className="flex h-screen w-full items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      )
    );
  }

  if (!user) {
    return null;
  }

  // Check role if specified
  if (allowedRole && userRole !== allowedRole.toLowerCase()) {
    return (
      <div className="flex h-screen w-full items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="text-muted-foreground">
          This page is only accessible to {allowedRole}s.
        </p>
        <button
          onClick={() => router.push('/dashboard')}
          className="px-4 py-2 bg-primary text-white rounded-lg"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
