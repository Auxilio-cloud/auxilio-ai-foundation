import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import promptlyImg from "@/assets/portfolio/promptly.png";
import healthImg from "@/assets/portfolio/health.png";
import financeImg from "@/assets/portfolio/finance.png";
import legalImg from "@/assets/portfolio/legal.png";
import logisticsImg from "@/assets/portfolio/logistics.png";
const featuredProjects = [
  {
    name: "Auxilio Promptly",
    domain: "promptly.digital",
    url: "https://promptly.digital",
    industry: "AI Tools",
    image: promptlyImg,
    description: "AI-powered prompt engineering and workflow automation platform.",
  },
  {
    name: "Auxilio Health",
    domain: "health.auxilio.cloud",
    url: "https://health.auxilio.cloud",
    industry: "Healthcare",
    image: healthImg,
    description: "Intelligent personal healthcare management, with AI-driven aids to understanding aspects of personal health.",
  },
  {
    name: "Auxilio Finance",
    domain: "finance.auxilio.cloud",
    url: "https://finance.auxilio.cloud",
    industry: "Finance",
    image: financeImg,
    description: "Financial intelligence and management platform for tracking and analyzing personal financial positions, with enhanced AI-driven advice.",
  },
  {
    name: "Auxilio Legal",
    domain: "legal.auxilio.cloud",
    url: "https://legal.auxilio.cloud",
    industry: "Legal",
    image: legalImg,
    description: "Legal intelligence and workflows for simplified everyday legal tasks and workflows.",
  },
  {
    name: "Auxilio Logistics",
    domain: "logistics.auxilio.cloud",
    url: "https://logistics.auxilio.cloud",
    industry: "Logistics",
    image: logisticsImg,
    description: "Intelligent logistics and supply chain management with AI-powered route optimization and tracking.",
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
            Examples of <span className="gradient-text">What We Build</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            These projects showcase patterns and capabilities we've developed across healthcare, finance, legal, and productivity domains.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Every business has unique challenges—we apply the same thoughtful, outcome-focused approach to new problem spaces.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Screenshot Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Industry tag */}
                <span className="inline-block text-xs uppercase tracking-widest text-accent font-semibold mb-2">
                  {project.industry}
                </span>

                {/* Project name */}
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                </div>

                {/* Domain */}
                <p className="text-xs text-muted-foreground mb-2 font-mono">
                  {project.domain}
                </p>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
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
