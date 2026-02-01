
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Navbar } from "@/app/components/landing/navbar";
import { Footer } from "@/app/components/landing/footer";
import { TeacherLoginForm } from "./teacher-login-form";

export const metadata = {
  title: "Teacher Login | ZipZipy LMS",
  description: "Login to your teacher account at ZipZipy LMS",
};

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen relative">

        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/teacher-auth-bg.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <Card className="w-full max-w-sm relative z-10 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">Teacher Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TeacherLoginForm />
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}