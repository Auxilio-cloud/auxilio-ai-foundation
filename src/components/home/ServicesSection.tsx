import { Briefcase, Network, Server } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "AI Consulting for B2B Teams",
    description:
      "Partner with architects and product leaders to define your AI roadmap, align use cases with KPIs, and design governance that satisfies security and compliance reviews.",
    highlights: ["Use-case discovery", "Operating model", "Risk + compliance"],
  },
  {
    icon: Server,
    title: "AI Infrastructure & Platform Engineering",
    description:
      "Stand up the data, model, and deployment foundations required to ship reliable AI products—from secure data pipelines to scalable model serving.",
    highlights: ["Data pipelines", "Model hosting", "Observability"],
  },
  {
    icon: Network,
    title: "LLM Orchestration & Automation",
    description:
      "Design orchestration layers that connect models, tools, and workflows so teams can automate complex processes with accuracy and auditability.",
    highlights: ["Agent workflows", "RAG pipelines", "Human-in-the-loop"],
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
            B2B Services
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Strategic AI services for modern enterprises
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Auxilio partners with CTOs and engineering leaders to turn AI initiatives
            into production-grade platforms, with clear delivery plans and measurable impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
