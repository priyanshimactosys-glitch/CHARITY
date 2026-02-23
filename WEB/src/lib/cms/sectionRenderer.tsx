import BookAppointmentPage from "@/src/modules/booking/page";
import HeroBlock from "@/src/modules/cms/blocks/HeroBlock";
import TextBlock from "@/src/modules/cms/blocks/TextBlock";
import HelpSection from "@/src/modules/whyus/sections/HelpSection";
import ImpactStats from "@/src/modules/whyus/sections/ImpactStats";
import MissionVision from "@/src/modules/whyus/sections/MissionVision";
import ServicesOverview from "@/src/services/ServicesOverview";


const BLOCKS: any = {
  hero: HeroBlock,
  text: TextBlock,
  mission_vision: MissionVision,
  impact_stats: ImpactStats,
  help_section: HelpSection,
  services:ServicesOverview,
  booking_steps:BookAppointmentPage
};

export default function SectionRenderer({ sections }: any) {
  return (
    <>
      {sections?.map((section: any, index: number) => {
        const Component = BLOCKS[section.type];

        if (!Component) return null;

        return <Component key={index} {...section.content} />;
      })}
    </>
  );
}
