"use client";

import { useAuth } from "@/app/components/auth-provider";
import { usePlanLimits } from "@/hooks/usePlanLimits";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { Clock, CreditCard, Video, MessageSquare, AlertTriangle } from "lucide-react";

export default function TeacherDashboardPage() {
    const { user } = useAuth();
    const {
        loading,
        planInfo,
        planConfig,
        usage,
        canUploadVideo,
        canSendSMS,
        remainingVideos,
        remainingSMS,
        videoUsagePercentage,
        smsUsagePercentage,
        isTrialActive,
        trialDaysRemaining,
    } = usePlanLimits();

    // Using optional chaining and defaults just in case
    const firstName = user?.user_metadata?.firstName || user?.user_metadata?.first_name || "Teacher";
    const lastName = user?.user_metadata?.lastName || user?.user_metadata?.last_name || "";

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">
                    Welcome back, {firstName} {lastName}
                </h1>
                <p className="text-muted-foreground">
                    Manage your courses, students, and content here.
                </p>
            </div>

            {/* Trial Warning Banner */}
            {!loading && isTrialActive && trialDaysRemaining <= 3 && (
                <Card className="border-orange-500 bg-orange-50 dark:bg-orange-950">
                    <CardContent className="flex items-center gap-3 pt-6">
                        <AlertTriangle className="h-5 w-5 text-orange-500" />
                        <div>
                            <p className="font-semibold">Your free trial ends in {trialDaysRemaining} {trialDaysRemaining === 1 ? 'day' : 'days'}</p>
                            <p className="text-sm text-muted-foreground">Subscribe now to continue using all features without interruption.</p>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Trial & Plan Info */}
            {!loading && planInfo && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Free Trial Status
                            </CardTitle>
                            <Clock className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-primary">
                                {trialDaysRemaining} {trialDaysRemaining === 1 ? 'Day' : 'Days'}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                {trialDaysRemaining > 0
                                    ? 'Trial days remaining'
                                    : 'Trial has ended'}
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Current Plan
                            </CardTitle>
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <div className="text-2xl font-bold">{planInfo.selected_plan}</div>
                                {planInfo.selected_plan === 'Pro' && (
                                    <Badge variant="default" className="bg-primary">Popular</Badge>
                                )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                {planConfig?.price}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className={!canUploadVideo ? 'border-red-500' : ''}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Videos This Month
                            </CardTitle>
                            <Video className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {usage.videosUploaded}/{planConfig?.videosPerMonth}
                            </div>
                            <Progress value={videoUsagePercentage} className="mt-2 h-2" />
                            <p className="text-xs text-muted-foreground mt-2">
                                {remainingVideos === -1
                                    ? 'Unlimited videos'
                                    : remainingVideos > 0
                                        ? `${remainingVideos} remaining`
                                        : 'Limit reached'}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className={!canSendSMS && planConfig?.smsAlertsPerMonth > 0 ? 'border-red-500' : ''}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                SMS Alerts
                            </CardTitle>
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {planConfig?.smsAlertsPerMonth === -1
                                    ? usage.smsSent
                                    : planConfig?.smsAlertsPerMonth === 0
                                        ? 'N/A'
                                        : `${usage.smsSent}/${planConfig?.smsAlertsPerMonth}`}
                            </div>
                            {planConfig?.smsAlertsPerMonth > 0 && (
                                <>
                                    <Progress value={smsUsagePercentage} className="mt-2 h-2" />
                                    <p className="text-xs text-muted-foreground mt-2">
                                        {remainingSMS === -1
                                            ? 'Unlimited SMS'
                                            : remainingSMS > 0
                                                ? `${remainingSMS} remaining`
                                                : 'Limit reached'}
                                    </p>
                                </>
                            )}
                            {planConfig?.smsAlertsPerMonth === 0 && (
                                <p className="text-xs text-muted-foreground mt-2">
                                    Upgrade to Pro or Max
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            )}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Students
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-muted-foreground">
                            Across all courses
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Active Courses
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-muted-foreground">
                            Currently published
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Revenue
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Rs.0.00</div>
                        <p className="text-xs text-muted-foreground">
                            +0% from last month
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
