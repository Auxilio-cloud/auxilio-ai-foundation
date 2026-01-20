import { Layout } from "@/components/layout/Layout";
import { ArrowRight, FileText, ListChecks, StickyNote } from "lucide-react";
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
    question: "How much does it cost to get started?",
    answer: "Getting started is completely free! Each personal productivity tool in our consumer app lineup has a generous free tier so you can explore core features without paying a penny. If you love what you see, premium plans start at just a few pounds per month—but there's no pressure to upgrade.",
  },
  {
    question: "I'm not very tech-savvy. Will I be able to use these tools?",
    answer: "Absolutely—that's exactly who we built these consumer apps for! There's no coding, no complicated setup, and no confusing menus. Just sign up, follow our friendly onboarding guide, and you'll be up and running with these personal productivity tools in minutes. If you get stuck, plain-English help is always a click away.",
  },
  {
    question: "Is my data safe with Auxilio?",
    answer: "Your privacy matters to us. All your data is encrypted and stored securely in our consumer productivity apps—we never sell or share it with anyone. You're always in control: you can export or delete your data anytime. We follow industry best practices so you can focus on your personal productivity, not worry.",
  },
  {
    question: "What if I need help or have questions?",
    answer: "We've got you covered! Every plan for our personal productivity tools includes access to our help centre with step-by-step guides and video tutorials. Free users get email support, and premium users enjoy priority responses. We're real people who genuinely want to help you succeed.",
  },
  {
    question: "Can I use these tools for my freelance business or side project?",
    answer: "100%! Our consumer productivity apps are perfect for freelancers, side hustlers, and small teams. They're designed to grow with you—start simple, and add more personal productivity features as your needs evolve with straightforward pricing.",
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
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema";
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const existingFaqScript = document.getElementById("faq-schema");
      if (existingFaqScript) existingFaqScript.remove();
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
