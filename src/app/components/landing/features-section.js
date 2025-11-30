"use client";

import {
  BookOpenCheck,
  LayoutGrid,
  ClipboardCheck,
  Award,
  Users,
  BarChart,
} from "lucide-react";
import { Card } from "@/app/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: BookOpenCheck,
      title: "Premium Course Content",
      description:
        "Access expertly crafted courses with real-world projects and hands-on exercises.",
      gradient: "from-primary to-accent",
      delay: "0s",
    },
    {
      icon: LayoutGrid,
      title: "Learn at Your Pace",
      description:
        "Study anytime, anywhere with lifetime access to all course materials and updates.",
      gradient: "from-secondary to-primary",
      delay: "0.1s",
    },
    {
      icon: ClipboardCheck,
      title: "Practical Assignments",
      description:
        "Apply what you learn with real-world projects and get feedback from instructors.",
      gradient: "from-accent to-secondary",
      delay: "0.2s",
    },
    {
      icon: Award,
      title: "Verified Certificates",
      description:
        "Earn industry-recognized certificates to showcase your new skills to employers.",
      gradient: "from-success to-primary",
      delay: "0.3s",
    },
    {
      icon: Users,
      title: "Community Support",
      description:
        "Join thousands of learners, share knowledge, and grow together in our community.",
      gradient: "from-warning to-accent",
      delay: "0.4s",
    },
    {
      icon: BarChart,
      title: "Track Your Progress",
      description:
        "Monitor your learning journey with detailed analytics and achievement milestones.",
      gradient: "from-primary to-secondary",
      delay: "0.5s",
    },
  ];

  return (
    <section id="features" className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden bg-muted/50">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16 animate-fade-in-up">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Powerful Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Why Choose{" "}
              <span className="text-gradient-primary">
                Our Courses
              </span>
            </h2>
            <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl leading-relaxed">
              Get everything you need to master new skills and advance your career with
              our comprehensive, project-based courses.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 bg-card/50 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="p-8 relative z-10">
                  {/* Icon container */}
                  <div className="mb-6">
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 group-hover:scale-110 transition-transform duration-500`}>
                      <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-transparent group-hover:to-transparent transition-all duration-500">
                        <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
