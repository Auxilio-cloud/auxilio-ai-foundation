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
  sameAs: [
    siteUrl,
    "https://www.linkedin.com/company/auxilio-cloud/",
    "https://x.com/auxilio_cloud",
  ],
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

const serviceArea = [
  {
    "@type": "Country",
    name: "United States",
  },
  {
    "@type": "Country",
    name: "United Kingdom",
  },
  {
    "@type": "Place",
    name: "European Union",
  },
];

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
    serviceArea,
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
    serviceArea,
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
    serviceArea,
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
    serviceArea,
  },
];

export const baseStructuredData = [organizationSchema, websiteSchema];

type BreadcrumbItem = {
  name: string;
  path: string;
};

type BlogPostingInput = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
};

export const buildBlogPostingSchema = ({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: BlogPostingInput) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  url: buildCanonicalUrl(`/blog/${slug}`),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": buildCanonicalUrl(`/blog/${slug}`),
  },
  datePublished,
  dateModified: dateModified ?? datePublished,
  author: {
    "@type": "Organization",
    "@id": organizationId,
    name: "Auxilio",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    "@id": organizationId,
    name: "Auxilio",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo_dark.png`,
    },
  },
  ...(image ? { image: { "@type": "ImageObject", url: `${siteUrl}${image}` } } : {}),
  inLanguage: "en",
});

type FAQItem = {
  question: string;
  answer: string;
};

export const buildFAQPageSchema = (faqs: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

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
