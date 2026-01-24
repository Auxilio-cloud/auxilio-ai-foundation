import { Layout } from "@/components/layout/Layout";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Seo } from "@/components/Seo";
import { buildCanonicalUrl } from "@/lib/seo";

// SEO metadata for each post
const postSeo: Record<string, { title: string; description: string }> = {
  "operationalizing-llm-strategy": {
    title: "Operationalizing LLM Strategy | Enterprise Playbook",
    description:
      "A CTO playbook for governance, cost controls, and model strategy that move LLM pilots into production.",
  },
  "ai-platform-foundations": {
    title: "AI Platform Foundations | Engineering Readiness",
    description:
      "How platform teams align data, infrastructure, and reliability to deliver enterprise AI capabilities.",
  },
  "rag-observability-guide": {
    title: "RAG Observability Guide | LLM Operations",
    description:
      "Key telemetry, evals, and guardrails to keep retrieval-augmented systems trustworthy at scale.",
  },
  "security-ai-systems": {
    title: "AI Security & Compliance | CTO Checklist",
    description:
      "A checklist for SOC 2, privacy, and data residency requirements across AI systems.",
  },
  "ai-roadmap-leadership": {
    title: "Aligning AI Roadmaps with Business Impact",
    description:
      "Frameworks for prioritizing AI investments and communicating impact to executives.",
  },
};

const posts: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    content: React.ReactNode;
  }
