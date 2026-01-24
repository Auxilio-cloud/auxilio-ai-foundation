import { Layout } from "@/components/layout/Layout";
import { ArrowRight, FileText, ListChecks, StickyNote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import meridianImage from "@/assets/meridian.jpg";
import synthesisImage from "@/assets/synthesis.jpg";
import atlasImage from "@/assets/atlas.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Seo } from "@/components/Seo";
import { buildCanonicalUrl } from "@/lib/seo";
import { baseStructuredData, buildBreadcrumbListSchema } from "@/lib/structuredData";

const faqs = [
  {
    question: "What deployment models do you support?",
    answer: "Auxilio supports cloud, hybrid, and private deployment models to meet enterprise security and data residency requirements. We align with your infrastructure standards while keeping AI systems reliable and observable.",
  },
  {
    question: "How does Auxilio handle governance and compliance?",
    answer: "Governance is built into the platform with access controls, audit trails, and observability across workflows. We help teams meet compliance expectations with policy-driven safeguards and enterprise-grade monitoring.",
  },
  {
    question: "Can you integrate with our existing data and systems?",
    answer: "Yes. We integrate with enterprise data sources, knowledge bases, and operational systems so your teams can orchestrate workflows across the tools you already rely on.",
  },
  {
    question: "What makes your AI infrastructure enterprise-ready?",
    answer: "Our platform emphasizes reliability, security, and scale with governance controls, model orchestration, and observability baked in. That foundation lets enterprise teams deploy AI safely across mission-critical operations.",
  },
  {
    question: "How do we get started with an enterprise engagement?",
    answer: "We begin with your business goals, map the workflows and integrations required, and deliver a scoped deployment plan that aligns with your security and operational standards.",
  },
];

// FAQPage schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const individualTools = [
  {
    name: "Instant Knowledge Summaries",
    description: "Get clear, actionable highlights from documents, articles, or reports—built into every Auxilio consumer experience.",
    icon: FileText,
  },
  {
    name: "Priority-Focused Planning",
    description: "Surface what matters most with smart prioritisation, suggested schedules, and gentle nudges to stay on track.",
    icon: ListChecks,
  },
  {
    name: "Auto-Captured Notes",
    description: "Turn meetings, lectures, and voice memos into structured takeaways, action items, and searchable archives.",
    icon: StickyNote,
  },
];

const enterpriseCapabilities = [
  {
    name: "Workflow Orchestration",
    tagline: "Automation & Orchestration",
    description:
      "Enterprise-grade workflow orchestration that connects AI agents, humans, and systems to automate critical operations with measurable outcomes.",
    capabilities: [
      "AI workflow orchestration",
      "Enterprise process automation",
      "Operational reliability",
      "Human-in-the-loop control",
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
    tagline: "Integration & Intelligence",
    description:
      "Secure integration of enterprise data, third-party knowledge, and human insight to unify decision context across teams.",
    capabilities: [
      "Enterprise data integration",
      "Knowledge orchestration",
      "Semantic retrieval",
      "Governed access",
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
    tagline: "AI Infrastructure",
    description:
      "AI infrastructure built for scale, reliability, and compliance-ready operations—so teams can deploy intelligent systems with confidence.",
    capabilities: [
      "Model orchestration",
      "Secure deployment models",
      "Compliance-ready foundations",
      "Observability & monitoring",
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
      <Seo
        title="Enterprise AI Platform for Infrastructure & Orchestration | Auxilio"
        description="Auxilio is an enterprise AI platform delivering secure infrastructure, workflow orchestration, and data integration with governance and observability built in."
        canonical={buildCanonicalUrl("/platforms")}
        ogTitle="Auxilio Enterprise AI Platform"
        ogDescription="AI infrastructure, integration, and orchestration for enterprise teams with governance and observability included."
        structuredData={[
          ...baseStructuredData,
          faqSchema,
          buildBreadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Platform", path: "/platforms" },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              Our Platform
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Enterprise AI platform for infrastructure, integration, and orchestration
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Auxilio delivers secure AI infrastructure that integrates data, orchestrates workflows, and governs intelligent systems across mission-critical operations.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Platform */}
      <section className="section-padding-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              Enterprise Platform
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Enterprise platform capabilities
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Build secure, scalable AI foundations that integrate enterprise data, orchestrate critical workflows, and deliver governed intelligence across teams.
            </p>
          </div>
          <div className="space-y-24 lg:space-y-32">
            {enterpriseCapabilities.map((platform, index) => (
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
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    {platform.name}
                  </h3>
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

      {/* For Individuals & Small Teams */}
      <section id="individuals" className="section-padding bg-gradient-to-b from-background to-secondary/30 scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              Tools for Individuals & Small Teams
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Simple AI tools for everyday business productivity
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Lightweight tools for individuals and small teams, powered by the same enterprise platform foundations.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              These are shared capabilities across the Auxilio consumer suite—available in every app you use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {individualTools.map((tool) => (
              <div
                key={tool.name}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <tool.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {tool.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>

          {/* Upsell to Enterprise */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Need more power for your organisation?{" "}
              <Link 
                to="/enterprise" 
                className="text-primary font-medium hover:underline"
              >
                Explore our enterprise platform solutions
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
                Enterprise FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                Answers for enterprise platform teams
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
