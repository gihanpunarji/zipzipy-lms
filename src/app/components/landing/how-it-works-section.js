import {
  UserPlus,
  Book,
  Award,
} from "lucide-react";

export function HowItWorksSection() {
    const steps = [
        {
            icon: UserPlus,
            title: "Create an Account",
            description: "Sign up for a free account and get started in minutes.",
        },
        {
            icon: Book,
            title: "Choose a Course",
            description: "Browse our extensive library of courses and choose the one that's right for you.",
        },
        {
            icon: Award,
            title: "Start Learning",
            description: "Start learning at your own pace and earn a certificate upon completion.",
        },
    ];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get Started in 3 Easy Steps
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Getting started with ZipZipy LMS is easy. Just follow these three simple steps.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-12 py-12 lg:grid-cols-3">
          {steps.map((step, index) => {
                const Icon = step.icon;
                return(
                    <div key={step.title} className="grid gap-4 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <Icon className="h-8 w-8" />
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground">
                                {step.description}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
}
