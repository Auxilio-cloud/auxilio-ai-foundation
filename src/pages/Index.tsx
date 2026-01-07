import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { VisionSection } from "@/components/home/VisionSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { WorkPreviewSection } from "@/components/home/WorkPreviewSection";
import { PlatformsPreviewSection } from "@/components/home/PlatformsPreviewSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <VisionSection />
      <WhatWeDoSection />
      <WorkPreviewSection />
      <PlatformsPreviewSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
