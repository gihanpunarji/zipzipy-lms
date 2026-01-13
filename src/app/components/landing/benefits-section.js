"use client";

import { Check, Users, BookOpen, Target } from "lucide-react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export function BenefitsSection() {
  const benefits = [
    "Centralized student management dashboard",
    "Easy course creation and organization",
    "Streamlined assignment grading workflow",
    "Real-time progress tracking and analytics",
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main content card */}
          <div className="relative overflow-hidden border-2 border-primary/20 rounded-3xl p-12 md:p-16 bg-gradient-to-br from-background via-background to-primary/5 shadow-2xl">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="relative space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">For Teachers</span>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  All Your Students in
                  <br />
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                    One Place
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                  The best LMS for teachers to manage courses, track student progress, and keep everything organized.
                </p>
              </div>

              {/* Benefits grid */}
              <div className="grid md:grid-cols-2 gap-4 pt-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
                <Link href="/auth/register/teacher">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 h-14 px-8 text-base">
                    <Users className="w-5 h-5 mr-2" />
                    Start Managing Your Students
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  <span>Free to get started</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
