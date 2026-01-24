const insights = [
  {
    title: "What we do",
    summary: "AI platform infrastructure built for real work.",
    description:
      "Auxilio designs AI platform infrastructure and custom AI applications that automate workflows, surface insights, and integrate with existing systems. Our AI consulting team partners with B2B leaders to map priorities, build reliable data pipelines, and deliver production-ready AI capabilities that improve speed, accuracy, and customer experience.",
  },
  {
    title: "Who we help",
    summary: "AI consulting for B2B teams ready to scale.",
    description:
      "We help B2B companies, operations leaders, and product teams who need AI applications without hiring a large internal lab. Clients include professional services, logistics, healthcare, and SaaS organizations looking for AI consulting, automation, and AI platform infrastructure that scales across departments while respecting compliance, security, and change management.",
  },
  {
    title: "How we deliver",
    summary: "Discovery, build, and adoption in one flow.",
    description:
      "We run discovery sprints to prioritize high-impact use cases, then design data flows, models, and integrations in close partnership with your team. Our engineers build, test, and deploy AI applications with observability and governance, while our AI consulting leaders train stakeholders to adopt the new AI platform infrastructure.",
  },
  {
    title: "Typical outcomes",
    summary: "Measured impact from AI applications.",
    description:
      "Typical outcomes include faster cycle times, fewer manual handoffs, and clearer decision trails across operations. Teams report measurable ROI from AI automation, improved client responsiveness, and higher data quality. Our AI applications and AI consulting roadmap create durable AI platform infrastructure that keeps delivering value as needs evolve.",
  },
];

export function InsightsSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {insights.map((insight) => (
            <div
              key={insight.title}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                {insight.title}
              </h2>
              <h3 className="mt-3 text-lg font-medium text-primary">
                {insight.summary}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {insight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
