import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { buildCanonicalUrl } from "@/lib/seo";
import { baseStructuredData, buildBreadcrumbListSchema } from "@/lib/structuredData";

const team = [
  {
    name: "John Brinegar",
    role: "Co-Founder & CEO",
    bio: "John is a software and solutions leader with 30+ years of experience spanning AI, IoT, analytics, and enterprise systems. He co-founded GPTWorks and led generative AI services focused on fine-tuning and retrieval-augmented solutions with open-source LLMs. At Hitachi Vantara, he led IoT solution architecture for the industrial sector, delivering large-scale analytics and IIoT platforms. John has architected and launched production platforms across manufacturing, telecommunications, healthcare, and industrial operations, leading global teams through design, delivery, and scale. His domain expertise includes industrial analytics, network and systems management, cloud and hybrid architectures, and secure enterprise applications.",
    image: "/team/john-brinegar.jpg",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/john-brinegar/",
      },
    ],
  },
  {
    name: "Naveed Gilani",
    role: "Co-Founder & CTO",
    bio: "Naveed is a strategic technology leader with 25+ years of experience building and scaling complex platforms across enterprise and startup environments. His work sits at the intersection of AI, product strategy, and execution—turning ambitious ideas into secure, market-ready systems. He has led global product and engineering teams, launched cloud and AI-driven platforms, and delivered large-scale digital transformation. He founded Promptly, an AI platform enabling multi-model interaction and real-time collaboration at scale. His current focus is applied AI, including generative AI and retrieval-augmented systems that solve operational problems with measurable outcomes.",
    image: "/team/naveed-gilani.jpg",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/naveedgilani",
      },
    ],
  },
];

const About = () => {
  return (
    <Layout breadcrumbs={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]}>
      <Seo
        title="About Auxilio | AI-Native Platform Builders"
        description="Meet the team building AI-native platforms that orchestrate intelligence for modern organizations."
        canonical={buildCanonicalUrl("/about")}
        ogTitle="About Auxilio"
        ogDescription="Learn about the Auxilio team and our mission to build AI-native platforms."
        structuredData={[
          ...baseStructuredData,
          buildBreadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              We build technology that matters
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Auxilio is a technology company focused on building AI-native platforms that transform how people and organizations operate to create value and optimize their life and work.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Auxilio was founded on a simple observation: the next generation of transformative technology won't come from point solutions or incremental improvements. It will come from platforms that fundamentally reimagine how intelligence flows through organizations.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We're a team of engineers, designers, and strategists who have spent careers building technology at scale. We've seen what works, what doesn't, and what's possible when you combine deep technical expertise with clear thinking about human needs.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're building the infrastructure for the AI-native era—platforms that don't just use AI, but are designed from the ground up to orchestrate intelligence in service of human goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
                Our Team
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                The people behind Auxilio
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {team.map((member) => (
                <div key={member.name} className="flex gap-6 p-6 bg-card rounded-2xl border border-border">
                  <div className="flex-shrink-0">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`${member.name} headshot`}
                        className="w-24 h-24 rounded-xl object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Bio */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                    {member.links?.length ? (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {member.links.map((link) => (
                          <a
                            key={`${member.name}-${link.label}`}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Let's build something together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're always interested in conversations with people who think seriously about technology.
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

export default About;
