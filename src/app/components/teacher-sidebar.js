"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  FileText,
  BarChart3,
  Settings,
  GraduationCap,
  FolderKanban,
  MessageSquare,
  Calendar,
} from "lucide-react";

const teacherLinks = [
  {
    href: "/dashboard/teacher",
    label: "Overview",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/teacher/courses",
    label: "My Courses",
    icon: BookOpen,
  },
  {
    href: "/dashboard/teacher/students",
    label: "Students",
    icon: Users,
  },
  {
    href: "/dashboard/teacher/assignments",
    label: "Assignments",
    icon: FileText,
  },
  {
    href: "/dashboard/teacher/analytics",
    label: "Analytics",
    icon: BarChart3,
  },
  {
    href: "/dashboard/teacher/content",
    label: "Content Library",
    icon: FolderKanban,
  },
  {
    href: "/dashboard/teacher/schedule",
    label: "Schedule",
    icon: Calendar,
  },
  {
    href: "/dashboard/teacher/messages",
    label: "Messages",
    icon: MessageSquare,
  },
  {
    href: "/dashboard/teacher/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function TeacherSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        {/* Logo Section */}
        <div className="flex h-16 items-center border-b px-6 lg:h-[70px]">
          <Link href="/dashboard/teacher" className="flex items-center gap-3 font-semibold group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">Teacher Portal</span>
              <span className="text-xs text-muted-foreground">ZipZipy LMS</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-auto py-4">
          <nav className="grid items-start gap-1 px-4 text-sm font-medium">
            {teacherLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-white dark:hover:bg-slate-800",
                    {
                      "bg-gradient-to-r from-primary/10 to-purple-600/10 text-primary border-l-4 border-primary font-semibold shadow-sm": isActive,
                      "text-muted-foreground hover:text-foreground": !isActive,
                    }
                  )}
                >
                  <Icon className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )} />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Section */}
        <div className="border-t p-4">
          <div className="rounded-xl bg-gradient-to-br from-primary/10 to-purple-600/10 p-4 border border-primary/20">
            <h4 className="text-sm font-semibold mb-1">Need Help?</h4>
            <p className="text-xs text-muted-foreground mb-3">
              Check our documentation or contact support
            </p>
            <Link href="/dashboard/teacher/help">
              <button className="w-full text-xs bg-primary text-white rounded-lg py-2 hover:bg-primary/90 transition-colors">
                Get Support
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
