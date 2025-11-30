"use client";

import { Navbar } from "../components/landing/navbar";
import { Card } from "../components/ui/card";
import {
  Target,
  Eye,
  Code,
  Smartphone,
  ShoppingCart,
  Brain,
  GraduationCap,
  Monitor,
  Receipt,
  CheckCircle2,
  Zap,
  Users,
  Heart
} from "lucide-react";

export default function AboutPage() {
  const services = [
    {
      icon: Code,
      title: "Web Application Development",
      description: "Custom web systems, dashboards, admin panels, portals, and more."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Android and iOS apps built with modern frameworks and clean UI/UX."
    },
    {
      icon: Receipt,
      title: "POS & Inventory Systems",
      description: "Retail, restaurant, and warehouse management solutions."
    },
    {
      icon: Monitor,
      title: "Custom Software Solutions",
      description: "Any tailor-made system built exactly to business requirements."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Platforms",
      description: "High-performance online stores with payments, order management, and analytics."
    },
    {
      icon: Brain,
      title: "AI-Assisted Tools & Automation",
      description: "Intelligent features to optimize workflows, automate tasks, and improve accuracy."
    },
    {
      icon: GraduationCap,
      title: "Learning Management Solutions",
      description: "Modern LMS systems for instructors, coaches, institutes, and corporates."
    }
  ];

  const values = [
    { icon: CheckCircle2, text: "Clean and scalable code" },
    { icon: Zap, text: "Fast delivery timelines" },
    { icon: Users, text: "Transparent communication" },
    { icon: Heart, text: "Post-launch support" },
    { icon: Code, text: "Modern tech stack" },
    { icon: CheckCircle2, text: "Flexible pricing" },
    { icon: Target, text: "100% tailored solutions" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-float" style={{ background: 'rgba(139, 92, 246, 0.15)' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float" style={{ background: 'rgba(6, 182, 212, 0.15)', animationDelay: '1s' }}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              About <span className="text-gradient-primary">ZipZipy Pvt Ltd</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A Sri Lankan software development company dedicated to building high-quality, reliable, and modern digital solutions for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <Card className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  ZipZipy Pvt Ltd is a Sri Lankan software development company dedicated to building high-quality, reliable, and modern digital solutions for businesses of all sizes. We take on a wide range of development work—web applications, mobile apps, desktop systems, POS systems, e-commerce platforms, AI-powered tools, custom business solutions, and more.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  From planning to deployment, our focus is always on delivering clean, scalable, and future-ready software that helps our clients grow.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in simple processes, transparent communication, and engineering excellence. Whether it's a startup idea or a full enterprise solution, we treat every project with the same level of care and attention.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Who <span className="text-gradient-primary">We Are</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ZipZipy is a team of passionate software engineers, designers, and researchers dedicated to delivering innovative software solutions. We specialize in web and mobile app development, software development, UI/UX design, and digital transformation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We started our journey in 2020 with a bright vision and mission to grow in the software industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-8 md:p-12 hover:shadow-xl transition-all duration-300 animate-fade-in-up">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Mission</h3>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to push the boundaries of technology, leveraging the latest advancements to create products that not only meet but exceed our clients' expectations.
              </p>
            </Card>

            <Card className="p-8 md:p-12 hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Vision</h3>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become one of Sri Lanka's most trusted and innovative software companies—known for high-quality work, on-time delivery, and long-term partnerships.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What <span className="text-gradient-primary">We Do</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why Choose <span className="text-gradient-primary">Us</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We focus on long-term relationships, not just one-time projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 md:p-6 bg-card rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-medium">{value.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 md:py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Our Commitment
            </h2>
            <div className="space-y-4 text-lg md:text-xl text-white/90">
              <p className="leading-relaxed">
                At ZipZipy, every system we build reflects our dedication to quality and reliability. We understand the responsibility of building software that handles business operations—and we take that responsibility seriously.
              </p>
              <p className="leading-relaxed">
                We aim to grow together with our clients by building solutions that truly make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
