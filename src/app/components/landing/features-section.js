"use client";

import {
  BookOpenCheck,
  ClipboardCheck,
  BarChart,
  Users,
  LayoutGrid,
  Award,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export function FeaturesSection() {
  const studentFeatures = [
    {
      icon: BookOpenCheck,
      title: "Access Courses",
      description: "Browse and enroll in courses. Access all learning materials in one place.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ClipboardCheck,
      title: "Submit Assignments",
      description: "Complete and submit assignments directly through the platform.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart,
      title: "Track Progress",
      description: "Monitor your learning journey with detailed analytics.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const teacherFeatures = [
    {
      icon: Users,
      title: "Manage Students",
      description: "Keep all your students organized in one place.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: LayoutGrid,
      title: "Organize Courses",
      description: "Create, edit, and manage course content easily.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Award,
      title: "Review & Grade",
      description: "Review submissions and manage grading efficiently.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Everything You Need</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful Features for
            <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Student Features */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">For Students</h3>
            </div>

            <div className="space-y-4">
              {studentFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group relative overflow-hidden border border-border/50 hover:border-primary/30 rounded-xl p-6 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>

                    {/* Hover effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Teacher Features */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-primary flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">For Teachers</h3>
            </div>

            <div className="space-y-4">
              {teacherFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group relative overflow-hidden border border-border/50 hover:border-primary/30 rounded-xl p-6 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>

                    {/* Hover effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

