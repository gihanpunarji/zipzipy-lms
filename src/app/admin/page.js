"use client";

import { Card } from "../components/ui/card";
import { DollarSign, TrendingUp, Users, BookOpen } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Income",
      value: "Rs 0",
      icon: DollarSign,
      color: "#10b981"
    },
    {
      title: "Monthly Profit",
      value: "Rs 0",
      icon: TrendingUp,
      color: "#8b5cf6"
    },
    {
      title: "Total Students",
      value: "150",
      icon: Users,
      color: "#06b6d4"
    },
    {
      title: "Active Courses",
      value: "1",
      icon: BookOpen,
      color: "#ec4899"
    }
  ];

  const recentStudents = [
    { name: "John Doe", email: "john@example.com", enrolled: "2 days ago" },
    { name: "Jane Smith", email: "jane@example.com", enrolled: "3 days ago" },
    { name: "Mike Johnson", email: "mike@example.com", enrolled: "5 days ago" },
    { name: "Sarah Williams", email: "sarah@example.com", enrolled: "1 week ago" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Students */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">Recent Students</h2>
        <div className="space-y-4">
          {recentStudents.map((student, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b last:border-b-0"
            >
              <div>
                <p className="font-medium">{student.name}</p>
                <p className="text-sm text-muted-foreground">{student.email}</p>
              </div>
              <span className="text-sm text-muted-foreground">{student.enrolled}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
