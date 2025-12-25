"use client";

import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { Upload, FileText } from "lucide-react";

export default function AssignmentsPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    courseId: "",
    file: null
  });

  const [assignments, setAssignments] = useState([
    { id: 1, title: "Assignment 1: HTML Basics", course: "Full Stack", submissions: 45 },
    { id: 2, title: "Assignment 2: CSS Styling", course: "Full Stack", submissions: 38 },
    { id: 3, title: "Assignment 3: JavaScript Fundamentals", course: "Full Stack", submissions: 32 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Assignment data:", formData);
    alert("Assignment uploaded successfully!");
    setFormData({
      title: "",
      description: "",
      dueDate: "",
      courseId: "",
      file: null
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Assignment Management</h1>
        <p className="text-muted-foreground">Upload and manage course assignments</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upload Form */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Upload New Assignment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Assignment Title *</label>
              <Input
                type="text"
                placeholder="e.g., Week 1 Project"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="h-12"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Description *</label>
              <Textarea
                placeholder="Assignment instructions..."
                required
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Course *</label>
                <Input
                  type="text"
                  placeholder="Course name"
                  required
                  value={formData.courseId}
                  onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                  className="h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Due Date *</label>
                <Input
                  type="date"
                  required
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  className="h-12"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Upload File</label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-1">Click to upload assignment file</p>
                <p className="text-xs text-muted-foreground">PDF, DOCX up to 10MB</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-primary text-white hover:shadow-lg transition-all duration-300 h-12"
            >
              Upload Assignment
            </Button>
          </form>
        </Card>

        {/* Assignments List */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">All Assignments</h2>
          <div className="space-y-4">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex items-start gap-4 p-4 border border-border rounded-lg hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{assignment.title}</h3>
                  <p className="text-sm text-muted-foreground">{assignment.course}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {assignment.submissions} submissions
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
