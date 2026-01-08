import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background with cyan glow waves */}
      <div className="absolute inset-0">
        {/* Primary glow - large cyan wave */}
        <div 
          className="absolute top-1/3 right-0 w-[800px] h-[600px] rounded-full opacity-30 animate-pulse-glow"
          style={{
            background: "radial-gradient(ellipse at center, hsl(185 80% 55% / 0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        
        {/* Secondary glow - smaller cyan accent */}
        <div 
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full opacity-20 animate-float"
          style={{
            background: "radial-gradient(ellipse at center, hsl(185 80% 55% / 0.5) 0%, transparent 60%)",
            filter: "blur(40px)",
          }}
        />
        
        {/* Green accent glow */}
        <div 
          className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(ellipse at center, hsl(90 70% 50% / 0.4) 0%, transparent 60%)",
            filter: "blur(50px)",
          }}
        />

        {/* Particle dots overlay */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full animate-pulse-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative mx-auto px-6 lg:px-8 py-24">
        <div className="max-w-5xl">
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] uppercase animate-slide-up">
            We Build{" "}
            <span className="text-primary italic text-glow-green">AI Applications</span>{" "}
            That Work
          </h1>
          
          {/* Sub-headline */}
          <h2 className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed animate-slide-up font-normal" style={{ animationDelay: "0.1s" }}>
            Auxilio partners with organisations to design, build, and deploy custom AI solutions—from intelligent automation to decision-support systems that deliver measurable results.
          </h2>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="text-base px-8 uppercase font-semibold tracking-wide">
              <Link to="/platforms">
                Discover Our AI Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-base px-8 uppercase font-semibold tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mission paragraph */}
          <div className="mt-16 max-w-2xl animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-base text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-6">
              Auxilio is an AI development company that builds custom applications and provides hands-on consulting to help businesses put AI to work. We work across industries—healthcare, legal, finance, and beyond—designing solutions that fit how teams actually operate. Whether you need a standalone AI product or support integrating intelligence into existing systems, we handle strategy, development, and delivery from start to finish.
            </p>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-6 flex items-center gap-2 text-muted-foreground animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span className="uppercase tracking-widest text-xs">Scroll down</span>
        </div>
      </div>
    </section>
  );
}
