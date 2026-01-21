import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const platforms = [
  {
    name: "AI Workflow Platform",
    tagline: "Faster delivery",
    description:
      "Aligns data, people, and AI into repeatable workflows. Launch solutions in weeks and show measurable time and cost savings from day one.",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    name: "Business Integration Platform",
    tagline: "Connect your stack",
    description:
      "Connects your systems and data without disruption. Keep current tools and add automation that scales from small teams to enterprise.",
    gradient: "from-accent/10 to-accent/5",
  },
  {
    name: "Insight & Knowledge Platform",
    tagline: "Turn info into action",
    description:
      "Organizes documents and conversations into searchable answers. Give teams instant clarity and better decisions with less manual effort.",
    gradient: "from-muted to-secondary/50",
  },
];

export function PlatformsPreviewSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
            How We Deliver
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Proven foundations, faster results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            You don't buy our platform, you benefit from it. These are internal capabilities built to speed up delivery and reduce project risk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              to="/platforms"
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${platform.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              
              <p className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-2">
                {platform.tagline}
              </p>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {platform.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {platform.description}
              </p>
              <div className="flex items-center text-primary font-medium">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Link to Individual Tools */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Looking for simple AI tools instead?{" "}
            <Link 
              to="/platforms#individuals" 
              className="text-primary font-medium hover:underline"
            >
              See our solutions for individuals & small teams
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
