import { notFound } from "next/navigation";
import { serviceDetails } from "@/data/serviceDetails";
import { ServiceDetailClient } from "./ServiceDetailClient";

// Required for next.config.ts output: 'export'
export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = serviceDetails[resolvedParams.slug];

  if (!service) {
    return notFound();
  }

  return <ServiceDetailClient service={service} />;
}
