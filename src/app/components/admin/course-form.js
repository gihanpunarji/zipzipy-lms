"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { X, Plus } from "lucide-react";

export default function CourseForm({ course: initialCourse, onSave }) {
  const [course, setCourse] = useState(
    initialCourse || {
      title: "",
      summary: "",
      price: "",
      duration: "",
      learningOutcomes: [""],
      requirements: [""],
      modules: [
        { title: "", lessons: [{ title: "", videoUrl: "" }] },
      ],
    }
  );

  const handleCourseChange = (e) => {
    const { id, value } = e.target;
    setCourse((prev) => ({ ...prev, [id]: value }));
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...course[field]];
    newArray[index] = value;
    setCourse((prev) => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field) => {
    setCourse((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeArrayItem = (field, index) => {
    const newArray = course[field].filter((_, i) => i !== index);
    setCourse((prev) => ({ ...prev, [field]: newArray }));
  };

  const handleModuleChange = (moduleIndex, value) => {
    const newModules = [...course.modules];
    newModules[moduleIndex].title = value;
    setCourse((prev) => ({ ...prev, modules: newModules }));
  };

  const addModule = () => {
    setCourse((prev) => ({
      ...prev,
      modules: [
        ...prev.modules,
        { title: "", lessons: [{ title: "", videoUrl: "" }] },
      ],
    }));
  };

  const removeModule = (moduleIndex) => {
    const newModules = course.modules.filter((_, i) => i !== moduleIndex);
    setCourse((prev) => ({ ...prev, modules: newModules }));
  };

  const handleLessonChange = (moduleIndex, lessonIndex, field, value) => {
    const newModules = [...course.modules];
    newModules[moduleIndex].lessons[lessonIndex][field] = value;
    setCourse((prev) => ({ ...prev, modules: newModules }));
  };

  const addLesson = (moduleIndex) => {
    const newModules = [...course.modules];
    newModules[moduleIndex].lessons.push({ title: "", videoUrl: "" });
    setCourse((prev) => ({ ...prev, modules: newModules }));
  };

  const removeLesson = (moduleIndex, lessonIndex) => {
    const newModules = [...course.modules];
    newModules[moduleIndex].lessons = newModules[moduleIndex].lessons.filter(
      (_, i) => i !== lessonIndex
    );
    setCourse((prev) => ({ ...prev, modules: newModules }));
  };

  const handleSubmit = () => {
    onSave(course);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Course Details */}
      <Card>
        <CardHeader>
          <CardTitle>Course Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={course.title} onChange={handleCourseChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="summary">Summary</Label>
            <Textarea
              id="summary"
              value={course.summary}
              onChange={handleCourseChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" value={course.price} onChange={handleCourseChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                value={course.duration}
                onChange={handleCourseChange}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Outcomes */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Outcomes</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {course.learningOutcomes.map((outcome, index) => (
            <div key={index} className="flex items-center gap-2">
              <Input
                value={outcome}
                onChange={(e) =>
                  handleArrayChange("learningOutcomes", index, e.target.value)
                }
              />
              <Button
                variant="destructive"
                size="icon"
                onClick={() => removeArrayItem("learningOutcomes", index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button variant="outline" onClick={() => addArrayItem("learningOutcomes")}>
            <Plus className="h-4 w-4 mr-2" /> Add Outcome
          </Button>
        </CardContent>
      </Card>

      {/* Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>Requirements</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {course.requirements.map((req, index) => (
            <div key={index} className="flex items-center gap-2">
              <Input
                value={req}
                onChange={(e) =>
                  handleArrayChange("requirements", index, e.target.value)
                }
              />
              <Button
                variant="destructive"
                size="icon"
                onClick={() => removeArrayItem("requirements", index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button variant="outline" onClick={() => addArrayItem("requirements")}>
            <Plus className="h-4 w-4 mr-2" /> Add Requirement
          </Button>
        </CardContent>
      </Card>

      {/* Module Builder */}
      <Card>
        <CardHeader>
          <CardTitle>Module Builder</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          {course.modules.map((module, moduleIndex) => (
            <div key={moduleIndex} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <Input
                  placeholder="Module Title"
                  value={module.title}
                  onChange={(e) => handleModuleChange(moduleIndex, e.target.value)}
                  className="text-lg font-semibold"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeModule(moduleIndex)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid gap-4 pl-4 border-l">
                {module.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className="flex items-center gap-2">
                    <Input
                      placeholder="Lesson Title"
                      value={lesson.title}
                      onChange={(e) =>
                        handleLessonChange(
                          moduleIndex,
                          lessonIndex,
                          "title",
                          e.target.value
                        )
                      }
                    />
                    <Input
                      placeholder="Video URL"
                      value={lesson.videoUrl}
                      onChange={(e) =>
                        handleLessonChange(
                          moduleIndex,
                          lessonIndex,
                          "videoUrl",
                          e.target.value
                        )
                      }
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeLesson(moduleIndex, lessonIndex)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addLesson(moduleIndex)}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Lesson
                </Button>
              </div>
            </div>
          ))}
          <Button variant="outline" onClick={addModule}>
            <Plus className="h-4 w-4 mr-2" /> Add Module
          </Button>
        </CardContent>
      </Card>

      <Button onClick={handleSubmit} size="lg">
        Save Course
      </Button>
    </div>
  );
}
