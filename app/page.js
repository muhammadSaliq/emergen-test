import Headers from "@/Components/Headers";
import HeroSection from "@/Components/HeroSection";
import CostSection from "@/Components/HomeSections/CostSection";
import FeaturesSection from "@/Components/HomeSections/FeaturesSection";
import FooterSection from "@/Components/HomeSections/FooterSection";
import HeaterSection from "@/Components/HomeSections/HeaterSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <CostSection/>
      <HeaterSection/>
      <FeaturesSection/>
      <FooterSection/>
    </div>
  );
}
