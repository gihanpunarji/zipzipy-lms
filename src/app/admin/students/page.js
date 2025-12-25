"use client";

import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Search, User } from "lucide-react";

export default function StudentsPage() {
  const students = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      course: "Full Stack Development",
      progress: "75%",
      enrolled: "Jan 15, 2025"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      course: "Full Stack Development",
      progress: "60%",
      enrolled: "Jan 18, 2025"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      course: "Full Stack Development",
      progress: "45%",
      enrolled: "Jan 20, 2025"
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      course: "Full Stack Development",
      progress: "90%",
      enrolled: "Jan 12, 2025"
    },
    {
      id: 5,
      name: "David Brown",
      email: "david@example.com",
      course: "Full Stack Development",
      progress: "30%",
      enrolled: "Jan 22, 2025"
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Students</h1>
          <p className="text-muted-foreground">Manage and view all enrolled students</p>
        </div>
      </div>

      {/* Search Bar */}
      <Card className="p-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search students by name or email..."
              className="pl-10 h-12"
            />
          </div>
          <Button variant="outline" className="h-12 px-6">
            Filter
          </Button>
        </div>
      </Card>

      {/* Students List */}
      <Card className="p-6">
        <div className="space-y-4">
          {students.map((student) => (
            <div
              key={student.id}
              className="flex items-center gap-4 p-4 border border-border rounded-lg hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{student.name}</h3>
                <p className="text-sm text-muted-foreground">{student.email}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{student.course}</p>
                <p className="text-xs text-muted-foreground">Progress: {student.progress}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Enrolled</p>
                <p className="text-xs text-muted-foreground">{student.enrolled}</p>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
