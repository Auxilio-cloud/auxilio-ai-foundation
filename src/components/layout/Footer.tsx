import { Link } from "react-router-dom";
import logoImage from "@/assets/logo_dark.png";

const navigation = {
  main: [
    { name: "Platform", href: "/platforms" },
    { name: "Portfolio", href: "/work" },
    { name: "Insights", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};
const visibleNavigation = navigation.main.filter((item) => item.href !== "/enterprise");
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/auxilio-cloud/?viewAsMember=true",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M19 3A2 2 0 0 1 21 5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-.5 15.5V13a3 3 0 0 0-3-3c-.97 0-1.71.41-2.12.88V10h-2v8h2v-4.5a1.5 1.5 0 0 1 3 0V18h2ZM8.5 9A1.5 1.5 0 1 0 7 7.5 1.5 1.5 0 0 0 8.5 9ZM9.5 18V10h-2v8h2Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white relative overflow-hidden">
      <div className="container relative mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo and tagline */}
          <div>
            <Link to="/" className="inline-block">
              <img src={logoImage} alt="Auxilio" className="h-14 w-auto sm:h-20" />
            </Link>
            <p className="mt-2 text-sm text-neutral-600 max-w-xs">
              Building the infrastructure for the AI-native era.
            </p>
            <div className="mt-4 flex items-center gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8 gap-y-3">
            {visibleNavigation.map((item) => (
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
            <div className="space-y-2" itemScope itemType="https://schema.org/Organization">
              <p className="text-sm text-neutral-600">
                <a
                  href="mailto:info@auxilio.cloud"
                  className="hover:text-neutral-900 transition-colors"
                  itemProp="email"
                >
                  info@auxilio.cloud
                </a>
              </p>
              <p
                className="text-sm text-neutral-600"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">7911 Handy Court</span>,{" "}
                <span itemProp="addressLocality">Fort Collins</span>,{" "}
                <span itemProp="addressRegion">CO</span>{" "}
                <span itemProp="postalCode">80525</span>,{" "}
                <span itemProp="addressCountry">USA</span>
              </p>
            </div>
            <p className="text-xs uppercase tracking-widest text-neutral-500 text-center md:text-right leading-relaxed">
              © {new Date().getFullYear()} AUXILIO TECHNOLOGIES LLC, ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
