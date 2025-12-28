"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Check } from "lucide-react";
import { Navbar } from "@/app/components/landing/navbar";
import { Footer } from "@/app/components/landing/footer";

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "Basic",
      price: "Rs.3000.00",
      period: "/month",
      description: "Perfect for individual teachers getting started",
      features: [
        "Up to 3 videos for a month",
        "Basic student management",
        "Basic assignment tools",
        "Email support",
        "Zoom recording upload",
        "Videos will delete after 30 days",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "Rs.5000.00",
      period: "/month",
      description: "Best for professional educators and small institutions",
      features: [
        "Up to 5 videos for a month",
        "Better student management",
        "Better assignment tools",
        "Email support",
        "Mobile SMS alerts (upto 100 per month)",
        "Student payement management",
        "Zoom recording upload",
        "Video deletion up to 3 months",
      ],
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Max",
      price: "Rs.10000.00",
      period: "/month",
      description: "For large institutions with large number of students",
      features: [
        "Up to 10 videos for a month",
        "Advanced student management",
        "Advanced assignment tools",
        "Email support",
        "Mobile SMS alerts (Unlimited)",
        "Student payement management",
        "Student attendance management",
        "Zoom recording upload",
        "Video deletion up to 1 year",
        "Screen recording protection",
        "Advanced security features",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Choose Your{" "}
                <span className="text-gradient-primary">Perfect Plan</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Get your 7 days free trial on any plan. No credit card required.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-8 transition-all duration-300 ${tier.highlighted
                    ? "bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary shadow-2xl shadow-primary/20 scale-105 lg:scale-110"
                    : "bg-card border border-border hover:shadow-lg"
                    }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {tier.description}
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-gradient-primary">
                        {tier.price}
                      </span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div
                          className={`rounded-full p-1 mt-0.5 ${tier.highlighted
                            ? "bg-primary/20"
                            : "bg-muted"
                            }`}
                        >
                          <Check
                            className={`w-4 h-4 ${tier.highlighted
                              ? "text-primary"
                              : "text-muted-foreground"
                              }`}
                          />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/auth/register/teacher">
                    <Button
                      className={`w-full ${tier.highlighted
                        ? "bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary/50"
                        : "bg-muted hover:bg-muted/80"
                        } transition-all duration-300`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            {/* Free Trial Notice */}
            <div className="mt-16 text-center">
              <p className="text-lg text-muted-foreground">
                Start your{" "}
                <span className="text-primary font-semibold">
                  7-day free trial
                </span>{" "}
                today. Cancel anytime, no questions asked.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-lg mb-2">
                  How does the 7-day free trial work?
                </h3>
                <p className="text-muted-foreground">
                  Sign up for any plan and get full access for 7 days. No credit
                  card required. After the trial, you can choose to continue with
                  a paid subscription or cancel anytime.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-lg mb-2">
                  Can I change plans later?
                </h3>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes
                  will be reflected in your next billing cycle.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-lg mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and bank transfers for
                  annual subscriptions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
