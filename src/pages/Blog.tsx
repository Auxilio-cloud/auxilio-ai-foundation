import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Seo } from "@/components/Seo";
import { buildCanonicalUrl, siteUrl } from "@/lib/seo";
import { baseStructuredData, buildBreadcrumbListSchema } from "@/lib/structuredData";
import { blogPosts as posts } from "@/lib/blogData";

const Blog = () => {
  return (
    <Layout>
      <Seo
        title="AI Strategy for CTOs | Auxilio Insights"
        description="Executive AI guidance for CTOs and engineering leaders. Read about AI platform strategy, governance, and infrastructure that move enterprise pilots to production."
        canonical={buildCanonicalUrl("/blog")}
        ogTitle="Auxilio Insights | AI Strategy for CTOs"
        ogDescription="Leadership insights on AI strategy, platform readiness, and governance."
        structuredData={[
          ...baseStructuredData,
          buildBreadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/blog" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Auxilio Insights",
            description: "AI strategy articles for CTOs and engineering leaders.",
            url: buildCanonicalUrl("/blog"),
            publisher: {
              "@type": "Organization",
              "@id": `${siteUrl}/#organization`,
              name: "Auxilio",
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: posts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: buildCanonicalUrl(`/blog/${post.slug}`),
                name: post.title,
              })),
            },
          },
        ]}
      />
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              Insights
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              AI Strategy for CTOs & Engineering Leaders
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Editorial guidance on AI platform strategy, architecture, and governance
              for teams responsible for production-grade outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
