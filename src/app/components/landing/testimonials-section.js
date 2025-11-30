"use client";

import Image from "next/image";
import { testimonials } from "@/lib/data";
import { Card, CardContent } from "@/app/components/ui/card";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16 animate-fade-in-up">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              What Our{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl leading-relaxed">
              We are trusted by leading companies to upskill their teams and
              drive business growth through exceptional learning experiences.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 bg-card/50 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="flex flex-col items-center justify-center p-8 text-center relative z-10">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Avatar with gradient ring */}
                <div className="relative mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-warning text-warning"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="mb-6 text-muted-foreground leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Name and role */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
