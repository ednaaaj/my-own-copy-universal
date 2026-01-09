import { notFound } from "next/navigation";
import { APPLANCES } from "@/data/appliances";
import { toSlug, findApplianceBySlug } from "@/lib/utils";
import { ApplianceDetailContent } from "./ApplianceDetailContent";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ApplianceDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const appliance = findApplianceBySlug(APPLANCES, slug);

  if (!appliance) {
    notFound();
  }

  const applianceData = APPLANCES.find((a) => a.name === appliance.name)!;

  return (
    <ApplianceDetailContent
      name={applianceData.name}
      description={applianceData.description}
      blackBgFolderPath={applianceData.image_black_background}
    />
  );
}

// Generate static params for all appliances
export function generateStaticParams() {
  return APPLANCES.map((appliance) => ({
    slug: toSlug(appliance.name),
  }));
}
