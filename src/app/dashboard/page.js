import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, Student!</h1>
        <p className="text-muted-foreground">
          Here&apos;s a summary of your learning journey.
        </p>
      </div>
    </div>
  );
}