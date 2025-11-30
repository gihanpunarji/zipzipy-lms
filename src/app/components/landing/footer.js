import Link from "next/link";
import { Package2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <div className="container flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <Package2 className="h-6 w-6" />
          <span className="">ZipZipy LMS</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link
            href="#features"
            className="text-sm hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm hover:underline underline-offset-4"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-sm hover:underline underline-offset-4"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-sm hover:underline underline-offset-4"
          >
            FAQ
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} ZipZipy Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
