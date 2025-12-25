"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Play, Star, Users, Clock, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-float" style={{ background: 'rgba(139, 92, 246, 0.15)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float" style={{ background: 'rgba(6, 182, 212, 0.15)', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'rgba(236, 72, 153, 0.1)' }}></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 animate-fade-in-up order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border rounded-full px-3 py-1.5 md:px-4 md:py-2 w-fit backdrop-blur-sm" style={{ background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.2)' }}>
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" style={{ color: '#8b5cf6' }} />
              <span className="text-xs md:text-sm font-medium text-gradient-primary">
                Master New Skills Today
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <span className="block mb-2">Learn, Grow, and</span>
                <span className="text-gradient-primary">Excel in Tech</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                Access premium courses designed by industry experts. Start your journey to becoming a skilled developer today.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-4 md:gap-8 py-2">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}>5</div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}>K</div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #ec4899, #f59e0b)' }}>+</div>
                </div>
                <div className="text-sm md:text-base">
                  <div className="font-semibold">5,000+ Students</div>
                  <div className="text-xs text-muted-foreground">Learning with us</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-warning text-warning" />
                  ))}
                </div>
                <span className="text-sm md:text-base font-semibold">4.9/5</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
              <Link href="/courses" className="group w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-gradient-primary text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-base md:text-lg px-6 md:px-8 h-12 md:h-14"
                  style={{ boxShadow: '0 4px 14px 0 rgba(139, 92, 246, 0.4)' }}
                >
                  <Play className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                  Explore Courses
                </Button>
              </Link>
              <Link href="/courses" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 transition-all duration-300 hover:bg-primary/5 text-base md:text-lg px-6 md:px-8 h-12 md:h-14"
                  style={{ borderColor: '#8b5cf6', color: '#8b5cf6' }}
                >
                  View Demo
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-4 opacity-70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-xs md:text-sm text-muted-foreground">Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-xs md:text-sm text-muted-foreground">Expert Instructors</span>
              </div>
            </div>
          </div>

          {/* Right content - Course Preview */}
          <div className="relative animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-video md:aspect-square lg:aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)' }}>
              {/* Video thumbnail with play button */}
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e1b33 0%, #2d2847 100%)' }}>
                  {/* Placeholder for course thumbnail */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-3 md:space-y-4 p-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto cursor-pointer hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                        <Play className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white ml-1" />
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-white">Watch Course Intro</h3>
                        <p className="text-xs md:text-sm text-gray-400">See what you&apos;ll learn</p>
                      </div>
                    </div>
                  </div>

                  {/* Course stats overlay */}
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 flex items-center justify-between bg-black/50 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <Users className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      <span className="text-xs md:text-sm text-white font-medium">2.5k enrolled</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-1.5">
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-warning text-warning" />
                      <span className="text-xs md:text-sm text-white font-medium">4.9</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating course cards */}
              <div className="hidden md:block absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-card border rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl backdrop-blur-sm animate-bounce-in" style={{ border: '1px solid rgba(139, 92, 246, 0.2)', animationDelay: '0.6s', maxWidth: '180px' }}>
                <div className="space-y-2">
                  <div className="text-xs lg:text-sm font-semibold">🔥 Trending Course</div>
                  <div className="text-xs text-muted-foreground">Full Stack Development</div>
                  <div className="flex items-center gap-1">
                    <div className="text-xs lg:text-sm font-bold text-gradient-primary">Free</div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-card border rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl backdrop-blur-sm animate-bounce-in" style={{ border: '1px solid rgba(6, 182, 212, 0.2)', animationDelay: '0.8s', maxWidth: '180px' }}>
                <div className="space-y-2">
                  <div className="text-xs lg:text-sm font-semibold">⚡ AI-Powered</div>
                  <div className="text-xs text-muted-foreground">Learn Smarter</div>
                  <div className="flex items-center gap-1">
                    <div className="text-xs lg:text-sm font-bold text-gradient-secondary">Get Started</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
