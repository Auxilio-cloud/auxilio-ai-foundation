import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-surface">
      <div className="absolute inset-0 hero-grid opacity-60" />
      
      {/* Geometric accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-background leading-[1.1] animate-slide-up">
            Building the infrastructure for the AI-native era
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-background/80 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We design and orchestrate intelligent platforms that transform how organizations think, build, and operate.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button
              asChild
              size="lg"
              className="text-base px-8 bg-background text-foreground hover:bg-background/90"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 border-background/40 text-background hover:bg-background/10 hover:text-background"
            >
              <Link to="/platforms">Explore Platforms</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
