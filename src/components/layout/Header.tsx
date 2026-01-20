import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo_dark.png";

const navigation = [
  { name: "Platform", href: "/platforms" },
  { name: "Portfolio", href: "/work" },
  { name: "Insights", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-neutral-200 shadow-sm"
          : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity"
          >
            <img src={logoImage} alt="Auxilio" className="h-24 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-semibold uppercase tracking-widest transition-colors",
                  location.pathname === item.href
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-4 uppercase tracking-wide text-xs font-semibold border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-700 hover:border-neutral-700">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-neutral-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 right-0 bg-white border-b border-neutral-200 shadow-lg animate-fade-in">
            <div className="px-6 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block text-base font-semibold transition-colors",
                    location.pathname === item.href
                      ? "text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full mt-4 bg-neutral-900 text-white hover:bg-neutral-700">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
