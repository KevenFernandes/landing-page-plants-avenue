import { BadfeInfos } from "../components/BadgeInfos";
import { BlogSection } from "../components/BlogSection";
import { HeroSection } from "../components/HeroSection";
import { MidBanner } from "../components/MidBanner";
import { ProductSection } from "../components/ProductSection";
import { PromoBanner } from "../components/PromoBanner";
import { Steps } from "../components/Steps";
import { WidgetSection } from "../components/WidgetSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden font-sans">
      <HeroSection />
      <BadfeInfos />
      <PromoBanner />
      <ProductSection />
      <MidBanner />
      <Steps />
      <BlogSection />
      <WidgetSection />
    </div>
  );
}
