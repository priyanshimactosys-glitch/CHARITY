import SectionRenderer from "@/src/lib/cms/sectionRenderer";

export default function StandardTemplate({ page }: any) {
  return (
    <main>
      <SectionRenderer sections={page?.sections} />
    </main>
  );
}
