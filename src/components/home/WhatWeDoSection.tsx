import { Zap, Brain, Wrench } from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Automate Repetitive Work",
    description:
      "We build AI applications that handle time-consuming tasks—data entry, document processing, routine decisions—so your team can focus on work that actually requires human judgement.",
  },
  {
    icon: Brain,
    title: "Make Better Decisions, Faster",
    description:
      "Our solutions surface the right information at the right time. Whether it's flagging risks, summarising complex data, or recommending next steps, we help teams act with confidence.",
  },
  {
    icon: Wrench,
    title: "Fit Into How You Already Work",
    description:
      "We don't ask you to change everything. Our AI applications integrate with your existing tools and processes, adding intelligence where it matters most without disrupting what's working.",
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
            AI that solves real problems
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
