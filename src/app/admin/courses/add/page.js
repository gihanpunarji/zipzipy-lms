"use client";

import CourseForm from "@/app/components/admin/course-form";

export default function AddCoursePage() {
  const handleSave = (courseData) => {
    // In a real app, you would send this data to your backend to create a new course
    console.log("Saving new course:", courseData);
    alert("New course saved! (Mock Save)");
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Add New Course</h1>
      <CourseForm onSave={handleSave} />
    </div>
  );
}