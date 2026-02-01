
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Navbar } from "@/app/components/landing/navbar";
import { Footer } from "@/app/components/landing/footer";
import { TeacherRegisterForm } from "./teacher-register-form";

export const metadata = {
  title: "Teacher Registration | ZipZipy LMS",
  description: "Sign up as a teacher on ZipZipy LMS and start teaching today.",
};

export default function RegisterPage() {
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
        <Card className="w-full mt-10 md:mt-20 max-w-2xl relative z-10 shadow-2xl mx-4">
          <CardHeader>
            <CardTitle className="text-2xl">Teacher Sign Up</CardTitle>
            <CardDescription>
              Enter your information and choose a plan to get started with 7 days free trial
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TeacherRegisterForm />
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}