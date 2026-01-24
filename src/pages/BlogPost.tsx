import { Layout } from "@/components/layout/Layout";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Seo } from "@/components/Seo";
import { buildCanonicalUrl } from "@/lib/seo";

// SEO metadata for each post
const postSeo: Record<string, { title: string; description: string }> = {
  "ai-strategy-roi-blueprint": {
    title: "AI Strategy & ROI Blueprint | Executive Roadmap",
    description:
      "A structured roadmap that connects AI strategy to value pools, KPIs, and funding gates.",
  },
  "ai-infrastructure-readiness": {
    title: "AI Infrastructure Readiness | Platform & Ops",
    description:
      "Reference architecture and operational requirements for dependable enterprise AI platforms.",
  },
  "data-readiness-scorecard": {
    title: "Data Readiness Scorecard | Enterprise AI",
    description:
      "How to assess data quality, governance, and access readiness before scaling AI programs.",
  },
  "rag-production-playbook": {
    title: "RAG Production Playbook | Retrieval & Trust",
    description:
      "Structured answers on architecture, evaluation, and observability for production RAG systems.",
  },
  "ai-governance-operating-model": {
    title: "AI Governance Operating Model | Decision Rights",
    description:
      "A governance model covering approvals, controls, and compliance workflows for AI programs.",
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
  "ai-strategy-roi-blueprint": {
    title: "AI Strategy & ROI Blueprint for Executive Teams",
    date: "January 8, 2026",
    readTime: "8 min read",
    content: (
      <>
        <p className="lead">
          AI strategy fails when the value narrative is vague. This blueprint uses a Q&A-driven format to align
          executive stakeholders on the outcomes, KPIs, and funding milestones needed to turn AI ambitions into
          measurable ROI.
        </p>

        <h2>Roadmap focus: value pools and sequencing</h2>
        <p>
          Anchor the roadmap in three value pools: revenue growth, operational efficiency, and risk reduction.
          Sequence initiatives by readiness, starting with use cases that deliver benefits in 90-120 days.
        </p>

        <h2>Executive Q&A template</h2>
        <dl>
          <dt>Q: What business outcome are we prioritizing?</dt>
          <dd>Define the value pool, baseline metric, and target uplift with a 6-12 month horizon.</dd>
          <dt>Q: How will we prove ROI?</dt>
          <dd>Set leading indicators (adoption, cycle time) and lagging indicators (margin, retention).</dd>
          <dt>Q: What is the funding gate?</dt>
          <dd>Release budget in phases tied to pilot success, scale readiness, and operational KPIs.</dd>
          <dt>Q: Who is accountable?</dt>
          <dd>Assign a single executive owner with decision rights over scope, budget, and risk.</dd>
        </dl>

        <h2>Structured answer: ROI checklist</h2>
        <p>
          Use this checklist to confirm that each initiative earns its place on the roadmap.
        </p>
        <ul>
          <li>Baseline cost of the current workflow and the targeted savings.</li>
          <li>Expected revenue impact and the sales/product levers it affects.</li>
          <li>Change management needs (training, process redesign, comms).</li>
          <li>Risk and compliance implications with mitigation steps.</li>
          <li>Operational KPIs for scaling (latency, accuracy, adoption).</li>
        </ul>

        <h2>Decision-ready outputs</h2>
        <p>
          The deliverable from this exercise is a one-page ROI brief, a funding roadmap with milestones, and a
          measurable KPI scorecard shared with finance, product, and operations.
        </p>
      </>
    ),
  },
  "ai-infrastructure-readiness": {
    title: "AI Infrastructure Readiness: Platform & Ops Roadmap",
    date: "January 6, 2026",
    readTime: "7 min read",
    content: (
      <>
        <p className="lead">
          Infrastructure is the constraint that determines whether AI programs scale. This roadmap provides
          platform leaders with structured answers for capacity, reliability, and deployment readiness.
        </p>

        <h2>Q&A template for infrastructure planning</h2>
        <dl>
          <dt>Q: What workloads must the platform support?</dt>
          <dd>Document training, fine-tuning, batch inference, and real-time inference requirements.</dd>
          <dt>Q: What are the reliability targets?</dt>
          <dd>Define uptime SLAs, latency SLOs, and data freshness expectations.</dd>
          <dt>Q: Where are the integration points?</dt>
          <dd>Map identity, observability, data catalog, and deployment pipelines.</dd>
          <dt>Q: How will we manage cost?</dt>
          <dd>Set budget alerts, capacity reservations, and usage-based chargebacks.</dd>
        </dl>

        <h2>Structured answer: platform foundation checklist</h2>
        <p>
          Use this checklist to validate that infrastructure will not slow down product delivery.
        </p>
        <ul>
          <li>Unified model registry with version control and approval workflows.</li>
          <li>Secure model serving with autoscaling and multi-tenant isolation.</li>
          <li>Shared feature store and vector database strategy.</li>
          <li>Observability stack for latency, cost, and quality.</li>
          <li>CI/CD pipeline for prompts, policies, and model updates.</li>
        </ul>

        <h2>Outcome</h2>
        <p>
          The infrastructure roadmap should conclude with a reference architecture diagram, a phased capacity
          plan, and a shared reliability scorecard.
        </p>
      </>
    ),
  },
  "data-readiness-scorecard": {
    title: "Data Readiness Scorecard for Enterprise AI",
    date: "January 4, 2026",
    readTime: "6 min read",
    content: (
      <>
        <p className="lead">
          AI outcomes are only as strong as the data behind them. This scorecard highlights the data readiness
          requirements needed before scaling AI use cases across the enterprise.
        </p>

        <h2>Q&A template for data readiness</h2>
        <dl>
          <dt>Q: Do we have the right data coverage?</dt>
          <dd>Validate completeness across products, customers, and time horizons.</dd>
          <dt>Q: Is the data trusted?</dt>
          <dd>Define quality thresholds, lineage requirements, and stewardship ownership.</dd>
          <dt>Q: Can teams access the data safely?</dt>
          <dd>Implement role-based access, audit trails, and data classification.</dd>
          <dt>Q: How will we keep data fresh?</dt>
          <dd>Set refresh SLAs and monitoring for pipeline delays.</dd>
        </dl>

        <h2>Structured answer: readiness scorecard</h2>
        <p>
          Score each dimension on a 1-5 scale and require a minimum threshold before production.
        </p>
        <ul>
          <li>Coverage: data spans the decisions the AI system must support.</li>
          <li>Quality: accuracy, consistency, and completeness meet defined standards.</li>
          <li>Governance: ownership, lineage, and approval workflows exist.</li>
          <li>Access: secure sharing policies and audit logs are implemented.</li>
          <li>Freshness: update SLAs and monitoring are operational.</li>
        </ul>

        <h2>Outcome</h2>
        <p>
          Deliver a data readiness report with red/yellow/green status and a remediation roadmap tied to
          platform investments.
        </p>
      </>
    ),
  },
  "rag-production-playbook": {
    title: "RAG Production Playbook: Retrieval, Grounding, Trust",
    date: "January 2, 2026",
    readTime: "7 min read",
    content: (
      <>
        <p className="lead">
          RAG systems need disciplined engineering to stay accurate and trusted. This playbook provides
          structured answers for retrieval design, evaluation, and observability in production.
        </p>

        <h2>Q&A template for RAG architecture</h2>
        <dl>
          <dt>Q: What knowledge sources are authoritative?</dt>
          <dd>Define systems of record, owners, and update cadences.</dd>
          <dt>Q: How will retrieval be tuned?</dt>
          <dd>Choose chunking strategy, embeddings, and reranking approaches.</dd>
          <dt>Q: What trust signals are required?</dt>
          <dd>Include citations, confidence scores, and fallback behaviors.</dd>
          <dt>Q: How will we monitor drift?</dt>
          <dd>Track coverage, freshness, and hallucination rates.</dd>
        </dl>

        <h2>Structured answer: production checklist</h2>
        <p>
          Use this checklist to validate a RAG system before scaling.
        </p>
        <ul>
          <li>Retrieval evaluation harness with precision/recall thresholds.</li>
          <li>Grounding checks and citation coverage in outputs.</li>
          <li>Latency budget per stage (retrieve, rerank, generate).</li>
          <li>Guardrails for unsafe or policy-breaking responses.</li>
          <li>Incident playbook for corrupted sources or drift.</li>
        </ul>

        <h2>Outcome</h2>
        <p>
          The final deliverable is a RAG operations runbook with SLOs, quality metrics, and escalation paths.
        </p>
      </>
    ),
  },
  "ai-governance-operating-model": {
    title: "AI Governance Operating Model for Regulated Teams",
    date: "December 28, 2025",
    readTime: "6 min read",
    content: (
      <>
        <p className="lead">
          Governance clarifies decision rights and risk controls so AI teams can ship with confidence. This
          operating model uses structured Q&A to define approvals, oversight, and audit readiness.
        </p>

        <h2>Q&A template for governance design</h2>
        <dl>
          <dt>Q: Who owns AI policy?</dt>
          <dd>Define executive sponsorship and a cross-functional AI council.</dd>
          <dt>Q: What decisions require approval?</dt>
          <dd>List model choices, data usage, vendor selection, and risk thresholds.</dd>
          <dt>Q: How will we enforce controls?</dt>
          <dd>Implement policy-as-code, automated checks, and audit logging.</dd>
          <dt>Q: How do we handle incidents?</dt>
          <dd>Set escalation paths, rollback processes, and communications protocols.</dd>
        </dl>

        <h2>Structured answer: governance artifacts</h2>
        <p>
          Maintain these artifacts to keep governance consistent and actionable.
        </p>
        <ul>
          <li>Decision rights matrix for AI initiatives.</li>
          <li>Risk taxonomy covering data, model, and operational threats.</li>
          <li>Approval workflow and audit log requirements.</li>
          <li>Compliance mapping to SOC 2, GDPR, and internal policies.</li>
          <li>Periodic review cadence with KPIs and remediation actions.</li>
        </ul>

        <h2>Outcome</h2>
        <p>
          The governance roadmap should end with a published policy pack, an audit schedule, and a clear
          compliance narrative for regulators and customers.
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
