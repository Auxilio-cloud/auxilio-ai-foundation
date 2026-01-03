import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const principles = [
  {
    number: "01",
    title: "First principles over best practices",
    description:
      "Best practices are solutions to yesterday's problems. We start from fundamentals—understanding what a system truly needs to accomplish before deciding how to build it.",
  },
  {
    number: "02",
    title: "Simplicity through understanding",
    description:
      "Complexity is often a sign of incomplete understanding. The more deeply we understand a problem, the simpler our solutions become.",
  },
  {
    number: "03",
    title: "Built to evolve",
    description:
      "The only certainty is change. Our systems are designed not just for today's requirements, but for tomorrow's possibilities. Flexibility is a feature, not a compromise.",
  },
  {
    number: "04",
    title: "Human-AI collaboration",
    description:
      "We don't build AI to replace human judgment—we build it to amplify human capability. The best systems make people more effective, not redundant.",
  },
];

const About = () => {
  return (
    <Layout>
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
              Auxilio is a technology company focused on building AI-native platforms that transform how organizations operate and create value.
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

      {/* Principles */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
                Philosophy
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                How we think
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {principles.map((principle) => (
                <div key={principle.number} className="relative pl-16">
                  <span className="absolute left-0 top-0 text-4xl font-light text-primary/30">
                    {principle.number}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
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
