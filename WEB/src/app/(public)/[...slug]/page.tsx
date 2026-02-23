import { getPage } from "@/src/lib/cms/getPage";
import TemplateResolver from "@/src/lib/cms/templateResolver";

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function Page({ params }: PageProps) {

  const resolvedParams = await params;

  const slug =
    resolvedParams.slug?.join("/") || "home";

  const page = await getPage(slug);

  return <TemplateResolver page={page} />;
}