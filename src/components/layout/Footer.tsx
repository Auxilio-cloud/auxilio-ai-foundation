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

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            © {new Date().getFullYear()} Auxilio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
