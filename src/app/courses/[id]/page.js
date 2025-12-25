"use client";

import { useState } from "react";
import { Navbar } from "../../components/landing/navbar";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import {
  Play,
  CheckCircle2,
  Lock,
  Star,
  Users,
  Clock,
  Download,
  Share2,
  ChevronDown,
  ChevronUp,
  BookOpen
} from "lucide-react";

export default function CoursePage({ params }) {
  const [activeSection, setActiveSection] = useState(0);
  const [expandedSections, setExpandedSections] = useState([0]);

  const course = {
    id: 1,
    title: "Complete Full Stack Web Development",
    description: "Master React, Node.js, MongoDB, and build real-world applications from scratch. This comprehensive course will take you from beginner to advanced level.",
    instructor: "John Doe",
    rating: 4.9,
    students: "2,543",
    duration: "42 hours",
    lastUpdated: "December 2024",
    price: "$49.99",
    curriculum: [
      {
        title: "Introduction to Web Development",
        lessons: [
          { id: 1, title: "Welcome to the Course", duration: "5:24", free: true, completed: true },
          { id: 2, title: "Course Overview and Roadmap", duration: "12:45", free: true, completed: true },
          { id: 3, title: "Setting Up Development Environment", duration: "18:32", free: false, completed: false },
          { id: 4, title: "HTML Fundamentals", duration: "24:18", free: false, completed: false }
        ]
      },
      {
        title: "JavaScript Essentials",
        lessons: [
          { id: 5, title: "JavaScript Basics", duration: "32:15", free: false, completed: false },
          { id: 6, title: "DOM Manipulation", duration: "28:42", free: false, completed: false },
          { id: 7, title: "ES6+ Features", duration: "35:20", free: false, completed: false },
          { id: 8, title: "Async JavaScript", duration: "42:10", free: false, completed: false }
        ]
      },
      {
        title: "React Fundamentals",
        lessons: [
          { id: 9, title: "Introduction to React", duration: "15:30", free: false, completed: false },
          { id: 10, title: "Components and Props", duration: "25:45", free: false, completed: false },
          { id: 11, title: "State and Lifecycle", duration: "30:12", free: false, completed: false },
          { id: 12, title: "Hooks Deep Dive", duration: "45:20", free: false, completed: false }
        ]
      },
      {
        title: "Backend Development with Node.js",
        lessons: [
          { id: 13, title: "Node.js Introduction", duration: "20:15", free: false, completed: false },
          { id: 14, title: "Express.js Setup", duration: "18:30", free: false, completed: false },
          { id: 15, title: "RESTful APIs", duration: "38:45", free: false, completed: false },
          { id: 16, title: "Database Integration", duration: "42:25", free: false, completed: false }
        ]
      }
    ]
  };

  const toggleSection = (index) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter(i => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  const totalLessons = course.curriculum.reduce((acc, section) => acc + section.lessons.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-16">
        {/* Video Player Section */}
        <div className="w-full bg-black">
          <div className="container mx-auto px-0">
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
              {/* Video Player Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto cursor-pointer hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">Welcome to the Course</h3>
                    <p className="text-sm md:text-base text-gray-400">Click to start learning</p>
                  </div>
                </div>
              </div>

              {/* Video Controls Overlay (YouTube-style) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                <div className="flex items-center gap-2 md:gap-4">
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white">
                    <Play className="w-4 h-4" />
                  </Button>
                  <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-1/4 bg-gradient-primary"></div>
                  </div>
                  <span className="text-white text-sm">1:24 / 5:24</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Course Info */}
              <div className="space-y-4 md:space-y-6 animate-fade-in-up">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                    {course.title}
                  </h1>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap items-center gap-4 md:gap-6 pb-6 border-b">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 md:w-5 md:h-5 fill-warning text-warning" />
                      <span className="font-bold">{course.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="font-semibold">{course.students}</span>
                    <span className="text-sm text-muted-foreground">Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="font-semibold">{course.duration}</span>
                    <span className="text-sm text-muted-foreground">Total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="font-semibold">{totalLessons}</span>
                    <span className="text-sm text-muted-foreground">Lessons</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button className="bg-gradient-primary text-white flex-1 sm:flex-initial h-12 md:h-14 text-base md:text-lg">
                    <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Download Resources
                  </Button>
                  <Button variant="outline" className="border-2 h-12 md:h-14 text-base md:text-lg" style={{ borderColor: '#8b5cf6', color: '#8b5cf6' }}>
                    <Share2 className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Share Course
                  </Button>
                </div>
              </div>

              {/* About Instructor */}
              <Card className="p-5 md:p-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg md:text-xl font-bold mb-4">About Your Instructor</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl md:text-2xl font-bold flex-shrink-0">
                    {course.instructor.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-bold mb-2">{course.instructor}</h4>
                    <p className="text-sm md:text-base text-muted-foreground mb-3">
                      Full Stack Developer & Educator with 10+ years of experience
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <span className="font-semibold">12</span> Courses
                      </div>
                      <div>
                        <span className="font-semibold">15,000+</span> Students
                      </div>
                      <div>
                        <span className="font-semibold">4.8</span> Average Rating
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Curriculum Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="p-4 md:p-6 border-b bg-gradient-primary">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Course Content</h3>
                  <p className="text-sm text-white/80">{course.curriculum.length} sections • {totalLessons} lessons</p>
                </div>

                <div className="max-h-[600px] overflow-y-auto">
                  {course.curriculum.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="border-b last:border-b-0">
                      {/* Section Header */}
                      <button
                        onClick={() => toggleSection(sectionIndex)}
                        className="w-full p-4 md:p-5 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
                      >
                        <div className="flex-1 pr-2">
                          <h4 className="font-semibold text-sm md:text-base mb-1">{section.title}</h4>
                          <p className="text-xs text-muted-foreground">{section.lessons.length} lessons</p>
                        </div>
                        {expandedSections.includes(sectionIndex) ? (
                          <ChevronUp className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 flex-shrink-0" />
                        )}
                      </button>

                      {/* Lessons */}
                      {expandedSections.includes(sectionIndex) && (
                        <div className="bg-muted/30">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <button
                              key={lesson.id}
                              className="w-full p-3 md:p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors border-t text-left"
                            >
                              <div className="flex-shrink-0">
                                {lesson.completed ? (
                                  <CheckCircle2 className="w-5 h-5 text-success" />
                                ) : lesson.free ? (
                                  <Play className="w-5 h-5 text-primary" />
                                ) : (
                                  <Lock className="w-5 h-5 text-muted-foreground" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium mb-1 truncate">{lesson.title}</p>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Clock className="w-3 h-3" />
                                  <span>{lesson.duration}</span>
                                  {lesson.free && (
                                    <span className="text-primary font-medium">Free Preview</span>
                                  )}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Enroll Button */}
                <div className="p-4 md:p-6 border-t bg-muted/30">
                  <div className="mb-4">
                    <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-1">
                      {course.price}
                    </div>
                    <p className="text-sm text-muted-foreground">One-time payment • Lifetime access</p>
                  </div>
                  <Button className="w-full bg-gradient-primary text-white h-12 md:h-14 text-base md:text-lg">
                    Enroll Now
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
