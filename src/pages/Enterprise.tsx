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
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logisticsFlyerPdf from "@/assets/Flyer - Optimize Your Logistics Today.pdf";

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
  "Improve on-time-in-full performance with predictive ETAs.",
  "Reduce transportation costs through automated lane optimization.",
  "Increase warehouse throughput with coordinated dock scheduling.",
  "Surface risk signals earlier across suppliers and carriers.",
];

const Enterprise = () => {
  useEffect(() => {
    document.title = "Auxilio Logistics | Enterprise AI for Supply Chains";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Auxilio Logistics delivers enterprise AI for routing, visibility, and supply chain orchestration. Optimize networks, reduce costs, and boost service levels.",
      );
    }
  }, []);

  return (
    <Layout>
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
                <a href={logisticsFlyerPdf} target="_blank" rel="noreferrer">
                  Download sheet
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
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
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div className="rounded-3xl border border-border bg-gradient-to-br from-secondary/60 to-background p-8">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Outcomes
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
                Quantifiable impact, quarter after quarter
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From the control tower to the final mile, Auxilio Logistics helps teams ship
                with confidence while driving cost discipline across the network.
              </p>
            </div>
            <ul className="space-y-4 text-lg text-muted-foreground">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
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
                <a href={logisticsFlyerPdf} target="_blank" rel="noreferrer">
                  Download sheet
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