> = {
  "operationalizing-llm-strategy": {
    title: "Operationalizing LLM Strategy for the Enterprise",
    date: "January 8, 2026",
    readTime: "7 min read",
    content: (
      <>
        <p className="lead">
          Enterprise leaders are under pressure to turn generative AI pilots into durable capabilities. The gap
          between experimentation and production usually shows up in governance, cost control, and platform
          readiness. This guide outlines how CTOs can operationalize LLM strategy across people, process, and
          infrastructure.
        </p>

        <h2>1. Align on business outcomes first</h2>
        <p>
          Start with the value streams that matter most: revenue acceleration, cost takeout, risk mitigation,
          or customer experience. Tie each LLM initiative to measurable KPIs and agree on how success is
          tracked.
        </p>

        <h2>2. Establish a governance model early</h2>
        <p>
          Governance is not a blocker—it is the structure that keeps teams shipping. Define who approves model
          usage, data access, and vendor decisions. Create clear guidelines for acceptable use and escalation.
        </p>

        <h2>3. Build a cost and performance discipline</h2>
        <p>
          Token costs, inference latency, and model drift need active management. Implement usage budgets,
          measure throughput, and use evaluation harnesses to track response quality over time.
        </p>

        <h2>4. Invest in platform foundations</h2>
        <p>
          LLM initiatives depend on reliable data pipelines, secure model hosting, and deployment workflows.
          Make sure your platform team has the tooling to observe, audit, and rollback AI services safely.
        </p>

        <h2>5. Scale with repeatable patterns</h2>
        <p>
          Create reference architectures and reusable components for orchestration, retrieval, and monitoring.
          These accelerators reduce time-to-market for every new AI initiative that follows.
        </p>

        <h2>Next steps</h2>
        <p>
          CTOs who invest in governance and platform readiness see faster, safer AI adoption. Partner with a
          team that can cover strategy, engineering, and change management to keep momentum.
        </p>
      </>
    ),
  },
  "ai-platform-foundations": {
    title: "Building AI Platform Foundations with Engineering Readiness",
    date: "January 5, 2026",
    readTime: "6 min read",
    content: (
      <>
        <p className="lead">
          AI platforms fail when data, infrastructure, and product teams move in different directions. A
          cohesive foundation aligns these groups around a common set of capabilities and shared operational
          standards.
        </p>

        <h2>Define core platform capabilities</h2>
        <p>
          Platform leaders should define the baseline services every AI product needs: data ingestion,
          feature pipelines, model hosting, evaluation tooling, and secure deployment paths.
        </p>

        <h2>Standardize interfaces for speed</h2>
        <p>
          Provide templates and APIs that make it easy for product teams to integrate models and data without
          bespoke engineering. Standardization reduces rework and keeps governance consistent.
        </p>

        <h2>Make reliability visible</h2>
        <p>
          Observability for AI goes beyond uptime. Instrument retrieval accuracy, model latency, guardrail
          violations, and feedback loops so teams can detect issues before customers do.
        </p>

        <h2>Embed security from day one</h2>
        <p>
          Incorporate threat modeling, data classification, and access controls in the platform roadmap. The
          sooner security is integrated, the faster you can scale adoption with confidence.
        </p>

        <h2>Operational readiness checklist</h2>
        <ul>
          <li>Defined SLAs for AI services and data pipelines</li>
          <li>Model registry with versioning and rollback</li>
          <li>Automated evaluation and regression testing</li>
          <li>Centralized usage and cost reporting</li>
        </ul>
      </>
    ),
  },
  "rag-observability-guide": {
    title: "RAG Observability: What Engineering Leaders Need",
    date: "January 2, 2026",
    readTime: "6 min read",
    content: (
      <>
        <p className="lead">
          Retrieval-augmented generation pipelines introduce new failure modes: stale context, missing
          citations, and unpredictable latency. Observability brings these issues into the light before they
          impact production.
        </p>

        <h2>Instrument the entire retrieval chain</h2>
        <p>
          Track document freshness, chunk coverage, and retrieval precision. Without this, teams cannot tell
          if the model failed or the context was wrong.
        </p>

        <h2>Measure output quality continuously</h2>
        <p>
          Use automated evals and human review to monitor answer accuracy, hallucination rates, and policy
          compliance. Feed results back into prompt and retrieval tuning.
        </p>

        <h2>Keep latency within guardrails</h2>
        <p>
          RAG systems often break SLAs due to slow retrieval or expensive reranking. Instrument latency per
          step and add fallbacks for high-load scenarios.
        </p>

        <h2>Build audit trails</h2>
        <p>
          Engineering leaders need traceability from output back to sources. Store source references, model
          versions, and retrieval metadata to support compliance and incident response.
        </p>

        <h2>Recommended metrics</h2>
        <ul>
          <li>Retrieval precision and recall</li>
          <li>Grounded answer rate</li>
          <li>Average latency per pipeline stage</li>
          <li>Guardrail violation count</li>
          <li>Cost per successful response</li>
        </ul>
      </>
    ),
  },
  "security-ai-systems": {
    title: "Security & Compliance for AI Systems",
    date: "December 28, 2025",
    readTime: "5 min read",
    content: (
      <>
        <p className="lead">
          AI expands your attack surface. Engineering leaders must align security, legal, and product teams to
          ensure AI systems comply with privacy, data residency, and audit requirements.
        </p>

        <h2>Start with data classification</h2>
        <p>
          Determine which datasets can be used with which models. Establish clear boundaries for regulated
          data and define approval flows for new data sources.
        </p>

        <h2>Apply vendor and model risk management</h2>
        <p>
          Evaluate vendor posture, understand model training data sources, and require contractual assurances
          on data usage and retention.
        </p>

        <h2>Harden prompt and tool usage</h2>
        <p>
          Use guardrails, input validation, and sandboxing for tool execution. Align red-teaming exercises
          with security and compliance teams.
        </p>

        <h2>Build audit-ready logging</h2>
        <p>
          Maintain logs of prompts, outputs, and human approvals. Ensure logs are searchable and exportable to
          support internal and external audits.
        </p>
      </>
    ),
  },
  "ai-roadmap-leadership": {
    title: "Leadership Brief: Aligning AI Roadmaps with Business Impact",
    date: "December 22, 2025",
    readTime: "5 min read",
    content: (
      <>
        <p className="lead">
          AI roadmaps stall when they lack executive alignment. A clear narrative—paired with measurable
          milestones—helps engineering leaders secure funding and focus teams.
        </p>

        <h2>Prioritize initiatives by impact and readiness</h2>
        <p>
          Score use cases by expected business value, data availability, and change management complexity.
          Start with initiatives that demonstrate fast wins while building platform capabilities.
        </p>

        <h2>Create a portfolio view</h2>
        <p>
          Balance near-term operational automations with longer-term product innovation. This ensures AI
          investment delivers both immediate ROI and strategic differentiation.
        </p>

        <h2>Communicate in executive language</h2>
        <p>
          Translate technical efforts into board-ready metrics such as margin improvement, cycle time
          reduction, and risk mitigation.
        </p>

        <h2>Make change management explicit</h2>
        <p>
          Define how roles, workflows, and training will evolve. Align HR, operations, and security partners so
          adoption stays high once pilots expand.
        </p>
      </>
    ),
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? posts[slug] : null;
  const seo = slug ? postSeo[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <Seo
        title={seo?.title || post.title}
        description={seo?.description || post.title}
        canonical={buildCanonicalUrl(`/blog/${slug}`)}
        ogTitle={seo?.title || post.title}
        ogDescription={seo?.description || post.title}
      />
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
            <h1 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-3xl mx-auto prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
            {post.content}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
