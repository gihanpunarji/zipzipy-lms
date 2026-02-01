"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import Link from "next/link";
import { useAuth } from "@/app/components/auth-provider";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Check, Eye, EyeOff } from "lucide-react";

import { useActionState } from "react";
import { registerTeacher } from "../../actions";

export function TeacherRegisterForm() {
  const [state, formAction, isPending] = useActionState(registerTeacher, null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Pro");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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

  return (
    <>
      <form action={formAction} className="grid gap-6">
        {/* Hidden input for selected plan */}
        <input type="hidden" name="selectedPlan" value={selectedPlan} />
        {/* Personal Information */}
        <div className="grid gap-4">
          <h3 className="font-semibold">Personal Information</h3>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    name="firstName"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    name="lastName"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2 relative">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
            />
            <div className="absolute right-2 top-1/2 transform opacity-50 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              {showPassword ? <EyeOff className="h-4 w-4" onClick={togglePasswordVisibility} /> : <Eye className="h-4 w-4" onClick={togglePasswordVisibility} />}
            </div>
          </div>

          <div className="grid gap-2 relative">
            <Label htmlFor="confirm-password">Confirm password</Label>
            <Input
              id="confirm-password"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              required
            />
            <div className="absolute right-2 top-1/2 transform opacity-50 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              {showConfirmPassword ? <EyeOff className="h-4 w-4" onClick={toggleConfirmPasswordVisibility} /> : <Eye className="h-4 w-4" onClick={toggleConfirmPasswordVisibility} />}
            </div>
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

        {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
        <Button typeof="submit" className="w-full" disabled={isPending}>
          {isPending ? "Creating account..." : "Create an account & Start Free Trial"}
        </Button>

      </form>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/auth/login/teacher" className="underline">
          Login
        </Link>
      </div>
    </>
  );
}
