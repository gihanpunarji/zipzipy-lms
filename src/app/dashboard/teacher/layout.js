"use client";

import TeacherSidebar from "@/app/components/teacher-sidebar";
import { TeacherHeader } from "@/app/components/teacher-header";
import { useAuth } from "@/app/components/auth-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TeacherDashboardLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login/teacher");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr]">
      <TeacherSidebar />
      <div className="flex flex-col">
        <TeacherHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/30">
          {children}
        </main>
      </div>
    </div>
  );
}
