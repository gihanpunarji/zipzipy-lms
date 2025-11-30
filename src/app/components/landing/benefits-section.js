"use client";

import Image from "next/image";
import { Check, TrendingUp, DollarSign, Users, BarChart3 } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      text: "Increase learner engagement and completion rates",
      icon: TrendingUp,
      color: "from-primary to-accent",
    },
    {
      text: "Reduce training costs and administrative overhead",
      icon: DollarSign,
      color: "from-secondary to-primary",
    },
    {
      text: "Improve team performance and productivity",
      icon: Users,
      color: "from-accent to-secondary",
    },
    {
      text: "Gain valuable insights into your training programs",
      icon: BarChart3,
      color: "from-success to-primary",
    },
  ];

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2"></div>

      <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full px-4 py-2 w-fit backdrop-blur-sm">
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Drive Business Growth with{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Effective Training
              </span>
            </h2>
            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
              Our LMS helps you to upskill your team, improve productivity, and
              achieve your business goals with measurable results.
            </p>
          </div>

          <ul className="grid gap-5 py-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <li
                  key={benefit.text}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-background rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-transparent group-hover:to-transparent transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-lg leading-relaxed group-hover:text-primary transition-colors duration-300">
                      {benefit.text}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative lg:h-[600px] h-96 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
          <div className="relative h-full">
            <Image
              src="/images/hero-mockup.svg"
              alt="Benefits Dashboard"
              width={550}
              height={310}
              className="mx-auto aspect-video overflow-hidden rounded-3xl object-cover object-center sm:w-full lg:order-last drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
