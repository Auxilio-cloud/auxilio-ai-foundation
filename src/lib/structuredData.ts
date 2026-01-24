import { buildCanonicalUrl, siteUrl } from "@/lib/seo";

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: "Auxilio",
  legalName: "Auxilio Technologies LLC",
  url: siteUrl,
  logo: `${siteUrl}/logo_dark.png`,
  sameAs: [siteUrl],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "info@auxilio.cloud",
      contactType: "customer support",
      availableLanguage: ["English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "7911 Handy Court",
    addressLocality: "Fort Collins",
    addressRegion: "CO",
    postalCode: "80525",
    addressCountry: "USA",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: "Auxilio",
  url: siteUrl,
  publisher: {
    "@id": organizationId,
  },
  inLanguage: "en",
};

export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Consulting",
    serviceType: "AI consulting",
    description:
      "Hands-on AI consulting to align strategy, use cases, and implementation with business goals.",
    provider: {
      "@id": organizationId,
    },
    areaServed: "United States",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom AI Solutions",
    serviceType: "Custom AI solutions",
    description:
      "Design and delivery of custom AI applications tailored to enterprise workflows and data.",
    provider: {
      "@id": organizationId,
    },
    areaServed: "United States",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Infrastructure & Integration",
    serviceType: "AI infrastructure integration",
    description:
      "Integration of AI infrastructure into existing platforms, systems, and operational workflows.",
    provider: {
      "@id": organizationId,
    },
    areaServed: "United States",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "LLM Enablement",
    serviceType: "LLM enablement",
    description:
      "Enablement of large language models with fine-tuning, retrieval augmentation, and deployment support.",
    provider: {
      "@id": organizationId,
    },
    areaServed: "United States",
  },
];

export const baseStructuredData = [...serviceSchemas];

type BreadcrumbItem = {
  name: string;
  path: string;
};

export const buildBreadcrumbListSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: buildCanonicalUrl(item.path),
  })),
});
