"use client";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import Link from "next/link";
import { useAuth } from "@/app/components/auth-provider";
import { useId, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Check } from "lucide-react";
import { Header } from "@/app/components/header";
import { Navbar } from "@/app/components/landing/navbar";
import { Footer } from "@/app/components/landing/footer";

export default function RegisterPage() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("Pro");
  const router = useRouter();

  const pricingPlans = [
    {
      name: "Basic",
      price: "Rs.3000.00",
      features: ["Up to 3 videos/month", "Basic student management", "Basic assignment tools"]
    },
    {
      name: "Pro",
      price: "Rs.5000.00",
      features: ["Up to 5 videos/month", "Better student management", "SMS alerts (100/month)"],
      popular: true
    },
    {
      name: "Max",
      price: "Rs.10000.00",
      features: ["Up to 10 videos/month", "Advanced student management", "Unlimited SMS alerts"]
    }
  ];

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await signUp(email, password, { firstName, lastName, role: 'teacher' });
      if (error) {
        // Handle specific Supabase auth errors
        if (error.message.includes('already registered')) {
          setError("This email is already registered. Please login instead.");
        } else if (error.message.includes('invalid email')) {
          setError("Please enter a valid email address.");
        } else if (error.message.includes('Password')) {
          setError("Password must be at least 6 characters long.");
        } else {
          setError(error.message);
        }
        return;
      }

      if (data?.user) {
        if (data.user.identities && data.user.identities.length === 0) {
          setError("This email is already registered. Please login instead.");
          setLoading(false);
          return;
        }

        console.log("Registration successful! Setting up account...");

        try {
          // Insert user into users table
          const { data: userData, error: userError } = await supabase.from('users').insert({
            uid: data.user.id,
            email: data.user.email,
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            role: 'teacher',
            status: 'active',
            created_at: new Date(),
            updated_at: new Date()
          }).select();

          if (userError) {
            console.error("Database insertion error:", userError);
            setError("Failed to create user profile. Please contact support.");
            setLoading(false);
            return;
          }

          if (userData && userData.length > 0) {
            console.log("User profile created successfully!");

            // Insert teacher plan with trial start date
            const { error: planError } = await supabase.from('teacher_plan').insert({
              id: userData[0].id,
              selected_plan: selectedPlan,
              created_at: new Date()
            });

            if (planError) {
              console.error("Plan insertion error:", planError);
              setError("Failed to set up your plan. Please contact support.");
              setLoading(false);
              return;
            }

            console.log("Plan setup successful! Redirecting...");

            // Use window.location for reliable redirect after auth
            // router.push sometimes doesn't work right after auth state change
            window.location.href = "/dashboard/teacher";
          }
        } catch (err) {
          console.error("Setup error:", err);
          setError("An error occurred during setup. Please try again.");
          setLoading(false);
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen relative py-8">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/teacher-auth-bg.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <Card className="w-full max-w-2xl relative z-10 shadow-2xl mx-4">
          <CardHeader>
            <CardTitle className="text-2xl">Teacher Sign Up</CardTitle>
            <CardDescription>
              Enter your information and choose a plan to get started with 7 days free trial
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="grid gap-6">
              {/* Personal Information */}
              <div className="grid gap-4">
                <h3 className="font-semibold">Personal Information</h3>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Label htmlFor="first-name">First name</Label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Plan Selection */}
              <div className="grid gap-4">
                <h3 className="font-semibold">Choose Your Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {pricingPlans.map((plan) => (
                    <div
                      key={plan.name}
                      onClick={() => setSelectedPlan(plan.name)}
                      className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${selectedPlan === plan.name
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                        }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                          <span className="bg-primary text-white px-2 py-0.5 rounded text-xs font-semibold">
                            Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-2">
                        <h4 className="font-bold text-lg">{plan.name}</h4>
                        <p className="text-sm text-primary font-semibold">{plan.price}</p>
                      </div>
                      <ul className="space-y-1">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-1 text-xs">
                            <Check className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {selectedPlan === plan.name && (
                        <div className="absolute top-2 right-2">
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Start with 7 days free trial. No credit card required.<br />
                  <span>Read more about plan details at <a href="/pricing" className="underline">pricing</a> section.</span>
                </p>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating account..." : "Create an account & Start Free Trial"}
              </Button>

            </form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="underline">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>

  );
}