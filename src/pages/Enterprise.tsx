import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  LineChart,
  MapPinned,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { buildCanonicalUrl } from "@/lib/seo";
import { baseStructuredData, buildBreadcrumbListSchema } from "@/lib/structuredData";

const capabilities = [
  {
    title: "Predictive planning",
    description:
      "Forecast demand, balance carrier capacity, and plan inventory positioning with AI-informed recommendations.",
    icon: LineChart,
  },
  {
    title: "Real-time visibility",
    description:
      "Track shipments, exceptions, and dwell time across every node with unified, live dashboards.",
    icon: MapPinned,
  },
  {
    title: "Route optimization",
    description:
      "Reduce miles, emissions, and delivery windows with intelligent routing and automated dispatch.",
    icon: Truck,
  },
  {
    title: "Enterprise-grade governance",
    description:
      "Secure workflows, audit trails, and compliance tooling built for regulated logistics environments.",
    icon: ShieldCheck,
  },
];

const outcomes = [
  {
    industry: "Multi-modal logistics",
    metric: "8-14% reduction in transportation cost",
    kpi: "Cost per shipment",
    description: "AI lane optimization and carrier scorecards rebalance spend across the network.",
  },
  {
    industry: "Fulfillment operations",
    metric: "18-25% faster dock-to-stock",
    kpi: "Throughput per hour",
    description: "Automated appointment windows keep cross-docks flowing during peaks.",
  },
  {
    industry: "Customer service",
    metric: "5-10 pts OTIF improvement",
    kpi: "On-time-in-full",
    description: "Predictive ETAs and exception workflows keep delivery promises intact.",
  },
  {
    industry: "Planning teams",
    metric: "35% fewer manual exceptions",
    kpi: "Planner time saved",
    description: "AI alerts and guided playbooks reduce reactive firefighting.",
  },
];

const screenshots = [
  {
    src: "scr1.jpeg",
    alt: "Auxilio logistics platform overview",
  },
  {
    src: "scr2.jpeg",
    alt: "Auxilio logistics analytics dashboards",
  },
  {
    src: "scr3.jpeg",
    alt: "Auxilio logistics workflow automation",
  },
];

const Enterprise = () => {
  return (
    <Layout>
      <Seo
        title="Auxilio Logistics | Enterprise AI for Supply Chains"
        description="Auxilio Logistics delivers enterprise AI for routing, visibility, and supply chain orchestration. Optimize networks, reduce costs, and boost service levels."
        canonical={buildCanonicalUrl("/enterprise")}
        ogTitle="Auxilio Logistics | Enterprise AI for Supply Chains"
        ogDescription="Enterprise AI for routing, visibility, and supply chain orchestration."
        structuredData={[
          ...baseStructuredData,
          buildBreadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Enterprise", path: "/enterprise" },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/40 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              Enterprise Solution
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Auxilio Logistics
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Auxilio Logistics is our first enterprise platform, purpose-built for
              modern supply chains. Orchestrate routing, carrier performance, and
              warehouse operations in one intelligent command center.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/contact">
                  Talk to our logistics team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8">
                <a
                  href="/Flyer%20-%20Optimize%20Your%20Logistics%20Today.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download datasheet
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {screenshots.map((screenshot) => (
                <div
                  key={screenshot.src}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${screenshot.src}`}
                    alt={screenshot.alt}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                A unified logistics intelligence layer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Auxilio Logistics connects inventory, transportation, and carrier data into a
                single decision layer. Automate exception management, surface cost-to-serve
                insights, and orchestrate every mile with AI-powered recommendations.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                Ideal for
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>National and global logistics operators</li>
                <li>Retail and manufacturing supply chains</li>
                <li>3PLs and fleet managers</li>
                <li>Enterprise procurement and operations teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              Platform Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Intelligence for every leg of the journey
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="rounded-2xl bg-card border border-border p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div className="rounded-3xl border border-border bg-gradient-to-br from-secondary/60 to-background p-8">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Outcomes
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
                Quantifiable impact for modern supply chains
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Benchmarked KPIs for enterprise logistics teams, from transportation finance
                to fulfillment performance, with results tracked against live network data.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((outcome) => (
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
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Ready to modernize your logistics network?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Schedule a tailored walkthrough or download the Auxilio Logistics datasheet for
              a detailed capabilities breakdown.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/contact">
                  Contact enterprise sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8">
                <a
                  href="/Flyer%20-%20Optimize%20Your%20Logistics%20Today.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download datasheet
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Enterprise;
