import { Layout } from "@/components/layout/Layout";
import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { buildCanonicalUrl } from "@/lib/seo";
import { baseStructuredData, buildBreadcrumbListSchema } from "@/lib/structuredData";

import promptlyImg from "@/assets/portfolio/promptly.png";
import healthImg from "@/assets/portfolio/health.png";
import financeImg from "@/assets/portfolio/finance.png";
import legalImg from "@/assets/portfolio/legal.png";
import logisticsImg from "@/assets/portfolio/logistics.png";

// SoftwareApplication schema for each demo tool
const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SoftwareApplication",
      position: 1,
      name: "Auxilio Promptly",
      description: "AI-powered prompt engineering and workflow automation platform for teams and enterprises.",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Web Browser",
      author: { "@type": "Organization", name: "Auxilio" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free tier available" },
      url: "https://promptly.digital",
    },
    {
      "@type": "SoftwareApplication",
      position: 2,
      name: "Auxilio Health",
      description: "Intelligent personal healthcare management with AI-driven aids to understanding aspects of personal health.",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web Browser",
      author: { "@type": "Organization", name: "Auxilio" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free tier available" },
      url: "https://health.auxilio.cloud",
    },
    {
      "@type": "SoftwareApplication",
      position: 3,
      name: "Auxilio Finance",
      description: "Financial intelligence and management platform for tracking and analyzing personal financial positions with AI-driven advice.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      author: { "@type": "Organization", name: "Auxilio" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free tier available" },
      url: "https://finance.auxilio.cloud",
    },
    {
      "@type": "SoftwareApplication",
      position: 4,
      name: "Auxilio Legal",
      description: "Legal intelligence and workflows for simplified everyday legal tasks and workflows.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      author: { "@type": "Organization", name: "Auxilio" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free tier available" },
      url: "https://legal.auxilio.cloud",
    },
    {
      "@type": "SoftwareApplication",
      position: 5,
      name: "Auxilio Logistics",
      description: "Intelligent logistics and supply chain management with AI-powered route optimization and tracking.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      author: { "@type": "Organization", name: "Auxilio" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free tier available" },
      url: "https://logistics.auxilio.cloud",
    },
  ],
};

const enterpriseProjects = [
  {
    name: "Auxilio Logistics",
    domain: "logistics.auxilio.cloud",
    url: "/enterprise",
    industry: "Enterprise Logistics",
    image: logisticsImg,
    description: "Intelligent logistics and supply chain management with AI-powered route optimization and tracking.",
    features: ["Route Optimization", "Real-time Tracking", "Supply Chain Analytics"],
    gradient: "from-primary to-accent",
  },
];

const productProjects = [
  {
    name: "Auxilio Promptly",
    domain: "promptly.digital",
    url: "https://promptly.digital",
    industry: "AI Tools",
    image: promptlyImg,
    description: "AI-powered prompt engineering and workflow automation platform for teams and enterprises.",
    features: ["Prompt Library", "Team Collaboration", "API Integration"],
    gradient: "from-primary to-accent",
  },
  {
    name: "Auxilio Health",
    domain: "health.auxilio.cloud",
    url: "https://health.auxilio.cloud",
    industry: "Healthcare",
    image: healthImg,
    description: "Intelligent personal healthcare management, with AI-driven aids to understanding aspects of personal health.",
    features: ["Patient Analytics", "AI Diagnostics", "Care Coordination"],
    gradient: "from-accent to-primary",
  },
  {
    name: "Auxilio Finance",
    domain: "finance.auxilio.cloud",
    url: "https://finance.auxilio.cloud",
    industry: "Finance",
    image: financeImg,
    description: "Financial intelligence and management platform for tracking and analyzing personal financial positions, with enhanced AI-driven advice.",
    features: ["Financial Analytics", "Automated Reports", "Risk Assessment"],
    gradient: "from-primary via-accent to-primary",
  },
  {
    name: "Auxilio Legal",
    domain: "legal.auxilio.cloud",
    url: "https://legal.auxilio.cloud",
    industry: "Legal",
    image: legalImg,
    description: "Legal intelligence and workflows for simplified everyday legal tasks and workflows.",
    features: ["Document Analysis", "Contract Review", "Compliance Tracking"],
    gradient: "from-accent via-primary to-accent",
  },
];

const Work = () => {
  return (
    <Layout>
      <Seo
        title="Auxilio Portfolio | Deployed AI Solutions"
        description="Explore Auxilio’s deployed AI products and enterprise solutions, from intelligent logistics to productivity platforms."
        canonical={buildCanonicalUrl("/work")}
        ogTitle="Auxilio Portfolio | Deployed AI Solutions"
        ogDescription="Real-world AI solutions that enhance business and personal productivity."
        structuredData={[
          ...baseStructuredData,
          softwareApplicationSchema,
          buildBreadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/work" },
          ]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container relative z-10 px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-6 animate-fade-in">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            What We've <span className="gradient-text">Deployed</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Real-world AI solutions that enhance business and personal productivity. 
            Each deployment represents our commitment to transforming workflows through intelligent automation.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="space-y-16">
            <div>
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">
                  Enterprise
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Enterprise Offerings
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  Tailored AI platforms built for large-scale operations, compliance, and mission-critical workflows.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {enterpriseProjects.map((project, index) => (
                  <a
                    key={project.name}
                    href={project.url}
                    className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Screenshot Image */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Industry tag */}
                      <span className="inline-block text-xs uppercase tracking-widest text-accent font-semibold mb-4">
                        {project.industry}
                      </span>

                      {/* Project name and external link */}
                      <div className="flex items-start justify-between mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.name}
                        </h2>
                        <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>

                      {/* Domain */}
                      <p className="text-sm text-muted-foreground mb-4 font-mono">
                        {project.domain}
                      </p>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">
                  Product Demos
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Live Product Experiences
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  Explore our self-serve applications built for teams and individuals looking to deploy AI quickly.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {productProjects.map((project, index) => (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Screenshot Image */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Industry tag */}
                      <span className="inline-block text-xs uppercase tracking-widest text-accent font-semibold mb-4">
                        {project.industry}
                      </span>

                      {/* Project name and external link */}
                      <div className="flex items-start justify-between mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.name}
                        </h2>
                        <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>

                      {/* Domain */}
                      <p className="text-sm text-muted-foreground mb-4 font-mono">
                        {project.domain}
                      </p>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-card border-t border-border">
        <div className="container px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to build something <span className="gradient-text">extraordinary</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Let's discuss how AI can transform your business operations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Start a Conversation
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
