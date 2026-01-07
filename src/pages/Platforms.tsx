import { Layout } from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import meridianImage from "@/assets/meridian.jpg";
import synthesisImage from "@/assets/synthesis.jpg";
import atlasImage from "@/assets/atlas.jpg";

const platforms = [
  {
    name: "Workflow Optimization",
    tagline: "Automation & Efficiency",
    description:
      "Platform-based automation of business and personal workflows, automating repetitive manual tasks and providing new insights for operational enhancement.",
    capabilities: [
      "Process automation",
      "Task orchestration",
      "Operational insights",
      "Efficiency analytics",
    ],
    visual: (
      <img 
        src={synthesisImage} 
        alt="Workflow Optimization visualization" 
        className="w-full h-full object-cover rounded-3xl"
      />
    ),
  },
  {
    name: "Knowledge Integration",
    tagline: "Unified Intelligence",
    description:
      "Orchestration of personal and enterprise data, third-party knowledge, and human insight to provide a unified view of gathered knowledge.",
    capabilities: [
      "Data orchestration",
      "Knowledge synthesis",
      "Insight discovery",
      "Unified access",
    ],
    visual: (
      <img 
        src={meridianImage} 
        alt="Knowledge Integration visualization" 
        className="w-full h-full object-cover rounded-3xl"
      />
    ),
  },
  {
    name: "Intelligent Architecture",
    tagline: "AI-Centered Design",
    description:
      "Combines AI-enhanced workflows and agentic consolidation of knowledge and data into an AI-centered architecture that makes long and complex tasks easier, allowing you to focus on what you do best.",
    capabilities: [
      "AI-enhanced workflows",
      "Agentic processing",
      "Complex task simplification",
      "Adaptive intelligence",
    ],
    visual: (
      <img 
        src={atlasImage} 
        alt="Intelligent Architecture visualization" 
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
              Our Platform
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Infrastructure for intelligence
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our platform is designed with security and privacy at its core—flexible, extensible, and built for the demands of an AI-native world.
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
              Interested in our platform?
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
