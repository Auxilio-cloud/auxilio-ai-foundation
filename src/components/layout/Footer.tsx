import { Link } from "react-router-dom";
import logoImage from "@/assets/logo_dark.png";

const navigation = {
  main: [
    { name: "Platforms", href: "/platforms" },
    { name: "Portfolio", href: "/work" },
    { name: "Insights", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white relative overflow-hidden">
      <div className="container relative mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo and tagline */}
          <div>
            <Link to="/" className="inline-block">
              <img src={logoImage} alt="Auxilio" className="h-20 w-auto" />
            </Link>
            <p className="mt-2 text-sm text-neutral-600 max-w-xs">
              Building the infrastructure for the AI-native era.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-xs uppercase tracking-widest font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Gradient divider */}
        <div className="mt-12 mb-8 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

        <div className="pt-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <p className="text-sm text-neutral-600">
                <a href="mailto:info@auxilio.cloud" className="hover:text-neutral-900 transition-colors">
                  info@auxilio.cloud
                </a>
              </p>
              <p className="text-sm text-neutral-600">
                7911 Handy Court, Fort Collins, CO 80525, USA
              </p>
            </div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              © {new Date().getFullYear()} Auxilio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
