import { Link } from "react-router-dom";

const navigation = {
  main: [
    { name: "Platforms", href: "/platforms" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo and tagline */}
          <div>
            <Link
              to="/"
              className="text-xl font-semibold tracking-tight text-foreground"
            >
              Auxilio
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
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Auxilio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
