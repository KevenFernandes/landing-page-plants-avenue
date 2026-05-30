import { BadfeInfos } from "../components/BadgeInfos";
import { HeroSection } from "../components/HeroSection";
import { MidBanner } from "../components/MidBanner";
import { ProductSection } from "../components/ProductSection";
import { PromoBanner } from "../components/PromoBanner";

export default function Home() {
  return (
    <div className="overflow-x-hidden font-sans">
      <HeroSection />
      <BadfeInfos />
      <PromoBanner />
      <ProductSection />
      <MidBanner />
    </div>
  );
}
