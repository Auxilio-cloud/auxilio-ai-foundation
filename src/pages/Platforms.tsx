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
    question: "How much does it cost to get started?",
    answer: "Getting started is completely free! Each of our tools has a generous free tier that lets you explore and use core features without paying a penny. If you love what you see, premium plans start at just a few pounds per month—but there's no pressure to upgrade.",
  },
  {
    question: "I'm not very tech-savvy. Will I be able to use these tools?",
    answer: "Absolutely—that's exactly who we built these for! There's no coding, no complicated setup, and no confusing menus. Just sign up, follow our friendly onboarding guide, and you'll be up and running in minutes. If you get stuck, plain-English help is always a click away.",
  },
  {
    question: "Is my data safe with Auxilio?",
    answer: "Your privacy matters to us. All your data is encrypted and stored securely—we never sell or share it with anyone. You're always in control: you can export or delete your data anytime. We follow industry best practices so you can focus on being productive, not worried.",
  },
  {
    question: "What if I need help or have questions?",
    answer: "We've got you covered! Every plan includes access to our help centre with step-by-step guides and video tutorials. Free users get email support, and premium users enjoy priority responses. We're real people who genuinely want to help you succeed.",
  },
  {
    question: "Can I use these tools for my freelance business or side project?",
    answer: "100%! Our tools are perfect for freelancers, side hustlers, and small teams. They're designed to grow with you—start simple, and add more features as your needs evolve. No enterprise contracts or complicated pricing, just straightforward tools that work.",
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah",
    role: "Freelance Designer",
    text: "The document summariser has cut my research time in half. I can now review client briefs in minutes instead of hours.",
    rating: 5,
  },
  {
    name: "James",
    role: "Small Business Owner",
    text: "Finally, AI tools that don't require a tech degree to use. Set up took five minutes and it just works.",
    rating: 5,
  },
  {
    name: "Priya",
    role: "Graduate Student",
    text: "The note extractor transformed how I study. It pulls out exactly what I need from lecture recordings.",
    rating: 5,
  },
  {
    name: "Tom",
    role: "Marketing Consultant",
    text: "I was sceptical about AI tools, but these are genuinely helpful. Simple, fast, and actually saves me time.",
    rating: 4,
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

// Review schema for testimonials
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Auxilio AI Tools for Individuals",
  description: "Simple AI tools for personal productivity and small teams",
  brand: {
    "@type": "Organization",
    name: "Auxilio",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: testimonials.length.toString(),
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating.toString(),
      bestRating: "5",
    },
    reviewBody: t.text,
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
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema";
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // Inject Review schema
    const reviewScript = document.createElement("script");
    reviewScript.type = "application/ld+json";
    reviewScript.id = "review-schema";
    reviewScript.textContent = JSON.stringify(reviewSchema);
    document.head.appendChild(reviewScript);

    return () => {
      const existingFaqScript = document.getElementById("faq-schema");
      if (existingFaqScript) existingFaqScript.remove();
      const existingReviewScript = document.getElementById("review-schema");
      if (existingReviewScript) existingReviewScript.remove();
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
                to="/enterprise" 
                className="text-primary font-medium hover:underline"
              >
                Explore our enterprise platform solutions
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              What People Say
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Trusted by individuals & small teams
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? "text-primary" : "text-muted"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                <div className="text-sm">
                  <span className="font-semibold text-foreground">{testimonial.name}</span>
                  <span className="text-muted-foreground"> · {testimonial.role}</span>
                </div>
              </div>
            ))}
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
