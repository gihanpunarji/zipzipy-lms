"use client";

import { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/app/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { detailedCourses } from "@/lib/data";
import { ChevronLeft, ChevronRight, CheckCircle, Circle } from "lucide-react";

export default function LessonVideoPlayerPage() {
  const router = useRouter();
  const params = useParams();
  const { id: courseId, lessonId } = params;

  const course = detailedCourses.find((c) => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  // Find the current lesson and its module
  const { currentModule, currentLesson, currentLessonIndex, currentModuleIndex } = useMemo(() => {
    let currentModule = null;
    let currentLesson = null;
    let currentLessonIndex = -1;
    let currentModuleIndex = -1;

    for (let i = 0; i < course.modules.length; i++) {
      const module = course.modules[i];
      for (let j = 0; j < module.lessons.length; j++) {
        const lesson = module.lessons[j];
        if (lesson.id === lessonId) {
          currentModule = module;
          currentLesson = lesson;
          currentModuleIndex = i;
          currentLessonIndex = j;
          break;
        }
      }
      if (currentLesson) break;
    }
    return { currentModule, currentLesson, currentLessonIndex, currentModuleIndex };
  }, [course, lessonId]);

  if (!currentLesson) {
    return <div>Lesson not found</div>;
  }

  const handleNextLesson = () => {
    let nextLesson = null;
    // Check if there's a next lesson in the current module
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      nextLesson = currentModule.lessons[currentLessonIndex + 1];
    } else if (currentModuleIndex < course.modules.length - 1) {
      // Check if there's a next module
      const nextModule = course.modules[currentModuleIndex + 1];
      if (nextModule.lessons.length > 0) {
        nextLesson = nextModule.lessons[0];
      }
    }

    if (nextLesson) {
      router.push(
        `/dashboard/my-courses/${courseId}/lesson/${nextLesson.id}`
      );
    } else {
      alert("You have completed all lessons in this course!");
    }
  };

  const handlePreviousLesson = () => {
    let prevLesson = null;
    // Check if there's a previous lesson in the current module
    if (currentLessonIndex > 0) {
      prevLesson = currentModule.lessons[currentLessonIndex - 1];
    } else if (currentModuleIndex > 0) {
      // Check if there's a previous module
      const prevModule = course.modules[currentModuleIndex - 1];
      if (prevModule.lessons.length > 0) {
        prevLesson = prevModule.lessons[prevModule.lessons.length - 1]; // Last lesson of previous module
      }
    }

    if (prevLesson) {
      router.push(
        `/dashboard/my-courses/${courseId}/lesson/${prevLesson.id}`
      );
    } else {
      alert("This is the first lesson in the course.");
    }
  };

  const currentVideoUrl = currentLesson.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Fallback video URL

  return (
    <div className="flex flex-col gap-6">
      {/* Video Player */}
      <Card className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={currentVideoUrl}
          title={currentLesson.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </Card>

      <div className="flex justify-between items-center">
        <Button onClick={handlePreviousLesson} disabled={!currentLessonIndex && !currentModuleIndex}>
          <ChevronLeft className="h-4 w-4 mr-2" /> Previous Lesson
        </Button>
        <h2 className="text-2xl font-bold">{currentLesson.title}</h2>
        <Button onClick={handleNextLesson}>
          Next Lesson <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Sidebar - Modules and Lessons */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Course Content</CardTitle>
          </CardHeader>
          <CardContent>
            {course.modules.map((module, moduleIndex) => (
              <Collapsible
                key={moduleIndex}
                className="mb-2"
                defaultOpen={moduleIndex === currentModuleIndex}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 rounded-md bg-muted text-left">
                  <h3 className="font-semibold">{module.title}</h3>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted/50 rounded-b-md px-4 py-2">
                  {module.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={`/dashboard/my-courses/${courseId}/lesson/${lesson.id}`}
                    >
                      <div
                        className={`flex items-center gap-2 py-2 px-2 rounded-md hover:bg-muted/70 ${
                          lesson.id === lessonId ? "bg-muted font-bold" : ""
                        }`}
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
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </CardContent>
        </Card>

        {/* Right Content - Lesson Details Tabs */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Tabs defaultValue="notes" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
            </TabsList>
            <TabsContent value="notes">
              <Card>
                <CardHeader>
                  <CardTitle>Lesson Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    These are the notes for the lesson "{currentLesson.title}".
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="files">
              <Card>
                <CardHeader>
                  <CardTitle>Downloadable Files</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul>
                    <li>
                      <Link href="#" className="underline">
                        Lesson_Slides.pdf
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="underline">
                        Code_Examples.zip
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="discussion">
              <Card>
                <CardHeader>
                  <CardTitle>Discussion & Comments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Discussion forum for "{currentLesson.title}".</p>
                  {/* Placeholder for comments */}
                  <div className="mt-4 border-t pt-4">
                    <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
