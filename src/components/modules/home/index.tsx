import Adventure from "@/components/ui/sections/Adventure";
import Banner2 from "@/components/ui/sections/Banner2";
import CaseStudy from "@/components/ui/sections/CaseStudy";
import ClientMessages from "@/components/ui/sections/ClientMessages";
import Contribution from "@/components/ui/sections/Contribution";
import Grow from "@/components/ui/sections/Grow";
import DeliveryHighlights from "@/components/ui/sections/DeliveryHighlights";
import GlobalFootprint from "@/components/ui/sections/GlobalFootprint";
import ImpactInNumbers from "@/components/ui/sections/ImpactInNumbers";
import Industries from "@/components/ui/sections/Industries";
import Products from "@/components/ui/sections/Products";
import TechStack from "@/components/ui/sections/TechStack";
import WeKnow from "@/components/ui/sections/Weknow";

export default function HomePage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Banner2 className="h-screen" />
      </div>

      <ImpactInNumbers />
      <Products />
      <CaseStudy />
      <WeKnow />
      <Industries />
      <GlobalFootprint />
      <Contribution />
      <DeliveryHighlights />
      <Adventure />
      <ClientMessages />
      <Grow />

      <TechStack />
    </>
  );
}
