"use client";

import Link from "next/link";
import { Navbar } from "../components/landing/navbar";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Play, Clock, Users, Star, BookOpen, Award, Zap, Code, Database, Brain, Trophy } from "lucide-react";

export default function CoursesPage() {
  const course = {
    id: 1,
    title: "AI-Powered Full-Stack Software Development",
    shortDescription: "Transform from beginner to job-ready developer with AI-assisted learning",
    description: "The AI-Powered Full-Stack Software Development Course by ZipZipy Pvt Ltd is a complete, industry-aligned, project-driven training program designed to transform beginners and intermediate learners into job-ready full-stack developers.",
    price: "Free",
    duration: "6 months",
    students: "150+",
    rating: 4.9,
    reviews: 89,
    level: "Beginner to Advanced",
    thumbnail: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    lessons: 200,
    modules: 7,
    trending: true
  };

  const highlights = [
    {
      icon: Brain,
      title: "AI-Enhanced Learning",
      description: "Built-in AI tools for code reviews, debugging, and personalized feedback"
    },
    {
      icon: Code,
      title: "Real-World Projects",
      description: "Build production-grade applications following industry standards"
    },
    {
      icon: BookOpen,
      title: "Assignment-Based",
      description: "Practical assignments simulating real software engineering tasks"
    },
    {
      icon: Trophy,
      title: "Internship Opportunity",
      description: "Top student gets an internship at ZipZipy Pvt Ltd"
    }
  ];

  const modules = [
    {
      number: 1,
      title: "Core Web Development",
      topics: ["HTML, CSS, JavaScript", "DOM Manipulation", "Responsive UI", "Tailwind CSS"],
      icon: Code
    },
    {
      number: 2,
      title: "Frontend with Next.js",
      topics: ["Next.js App Router", "State Management", "API Routes", "Authentication"],
      icon: Zap
    },
    {
      number: 3,
      title: "Backend Engineering",
      topics: ["Node.js + Express", "REST APIs", "Middleware", "Payment Systems"],
      icon: Database
    },
    {
      number: 4,
      title: "Databases",
      topics: ["SQL & NoSQL", "Prisma ORM", "Schema Modeling", "Performance Tuning"],
      icon: Database
    },
    {
      number: 5,
      title: "AI Integration",
      topics: ["Prompt Engineering", "LLM Development", "AI-Powered Features"],
      icon: Brain
    },
    {
      number: 6,
      title: "Deployment & DevOps",
      topics: ["Vercel/Render", "CI/CD Pipelines", "Production Best Practices"],
      icon: Zap
    },
    {
      number: 7,
      title: "Capstone Project",
      topics: ["Full SaaS Project", "User Auth", "Admin Dashboard", "AI Tools"],
      icon: Trophy
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-float" style={{ background: 'rgba(139, 92, 246, 0.15)' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float" style={{ background: 'rgba(6, 182, 212, 0.15)', animationDelay: '1s' }}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-card border rounded-full px-4 py-2" style={{ borderColor: 'rgba(139, 92, 246, 0.2)' }}>
                <Zap className="w-4 h-4" style={{ color: '#8b5cf6' }} />
                <span className="text-sm font-medium text-gradient-primary">
                  Industry-Aligned • Project-Driven • AI-Assisted
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                  <span className="text-gradient-primary">{course.title}</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <div className="flex items-center gap-1.5">
                  <Star className="w-5 h-5 fill-warning text-warning" />
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-sm text-muted-foreground">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{course.students}</span>
                  <span className="text-sm text-muted-foreground">students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{course.duration}</span>
                  <span className="text-sm text-muted-foreground">duration</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/courses/1" className="group w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-primary text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-base md:text-lg px-8 h-14"
                    style={{ boxShadow: '0 4px 14px 0 rgba(139, 92, 246, 0.4)' }}
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Start Learning Now
                  </Button>
                </Link>
                <Link href="/courses/1" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 transition-all duration-300 hover:bg-primary/5 text-base md:text-lg px-8 h-14"
                    style={{ borderColor: '#8b5cf6', color: '#8b5cf6' }}
                  >
                    View Curriculum
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Course Preview */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="overflow-hidden">
                <div className="relative aspect-video" style={{ background: course.thumbnail }}>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="text-center space-y-4 p-4">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto cursor-pointer hover:scale-110 transition-transform duration-300">
                        <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg md:text-xl font-bold text-white">Watch Course Intro</h3>
                        <p className="text-sm text-white/80">See what you'll build</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-gradient-primary">{course.price}</div>
                      <p className="text-sm text-muted-foreground">Limited time offer</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{course.modules}</div>
                      <p className="text-sm text-muted-foreground">Modules</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{course.lessons}+</div>
                      <p className="text-sm text-muted-foreground">Lessons</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Special */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Makes This Course <span className="text-gradient-primary">Special</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              This is not just a typical course. It's a full mentoring experience designed around real software engineering practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Complete <span className="text-gradient-primary">Curriculum</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              7 comprehensive modules taking you from beginner to job-ready developer
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid md:grid-cols-[auto,1fr] gap-6 p-6 md:p-8">
                    <div className="flex md:flex-col items-center md:items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-gradient-primary">{module.number}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-bold">{module.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="px-3 py-1.5 bg-muted rounded-full text-sm"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internship Opportunity */}
      <section className="py-16 md:py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Internship Opportunity for Top Students
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              All assignments are evaluated by ZipZipy engineering leads. Top 10 highest-performing students will be shortlisted, and 1 student will be selected for an internship at ZipZipy Pvt Ltd.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">Top 10</div>
                <div className="text-white/80">Shortlisted Students</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">1 Winner</div>
                <div className="text-white/80">Gets Internship</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About ZipZipy */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 animate-fade-in-up">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                    Z
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">About ZipZipy Pvt Ltd</h3>
                    <p className="text-muted-foreground">Modern Sri Lankan Software Company</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ZipZipy Pvt Ltd is a modern Sri Lankan software company specializing in SaaS development, AI-based platforms, mobile & web applications, cloud solutions, and payment-integrated systems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We focus on building clean, scalable, modern software using industry best practices — and we are committed to developing the next generation of Sri Lankan software engineers.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t">
                  <div>
                    <div className="text-2xl font-bold text-gradient-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient-primary">Local</div>
                    <div className="text-sm text-muted-foreground">Sri Lankan Team</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to Start Your <span className="text-gradient-primary">Developer Journey?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join 150+ students learning industry-standard full-stack development with AI assistance. Build real projects, gain job-ready skills, and get a chance to intern at ZipZipy.
            </p>
            <Link href="/courses/1">
              <Button
                size="lg"
                className="bg-gradient-primary text-white hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg px-12 h-16"
                style={{ boxShadow: '0 4px 14px 0 rgba(139, 92, 246, 0.4)' }}
              >
                <Play className="mr-2 w-6 h-6" />
                Enroll Now - It's Free!
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
