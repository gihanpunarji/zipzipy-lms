"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { GraduationCap, Users, ArrowRight, BookOpen, ClipboardCheck, BarChart3 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container px-4 md:px-6 py-20 relative z-10">
        <div className="text-center space-y-12 max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Modern Education Platform</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Learning Management
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                System
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Empowering students to learn and teachers to manage everything in one powerful platform
            </p>
          </div>

          {/* Two Cards */}
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {/* For Students Card */}
            <div className="group relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 rounded-2xl p-10 bg-gradient-to-br from-background to-primary/5 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>

              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl font-bold">For Students</h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Access your courses, track progress, submit assignments, and view your grades all in one place.
                </p>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Access all learning materials</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Submit assignments easily</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Track your progress</span>
                  </div>
                </div>

                <Link href="/auth/register/student" className="block pt-4">
                  <Button className="w-full h-12 text-base group/btn bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                    Get Started as Student
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* For Teachers Card */}
            <div className="group relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 rounded-2xl p-10 bg-gradient-to-br from-background to-primary/5 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>

              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl font-bold">For Teachers</h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  The best LMS to manage all your students in one place. Create courses, track progress, and grade assignments.
                </p>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Manage all students centrally</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Organize courses efficiently</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Review and grade work</span>
                  </div>
                </div>

                <Link href="/auth/register/teacher" className="block pt-4">
                  <Button variant="outline" className="w-full h-12 text-base group/btn border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300">
                    Get Started as Teacher
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
