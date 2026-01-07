import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const featuredProjects = [
  {
    name: "Promptly",
    domain: "promptly.digital",
    url: "https://promptly.digital",
    industry: "AI Tools",
    description: "AI-powered prompt engineering and workflow automation platform.",
  },
  {
    name: "Auxilio Health",
    domain: "health.auxilio.cloud",
    url: "https://health.auxilio.cloud",
    industry: "Healthcare",
    description: "Intelligent healthcare management with AI-driven diagnostics.",
  },
  {
    name: "Auxilio Finance",
    domain: "finance.auxilio.cloud",
    url: "https://finance.auxilio.cloud",
    industry: "Finance",
    description: "Financial intelligence platform with predictive analytics.",
  },
  {
    name: "Auxilio Legal",
    domain: "legal.auxilio.cloud",
    url: "https://legal.auxilio.cloud",
    industry: "Legal",
    description: "AI-powered legal document analysis and case management.",
  },
];

export function WorkPreviewSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">
            Our Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Projects in <span className="gradient-text">Production</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real AI solutions powering real businesses.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Industry tag */}
              <span className="inline-block text-xs uppercase tracking-widest text-accent font-semibold mb-3">
                {project.industry}
              </span>

              {/* Project name */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              {/* Domain */}
              <p className="text-xs text-muted-foreground mb-3 font-mono">
                {project.domain}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </a>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
