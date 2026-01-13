"use client";

import Link from "next/link";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { GraduationCap, BookOpen, Users } from "lucide-react";
import { Navbar } from "@/app/components/landing/navbar";
import { Footer } from "@/app/components/landing/footer";

export default function LoginRoleSelection() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-4 relative">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/auth-bg.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-indigo-900/50" />

        {/* Content */}
        <div className="w-full max-w-4xl relative z-10">
          {/* Logo & Title */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient-primary">
                ZipZipy LMS
              </span>
            </Link>
            <h1 className="text-3xl font-bold mt-4 mb-2 text-white">Welcome Back</h1>
            <p className="text-gray-200">Choose your role to continue</p>
          </div>

          {/* Role Selection Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-md mx-auto">
            {/* Student Login */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-500 cursor-pointer group">
              <Link href="/auth/login/student" className="block">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <BookOpen className="w-10 h-10 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Student</h2>
                    <p className="text-muted-foreground mb-6">
                      Access your courses, track progress, and continue learning
                    </p>
                  </div>
                  <Button className="w-full" size="lg">
                    Login as Student
                  </Button>
                </div>
              </Link>
            </Card>

            {/* Teacher Login */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500 cursor-pointer group">
              <Link href="/auth/login/teacher" className="block">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Teacher</h2>
                    <p className="text-muted-foreground mb-6">
                      Manage courses, track student progress, and create content
                    </p>
                  </div>
                  <Button className="w-full" size="lg" variant="outline">
                    Login as Teacher
                  </Button>
                </div>
              </Link>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-200">
              Don&apos;t have an account?{" "}
              <Link href="/auth/register" className="text-white font-semibold hover:underline">
                Register as Teacher
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}
