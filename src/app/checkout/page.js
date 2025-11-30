"use client";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handlePay = () => {
    // Simulate payment processing
    alert("Payment successful! Redirecting to dashboard...");
    // In a real app, you would process payment and then redirect
    // router.push("/dashboard");
  };

  const orderSummary = {
    item: "Pro Plan Subscription",
    amount: "$49.00",
    tax: "$3.50",
    total: "$52.50",
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          <CardDescription>Complete your purchase</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Payment Details</h3>
            <div className="grid gap-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                type="text"
                placeholder="**** **** **** ****"
                value={formData.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  type="text"
                  placeholder="***"
                  value={formData.cvv}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-2 border-t pt-4">
            <h3 className="text-lg font-semibold">Order Summary</h3>
            <div className="flex justify-between">
              <span>{orderSummary.item}</span>
              <span>{orderSummary.amount}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>{orderSummary.tax}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>{orderSummary.total}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handlePay}>
            Pay {orderSummary.total}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
