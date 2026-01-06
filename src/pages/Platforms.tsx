import { Layout } from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import meridianImage from "@/assets/meridian.jpg";
import synthesisImage from "@/assets/synthesis.jpg";
import atlasImage from "@/assets/atlas.jpg";

const platforms = [
  {
    name: "Synthesis",
    tagline: "Intelligence Coordination",
    description:
      "A platform for orchestrating AI capabilities across the enterprise. Synthesis connects models, data sources, and workflows into a unified intelligence layer that adapts and evolves with your organization.",
    capabilities: [
      "Multi-model orchestration",
      "Contextual intelligence routing",
      "Continuous learning pipelines",
      "Enterprise-grade governance",
    ],
    visual: (
      <img 
        src={synthesisImage} 
        alt="Synthesis - Intelligence Coordination visualization" 
        className="w-full h-full object-cover rounded-3xl"
      />
    ),
  },
  {
    name: "Meridian",
    tagline: "Operational Fabric",
    description:
      "The connective layer between systems and people. Meridian brings coherence to complex operational landscapes, enabling seamless coordination across teams, tools, and workflows.",
    capabilities: [
      "Cross-system integration",
      "Intelligent process automation",
      "Real-time operational visibility",
      "Adaptive workflow design",
    ],
    visual: (
      <img 
        src={meridianImage} 
        alt="Meridian - Operational Fabric visualization" 
        className="w-full h-full object-cover rounded-3xl"
      />
    ),
  },
  {
    name: "Atlas",
    tagline: "Knowledge Architecture",
    description:
      "Structure for the unstructured. Atlas transforms organizational knowledge into navigable, actionable intelligence—making expertise accessible and insights discoverable.",
    capabilities: [
      "Semantic knowledge graphs",
      "Intelligent content synthesis",
      "Contextual discovery",
      "Collaborative knowledge building",
    ],
    visual: (
      <img 
        src={atlasImage} 
        alt="Atlas - Knowledge Architecture visualization" 
        className="w-full h-full object-cover rounded-3xl"
      />
    ),
  },
];

const Platforms = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              Platforms
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Infrastructure for intelligence
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our platforms are designed as foundations—flexible, extensible, and built for the demands of an AI-native world.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-padding-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-2">
                    {platform.tagline}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    {platform.name}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {platform.description}
                  </p>
                  <ul className="space-y-3">
                    {platform.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-center text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div
                  className={`aspect-square rounded-3xl bg-gradient-to-br from-secondary to-muted border border-border ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {platform.visual}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Interested in our platforms?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We work with organizations ready to build on modern foundations.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Platforms;
