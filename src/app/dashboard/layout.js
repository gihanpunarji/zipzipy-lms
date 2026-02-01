"use client";

import { useAuth } from "@/app/components/auth-provider";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }) {
  const { user, userRole, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      // Not logged in - redirect to login
      router.push("/auth/login");
    } else if (!loading && user && userRole) {
      // Logged in - check if they're in the right dashboard
      if (pathname.startsWith('/dashboard/teacher') && userRole !== 'teacher') {
        // Non-teacher trying to access teacher dashboard
        router.push('/dashboard');
      } else if (pathname === '/dashboard' && userRole === 'teacher') {
        // Teacher at generic dashboard - redirect to teacher dashboard
        router.push('/dashboard/teacher');
      }
    }
  }, [user, userRole, loading, router, pathname]);

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
    <div className="min-h-screen w-full">
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}
