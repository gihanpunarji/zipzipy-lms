import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";
import { Progress } from "@/app/components/ui/progress";
import { Button } from "@/app/components/ui/button";
import {
  dashboardStats,
  continueLearning,
  upcomingAssignments,
} from "@/lib/data";
import { BookOpen, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, Student!</h1>
        <p className="text-muted-foreground">
          Here's a summary of your learning journey.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Enrolled Courses
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {dashboardStats.enrolledCourses}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {dashboardStats.activeCourses}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Courses
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {dashboardStats.completedCourses}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Continue Learning</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {continueLearning.map((course) => (
              <div
                key={course.title}
                className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted"
              >
                <div className="flex-1">
                  <p className="font-semibold">{course.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {course.instructor}
                  </p>
                  <Progress value={course.progress} className="mt-2" />
                </div>
                <Link href="/dashboard/my-courses/1">
                  <Button size="sm">Continue</Button>
                </Link>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Assignments</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {upcomingAssignments.map((assignment) => (
              <div
                key={assignment.title}
                className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted"
              >
                <div className="flex-1">
                  <p className="font-semibold">{assignment.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {assignment.course}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{assignment.dueDate}</p>
                  <p className="text-xs text-muted-foreground">Due Date</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}