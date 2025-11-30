"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { certificates } from "@/lib/data";
import { Download } from "lucide-react";

export default function CertificateViewerPage() {
  const { id } = useParams();
  const certificate = certificates.find((c) => c.id === id);

  if (!certificate) {
    return <div>Certificate not found</div>;
  }

  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-center">{certificate.title}</CardTitle>
          <p className="text-center text-muted-foreground">
            For completing {certificate.course}
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="relative w-full aspect-[4/3] mb-6">
            <Image
              src={certificate.thumbnail}
              alt={certificate.title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <Link href={certificate.downloadLink} download>
            <Button size="lg">
              <Download className="h-5 w-5 mr-2" /> Download Certificate
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
