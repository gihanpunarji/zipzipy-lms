import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { certificates } from "@/lib/data";

export default function CertificatesPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">My Certificates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <Link
            key={certificate.id}
            href={`/dashboard/certificates/${certificate.id}`}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <Image
                src={certificate.thumbnail}
                alt={certificate.title}
                width={400}
                height={300}
                className="rounded-t-lg object-cover w-full aspect-[4/3]"
              />
              <CardHeader>
                <CardTitle>{certificate.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Course: {certificate.course}
                </p>
                <p className="text-sm text-muted-foreground">
                  Issued: {certificate.issueDate}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}