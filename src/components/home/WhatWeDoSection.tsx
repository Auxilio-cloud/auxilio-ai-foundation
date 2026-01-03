import { Layers, Workflow, Sparkles } from "lucide-react";

const capabilities = [
  {
    icon: Layers,
    title: "Platform Thinking",
    description:
      "We architect systems designed for evolution—modular foundations that scale with ambition and adapt to change.",
  },
  {
    icon: Workflow,
    title: "Intelligent Orchestration",
    description:
      "Our platforms coordinate complex workflows, connecting disparate systems into coherent, intelligent experiences.",
  },
  {
    icon: Sparkles,
    title: "AI-Native Design",
    description:
      "We build with AI at the core, not as an afterthought. Every system is designed to leverage and enhance machine intelligence.",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Capability, not complexity
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <capability.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {capability.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
