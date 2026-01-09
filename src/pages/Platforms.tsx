import { Layout } from "@/components/layout/Layout";
import { ArrowRight, FileText, ListChecks, StickyNote, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import meridianImage from "@/assets/meridian.jpg";
import synthesisImage from "@/assets/synthesis.jpg";
import atlasImage from "@/assets/atlas.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data for consumer tools
const faqs = [
  {
    question: "Is the demo tool free?",
    answer: "Yes! All our demo tools offer a free tier so you can explore their features before committing. You can use core functionality at no cost, with optional premium features available for power users.",
  },
  {
    question: "Do I need technical skills to use these AI tools?",
    answer: "Not at all. Our tools are designed for everyday users—no coding, no complex setup. Simply sign up, follow the guided onboarding, and start using AI to boost your productivity within minutes.",
  },
  {
    question: "Can these tools integrate with my existing apps?",
    answer: "Yes. Our tools are built to work alongside the software you already use. We offer integrations with popular platforms like Google Workspace, Microsoft 365, Slack, and more. API access is also available for custom workflows.",
  },
  {
    question: "How secure is my data?",
    answer: "Security is our priority. All data is encrypted in transit and at rest. We follow industry best practices and never share your data with third parties. You remain in full control of your information.",
  },
  {
    question: "Can I use these tools for my small business?",
    answer: "Absolutely. Our individual and small team tools are perfect for freelancers, solopreneurs, and small businesses. They scale with your needs and help you work more efficiently without enterprise complexity.",
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
    name: "AI Document Summariser",
    description: "Instantly condense lengthy documents, articles, or reports into clear, actionable summaries—saving you hours of reading time.",
    icon: FileText,
  },
  {
    name: "Personal Task Organiser",
    description: "An intelligent assistant that helps prioritise your to-do list, suggest optimal scheduling, and keep you focused on what matters most.",
    icon: ListChecks,
  },
  {
    name: "Automated Note Extractor",
    description: "Transform meetings, lectures, and voice memos into structured notes with key takeaways, action items, and searchable archives.",
    icon: StickyNote,
  },
];

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
  useEffect(() => {
    document.title = "AI Tools for Individuals & Teams | Auxilio Platform";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "AI document summariser, task organiser & note extractor for personal productivity. Simple AI tools for individuals and small teams—no setup required.");
    }

    // Inject FAQPage schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("faq-schema");
      if (existingScript) existingScript.remove();
    };
  }, []);

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

      {/* For Individuals & Small Teams */}
      <section id="individuals" className="section-padding bg-gradient-to-b from-background to-secondary/30 scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              For Individuals & Small Teams
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Simple AI tools for everyday productivity
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Not every challenge requires enterprise infrastructure. Auxilio offers lightweight, powerful AI tools designed for personal productivity and small businesses—no complex setup, just immediate value.
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
                to="/contact" 
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
                Common Questions
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                Frequently Asked Questions
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
