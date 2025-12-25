"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/app/components/ui/collapsible";
import { detailedCourses } from "@/lib/data";
import { Clock, Star, Users, ChevronDown, CheckCircle, Circle } from "lucide-react";
import { Progress } from "@/app/components/ui/progress";

export default function CourseDetailsPage({ params }) {
  const { id } = params;
  const [activeLesson, setActiveLesson] = useState(null);

  const course = detailedCourses.find((c) => c.id === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleLessonClick = (lessonId) => {
    setActiveLesson(lessonId);
    // In a real app, you'd navigate to the lesson video player page
    // router.push(`/dashboard/my-courses/${course.id}/lesson/${lessonId}`);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Course Header */}
      <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold">{course.title}</h1>
        <p className="text-lg mt-2">Instructor: {course.instructor}</p>
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 fill-current" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-5 w-5" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-5 w-5" />
            <span>{course.students} Students</span>
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <Button size="lg">Continue Learning</Button>
          <Button size="lg" variant="secondary">
            Enroll
          </Button>
        </div>
      </div>

      {/* Course Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Sidebar - Modules and Lessons */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Course Content</CardTitle>
          </CardHeader>
          <CardContent>
            {course.modules.map((module, moduleIndex) => (
              <Collapsible key={moduleIndex} className="mb-2">
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 rounded-md bg-muted text-left">
                  <h3 className="font-semibold">{module.title}</h3>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted/50 rounded-b-md px-4 py-2">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center gap-2 py-2 cursor-pointer hover:bg-muted/70 rounded-md px-2"
                      onClick={() => handleLessonClick(lesson.id)}
                    >
                      {lesson.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Circle className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span>{lesson.title}</span>
                      <span className="ml-auto text-sm text-muted-foreground">
                        {lesson.duration}
                      </span>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </CardContent>
        </Card>

        {/* Right Content - Overview, What You'll Learn, Requirements, Instructor */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What You&apos;ll Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2">
                {course.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2">
                {course.requirements.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About the Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/avatars/sarah.svg" // Placeholder instructor avatar
                  alt={course.instructor}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{course.instructor}</h3>
                  <p className="text-sm text-muted-foreground">
                    {course.instructorBio}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}