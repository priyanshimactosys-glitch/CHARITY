import StandardTemplate from "@/src/modules/cms/templates/StandardTemplate";

export default function TemplateResolver({ page }: any) {
  return <StandardTemplate page={page} />;
}
