import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            Ready to build something serious?
          </h2>
          <p className="mt-6 text-lg opacity-80 leading-relaxed">
            We partner with organizations ready to embrace the AI-native future. If you're thinking about what's next, we'd love to hear from you.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base px-8"
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
