import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Seo } from "@/components/Seo";
import { buildCanonicalUrl } from "@/lib/seo";


const posts = [
  {
    slug: "summarise-research-papers-faster",
    title: "How AI Can Help You Summarise Research Papers Faster",
    excerpt: "Discover practical ways to use AI tools to quickly extract key findings from academic papers and reports—no technical expertise required.",
    category: "AI for Everyday Use",
    date: "January 8, 2026",
    readTime: "5 min read",
  },
  {
    slug: "automate-personal-todo-list",
    title: "Automate Your Personal To-Do List with AI",
    excerpt: "Learn how AI assistants can help you prioritise tasks, set smart reminders, and actually get things done without feeling overwhelmed.",
    category: "AI for Everyday Use",
    date: "January 5, 2026",
    readTime: "4 min read",
  },
  {
    slug: "ai-for-freelancers",
    title: "AI for Freelancers: Organising Documents and Emails",
    excerpt: "A practical guide to using AI tools for managing client documents, sorting emails, and keeping your freelance business running smoothly.",
    category: "AI for Everyday Use",
    date: "January 2, 2026",
    readTime: "6 min read",
  },
  {
    slug: "ai-meeting-notes",
    title: "Never Miss Action Items: AI-Powered Meeting Notes",
    excerpt: "How to use AI to automatically capture meeting highlights, extract action items, and keep everyone on the same page.",
    category: "AI for Everyday Use",
    date: "December 28, 2025",
    readTime: "4 min read",
  },
  {
    slug: "simplify-email-inbox",
    title: "Simplify Your Email Inbox with Smart AI Filters",
    excerpt: "Tired of email overload? Learn how AI can help you categorise, prioritise, and respond to emails more efficiently.",
    category: "AI for Everyday Use",
    date: "December 22, 2025",
    readTime: "5 min read",
  },
];

const Blog = () => {
  return (
    <Layout>
      <Seo
        title="AI for Personal Productivity | Auxilio Insights"
        description="Practical AI guides for everyday productivity. Learn how to use AI tools for note-taking, task management, and document organisation—no tech skills required."
        canonical={buildCanonicalUrl("/blog")}
        ogTitle="Auxilio Insights | AI for Everyday Productivity"
        ogDescription="Practical guides on using AI to boost personal productivity."
      />
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              Insights
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              AI for Everyday Use
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Practical guides and insights on using AI to boost your personal productivity—written for real people, not tech experts.
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
