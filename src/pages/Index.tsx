import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { VisionSection } from "@/components/home/VisionSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { WorkPreviewSection } from "@/components/home/WorkPreviewSection";
import { PlatformsPreviewSection } from "@/components/home/PlatformsPreviewSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { Seo } from "@/components/Seo";
import { buildCanonicalUrl } from "@/lib/seo";
import { baseStructuredData, buildBreadcrumbListSchema } from "@/lib/structuredData";

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Auxilio | AI-Native Platform Infrastructure"
        description="Auxilio partners with B2B teams to design, build, and deploy custom AI applications, provide hands-on AI consulting, and integrate AI infrastructure into existing workflows."
        canonical={buildCanonicalUrl("/")}
        ogTitle="Auxilio | AI-Native Platform Infrastructure"
        ogDescription="We design and orchestrate intelligent platforms that transform how organizations think, build, and operate."
        structuredData={[
          ...baseStructuredData,
          buildBreadcrumbListSchema([{ name: "Home", path: "/" }]),
        ]}
      />
      <HeroSection />
      <VisionSection />
      <WhatWeDoSection />
      <WorkPreviewSection />
      <PlatformsPreviewSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
