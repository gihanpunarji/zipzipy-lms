"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Progress } from "@/app/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { courses } from "@/lib/data";

export default function MyCoursesPage() {
  const courseStatuses = ["All", "In Progress", "Completed", "Not Started"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredCourses = courses.filter((course) => {
    if (activeTab === "All") {
      return true;
    }
    return course.status === activeTab;
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">My Courses</h1>
      <Tabs defaultValue="All" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          {courseStatuses.map((status) => (
            <TabsTrigger key={status} value={status}>
              {status}
            </TabsTrigger>
          ))}
        </TabsList>
        {courseStatuses.map((status) => (
          <TabsContent key={status} value={status}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id}>
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {course.instructor}
                    </p>
                    {course.status === "In Progress" && (
                      <>
                        <Progress value={course.progress} className="mt-4" />
                        <Link href={`/dashboard/my-courses/${course.id}`}>
                          <Button size="sm" className="mt-2 w-full">
                            Continue
                          </Button>
                        </Link>
                      </>
                    )}
                    {course.status === "Completed" && (
                      <>
                        <p className="text-sm text-green-500 mt-4">Completed</p>
                        <Button size="sm" variant="outline" className="mt-2 w-full">
                          View Certificate
                        </Button>
                      </>
                    )}
                    {course.status === "Not Started" && (
                      <>
                        <p className="text-sm text-muted-foreground mt-4">Not Started</p>
                        <Link href={`/dashboard/my-courses/${course.id}`}>
                        <Button size="sm" className="mt-2 w-full">
                          Start Course
                        </Button>
                        </Link>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}