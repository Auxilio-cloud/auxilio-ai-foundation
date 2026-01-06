import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import principalImage from "@/assets/principal.jpg";

export function HowWeThinkSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <div>
              <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
                How We Think
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
                First principles, modern execution
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We approach every problem from fundamentals. What does this system truly need to accomplish? What constraints are real, and which are inherited assumptions? This clarity allows us to build solutions that are elegant, efficient, and future-proof.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center mt-8 text-primary font-medium hover:underline underline-offset-4 group"
              >
                Read our philosophy
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src={principalImage} 
                  alt="Team collaboration - First principles thinking" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
