import { Layout } from "@/components/layout/Layout";
import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { buildCanonicalUrl } from "@/lib/seo";
import {
  baseStructuredData,
  buildBreadcrumbListSchema,
  serviceSchemas,
} from "@/lib/structuredData";

import promptlyImg from "@/assets/portfolio/promptly.png";
import healthImg from "@/assets/portfolio/health.png";
import financeImg from "@/assets/portfolio/finance.png";
import legalImg from "@/assets/portfolio/legal.png";
import logisticsImg from "@/assets/portfolio/logistics.png";
import auxilioWebImg from "@/assets/portfolio/auxilio-web.png";
import auxilioTimeImg from "@/assets/portfolio/auxilio-time.svg";
import myyaadImg from "@/assets/portfolio/myyaad.png";

const AUXILIO_WEB_PATH = "/web-services/";
const AUXILIO_WEB_URL = buildCanonicalUrl(AUXILIO_WEB_PATH);

// SoftwareApplication schema for each demo tool
const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SoftwareApplication",
      position: 1,
      name: "Auxilio Promptly",
      description: "Cross-model AI verification tool. Compare and debate responses from OpenAI, Anthropic, Google, xAI, and more.",
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
    {
      "@type": "ProfessionalService",
      position: 6,
      name: "Auxilio Web",
      description: "Professional web design for small businesses. Fixed-price builds with ongoing care plans.",
      author: { "@type": "Organization", name: "Auxilio" },
      offers: { "@type": "Offer", price: "499", priceCurrency: "GBP", description: "Fixed-price website builds from £499" },
      url: AUXILIO_WEB_URL,
    },
    {
      "@type": "SoftwareApplication",
      position: 7,
      name: "Auxilio Time",
      description: "Time tracking and timesheet management for projects, clients, and teams.",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Web Browser",
      author: { "@type": "Organization", name: "Auxilio" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free tier available" },
      url: "https://time.auxilio.cloud",
    },
    {
      "@type": "SoftwareApplication",
      position: 8,
      name: "MyYaad",
      description: "Privacy-first AI vault that protects personal data when using ChatGPT, Claude, Gemini, and DeepSeek with realistic local shadow values.",
      applicationCategory: "SecurityApplication",
      operatingSystem: "macOS, Windows",
      author: { "@type": "Organization", name: "MyYaad" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "GBP", description: "Free forever" },
      url: "https://www.myyaad.com",
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

const enterpriseOutcomes = [
  {
    industry: "Logistics Networks",
    metric: "8-14% transportation cost reduction",
    kpi: "Cost per mile",
    description: "Lane optimization and carrier rebalancing cut spend while preserving service levels.",
  },
  {
    industry: "Supply Chain Operations",
    metric: "18-25% faster dock-to-stock",
    kpi: "Warehouse throughput",
    description: "Automated scheduling and exception workflows increase throughput at peak volume.",
  },
  {
    industry: "Carrier Management",
    metric: "5-10 pts OTIF lift",
    kpi: "On-time-in-full",
    description: "Predictive ETAs and proactive alerts keep shipments on track.",
  },
];

const productProjects = [
  {
    name: "Auxilio Promptly",
    domain: "promptly.digital",
    url: "https://promptly.digital",
    industry: "AI Tools",
    image: promptlyImg,
    description: "Compare and debate AI responses across models. See where they agree, disagree, and why it matters.",
    features: ["Cross-Model Debate", "Multi-Provider Compare", "AI Verification"],
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
  {
    name: "Auxilio Web",
    domain: "auxilio.cloud/web-services",
    url: AUXILIO_WEB_PATH,
    openInNewTab: true,
    industry: "Web Services",
    image: auxilioWebImg,
    description: "Professional web design for small businesses. Fixed-price builds with ongoing care plans — fast, modern sites that help local businesses grow online.",
    features: ["Small Business", "Fixed-Price Builds", "Monthly Care Plans"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Auxilio Time",
    domain: "time.auxilio.cloud",
    url: "https://time.auxilio.cloud",
    industry: "Productivity",
    image: auxilioTimeImg,
    description: "Time tracking and timesheet management for projects, clients, and teams with a focused, lightweight workflow.",
    features: ["Timesheets", "Project Hours", "Client Reporting"],
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    name: "MyYaad",
    domain: "myyaad.com",
    url: "https://www.myyaad.com",
    industry: "Privacy & Security",
    image: myyaadImg,
    description: "Privacy-first AI vault that protects personal data when using ChatGPT, Claude, Gemini, and DeepSeek with realistic local shadow values.",
    features: ["100% Local", "AI Privacy Firewall", "Cross-Provider Shadows"],
    gradient: "from-violet-500 to-amber-400",
  },
];

const productOutcomes = [
  {
    industry: "AI Verification",
    metric: "Cross-model blind spot detection",
    kpi: "Answer confidence",
    description: "Debate mode surfaces disagreements between AI models, helping users identify what to trust.",
  },
  {
    industry: "Healthcare Operations",
    metric: "22% reduction in care coordination time",
    kpi: "Case resolution time",
    description: "AI-guided handoffs prioritize patient outreach and follow-ups.",
  },
  {
    industry: "Finance & Planning",
    metric: "30% faster monthly close prep",
    kpi: "Close cycle time",
    description: "Automated summaries and variance insights accelerate reporting.",
  },
  {
    industry: "Legal & Compliance",
    metric: "35% fewer contract review hours",
    kpi: "Review effort",
    description: "Clause intelligence surfaces risk and standard language faster.",
  },
];

const Work = () => {
  return (
    <Layout>
      <Seo
        title="AI Case Studies & Deployed Projects | Auxilio"
        description="Explore Auxilio’s deployed AI projects — custom applications, platform integrations, and AI infrastructure built for B2B and enterprise teams."
        canonical={buildCanonicalUrl("/work")}
        ogTitle="AI Case Studies & Deployed Projects | Auxilio"
        ogDescription="Explore Auxilio's deployed AI projects — custom applications, platform integrations, and AI infrastructure built for B2B and enterprise teams."
        structuredData={[
          ...baseStructuredData,
          ...serviceSchemas,
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
              <div className="grid gap-8">
                {enterpriseProjects.map((project, index) => (
                  <a
                    key={project.name}
                    href={project.url}
                    className="group relative overflow-hidden rounded-[28px] border border-border/80 bg-card/95 transition-all duration-500 hover:border-accent/50 hover:shadow-[0_24px_80px_-32px_rgba(0,217,192,0.35)] animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
                      {/* Screenshot Image */}
                      <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
                        <img
                          src={project.image}
                          alt={`${project.name} screenshot`}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-between p-8 lg:p-10">
                        <div>
                          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                            {project.industry}
                          </span>

                          <div className="mb-4 flex items-start justify-between gap-4">
                            <h2 className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary md:text-3xl">
                              {project.name}
                            </h2>
                            <ArrowUpRight className="h-6 w-6 flex-shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                          </div>

                          <p className="mb-5 text-sm font-mono text-muted-foreground">
                            {project.domain}
                          </p>

                          <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2.5">
                          {project.features.map((feature) => (
                            <span
                              key={feature}
                              className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">
                  Outcome Snapshot
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  {enterpriseOutcomes.map((outcome) => (
                    <div
                      key={outcome.metric}
                      className="rounded-2xl border border-border bg-card p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        {outcome.industry}
                      </p>
                      <p className="text-2xl font-semibold text-foreground mb-2">
                        {outcome.metric}
                      </p>
                      <p className="text-sm text-accent font-semibold mb-3">
                        KPI: {outcome.kpi}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {outcome.description}
                      </p>
                    </div>
                  ))}
                </div>
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
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {productProjects.map((project, index) => (
                  <a
                    key={project.name}
                    href={project.url}
                    {...(project.url.startsWith("http") || project.openInNewTab
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-border/70 bg-card/95 transition-all duration-500 hover:border-accent/50 hover:shadow-[0_20px_60px_-28px_rgba(0,217,192,0.35)] animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Screenshot Image */}
                    <div className="aspect-[16/9] overflow-hidden border-b border-white/5">
                      <img
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      {/* Industry tag */}
                      <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                        {project.industry}
                      </span>

                      {/* Project name and external link */}
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <h2 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary md:text-2xl">
                          {project.name}
                        </h2>
                        <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </div>

                      {/* Domain */}
                      <p className="mb-3 text-xs font-mono text-muted-foreground">
                        {project.domain}
                      </p>

                      {/* Description */}
                      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-secondary-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">
                  Results Highlights
                </p>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {productOutcomes.map((outcome) => (
                    <div
                      key={outcome.metric}
                      className="rounded-2xl border border-border bg-card p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        {outcome.industry}
                      </p>
                      <p className="text-2xl font-semibold text-foreground mb-2">
                        {outcome.metric}
                      </p>
                      <p className="text-sm text-accent font-semibold mb-3">
                        KPI: {outcome.kpi}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {outcome.description}
                      </p>
                    </div>
                  ))}
                </div>
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
