"use client";

import { useAuth } from "@/app/components/auth-provider";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
    BookOpen,
    Clock,
    CheckCircle,
    GraduationCap,
    LogOut,
} from "lucide-react";

export default function StudentDashboardPage() {
    const { user, userProfile, signOut } = useAuth();

    const firstName = userProfile?.first_name || user?.user_metadata?.firstName || "Student";
    const lastName = userProfile?.last_name || user?.user_metadata?.lastName || "";

    const handleLogout = async () => {
        await signOut();
    };

    const stats = [
        {
            title: "Enrolled Courses",
            value: "0",
            description: "Active enrollments",
            icon: BookOpen,
            color: "text-blue-600",
            bgColor: "bg-blue-100",
        },
        {
            title: "Pending Assignments",
            value: "0",
            description: "Due this week",
            icon: Clock,
            color: "text-orange-600",
            bgColor: "bg-orange-100",
        },
        {
            title: "Completed",
            value: "0",
            description: "Assignments submitted",
            icon: CheckCircle,
            color: "text-green-600",
            bgColor: "bg-green-100",
        },
        {
            title: "Overall Progress",
            value: "0%",
            description: "Across all courses",
            icon: GraduationCap,
            color: "text-purple-600",
            bgColor: "bg-purple-100",
        },
    ];

    return (
        <div className="flex flex-col gap-6 p-6">
            {/* Welcome Section */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">
                    Welcome back, {firstName} {lastName}!
                </h1>
                <p className="text-muted-foreground">
                    Here's your learning progress today.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {stat.title}
                                </CardTitle>
                                <div className={`w-10 h-10 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                                    <Icon className={`h-5 w-5 ${stat.color}`} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {stat.description}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Get Started Section */}
            <Card className="bg-gradient-to-r from-primary/10 to-purple-600/10 border-primary/20">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">Start Your Learning Journey</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Browse available courses and start learning today. Your teacher will assign courses to you.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Logout Button */}
            <div className="flex justify-center">
                <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-colors"
                >
                    <LogOut className="w-4 h-4" />
                    Logout
                </Button>
            </div>
        </div>
    );
}
