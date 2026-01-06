import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding bg-neutral-900 text-white relative overflow-hidden">
      {/* Subtle glow accent */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, hsl(78 75% 55% / 0.6) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      
      <div className="container relative mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            Ready to build something <span className="text-primary">serious</span>?
          </h2>
          <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
            We partner with organizations ready to embrace the AI-native future. If you're thinking about what's next, we'd love to hear from you.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="text-base px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold uppercase tracking-wide"
            >
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
