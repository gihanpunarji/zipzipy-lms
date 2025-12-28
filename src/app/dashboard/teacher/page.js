"use client";

import { useAuth } from "@/app/components/auth-provider";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Clock, CreditCard } from "lucide-react";

export default function TeacherDashboardPage() {
    const { user } = useAuth();
    const [planInfo, setPlanInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [daysRemaining, setDaysRemaining] = useState(0);

    // Using optional chaining and defaults just in case
    const firstName = user?.user_metadata?.firstName || user?.user_metadata?.first_name || "Teacher";
    const lastName = user?.user_metadata?.lastName || user?.user_metadata?.last_name || "";

    useEffect(() => {
        async function fetchPlanInfo() {
            if (!user?.id) return;

            try {
                // Fetch user id from users table
                const { data: userData, error: userError } = await supabase
                    .from('users')
                    .select('id')
                    .eq('uid', user.id)
                    .single();

                if (userError) {
                    console.error("Error fetching user:", userError);
                    setLoading(false);
                    return;
                }

                // Fetch plan info using the user's id
                const { data: planData, error: planError } = await supabase
                    .from('teacher_plan')
                    .select('*')
                    .eq('id', userData.id)
                    .single();

                if (planError) {
                    console.error("Error fetching plan:", planError);
                } else {
                    setPlanInfo(planData);

                    // Calculate days remaining in trial (7 days from created_at)
                    const createdDate = new Date(planData.created_at);
                    const currentDate = new Date();
                    const trialEndDate = new Date(createdDate);
                    trialEndDate.setDate(trialEndDate.getDate() + 7);

                    const timeDiff = trialEndDate - currentDate;
                    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
                    setDaysRemaining(daysLeft > 0 ? daysLeft : 0);
                }
            } catch (err) {
                console.error("Unexpected error:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchPlanInfo();
    }, [user]);

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

            {/* Trial & Plan Info */}
            {!loading && planInfo && (
                <div className="grid gap-4 md:grid-cols-2">
                    <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Free Trial Status
                            </CardTitle>
                            <Clock className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-primary">
                                {daysRemaining} {daysRemaining === 1 ? 'Day' : 'Days'} Remaining
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                {daysRemaining > 0
                                    ? `Your free trial ends in ${daysRemaining} ${daysRemaining === 1 ? 'day' : 'days'}`
                                    : 'Your free trial has ended'}
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
                                {planInfo.selected_plan === 'Basic' && 'Up to 3 videos/month'}
                                {planInfo.selected_plan === 'Pro' && 'Up to 5 videos/month'}
                                {planInfo.selected_plan === 'Max' && 'Up to 10 videos/month'}
                            </p>
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
