import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "John Smith",
    role: "Co-Founder & CEO",
    bio: "Seasoned technology executive with 20+ years building enterprise platforms. Previously led engineering teams at Fortune 500 companies.",
    image: null, // Placeholder for headshot
  },
  {
    name: "Sarah Johnson",
    role: "Co-Founder & CTO",
    bio: "AI and machine learning expert with a passion for building intelligent systems. Former research scientist with multiple patents in distributed computing.",
    image: null, // Placeholder for headshot
  },
  {
    name: "Michael Chen",
    role: "VP of Engineering",
    bio: "Full-stack architect specializing in scalable cloud infrastructure. Brings expertise from leading startups and tech giants.",
    image: null, // Placeholder for headshot
  },
  {
    name: "Emily Davis",
    role: "Head of Product",
    bio: "Product strategist focused on human-centered AI design. Previously built products used by millions across healthcare and finance.",
    image: null, // Placeholder for headshot
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
                  {/* Headshot placeholder */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
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