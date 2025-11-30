"use client";

import { useParams } from "next/navigation";
import CourseForm from "@/app/components/admin/course-form";
import { detailedCourses } from "@/lib/data";

export default function EditCoursePage() {
  const { id } = useParams();
  const course = detailedCourses.find((c) => c.id === id);

  const handleSave = (courseData) => {
    // In a real app, you would send this data to your backend to update the course
    console.log("Updating course:", courseData);
    alert(`Course ${courseData.id} updated! (Mock Save)`);
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Edit Course</h1>
      <CourseForm course={course} onSave={handleSave} />
    </div>
  );
}