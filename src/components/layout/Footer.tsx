import { Link } from "react-router-dom";
import logoImage from "@/assets/logo_dark.png";

const navigation = {
  main: [
    { name: "Platforms", href: "/platforms" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      {/* Subtle glow effect */}
      <div 
        className="absolute bottom-0 right-0 w-[400px] h-[300px] opacity-10"
        style={{
          background: "radial-gradient(ellipse at center, hsl(185 80% 55% / 0.5) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      
      <div className="container relative mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo and tagline */}
          <div>
            <Link to="/" className="inline-block">
              <img src={logoImage} alt="Auxilio" className="h-20 w-auto" />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Building the infrastructure for the AI-native era.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Auxilio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
