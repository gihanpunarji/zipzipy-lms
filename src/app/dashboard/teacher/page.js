"use client";

import { useAuth } from "@/app/components/auth-provider";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card";
import {
  Users,
  BookOpen,
  FileText,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function TeacherDashboardPage() {
    const { user, userProfile } = useAuth();

    const firstName = userProfile?.firstName || user?.user_metadata?.firstName || "Teacher";
    const lastName = userProfile?.lastName || user?.user_metadata?.lastName || "";

    const stats = [
      {
        title: "Total Students",
        value: "0",
        description: "Enrolled across all courses",
        icon: Users,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
      },
      {
        title: "Active Courses",
        value: "0",
        description: "Currently published",
        icon: BookOpen,
        color: "text-green-600",
        bgColor: "bg-green-100",
      },
      {
        title: "Pending Assignments",
        value: "0",
        description: "Awaiting review",
        icon: FileText,
        color: "text-orange-600",
        bgColor: "bg-orange-100",
      },
      {
        title: "Completion Rate",
        value: "0%",
        description: "Average across courses",
        icon: TrendingUp,
        color: "text-purple-600",
        bgColor: "bg-purple-100",
      },
    ];

    const recentActivity = [
      {
        title: "No recent activity",
        description: "Start creating courses to see activity here",
        icon: Clock,
        time: "Just now",
      },
    ];

    return (
        <div className="flex flex-col gap-6">
            {/* Welcome Section */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">
                    Welcome back, {firstName} {lastName}!
                </h1>
                <p className="text-muted-foreground">
                    Here's what's happening with your courses today.
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

            <div className="grid gap-6 md:grid-cols-2">
                {/* Recent Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentActivity.map((activity, index) => {
                                const Icon = activity.icon;
                                return (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                            <Icon className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium">{activity.title}</p>
                                            <p className="text-xs text-muted-foreground">{activity.description}</p>
                                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <button className="w-full text-left px-4 py-3 rounded-lg border hover:bg-muted transition-colors flex items-center gap-3">
                                <BookOpen className="h-5 w-5 text-primary" />
                                <span className="font-medium">Create New Course</span>
                            </button>
                            <button className="w-full text-left px-4 py-3 rounded-lg border hover:bg-muted transition-colors flex items-center gap-3">
                                <FileText className="h-5 w-5 text-primary" />
                                <span className="font-medium">Create Assignment</span>
                            </button>
                            <button className="w-full text-left px-4 py-3 rounded-lg border hover:bg-muted transition-colors flex items-center gap-3">
                                <Users className="h-5 w-5 text-primary" />
                                <span className="font-medium">View All Students</span>
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Get Started Section */}
            <Card className="bg-gradient-to-r from-primary/10 to-purple-600/10 border-primary/20">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">Get Started with Your First Course</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Create your first course to start teaching students. You can add lessons, assignments, and track student progress.
                            </p>
                            <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                                Create Your First Course
                            </button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
