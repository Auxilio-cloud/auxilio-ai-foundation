import { Helmet } from "react-helmet-async";
import { defaultOgImage } from "@/lib/seo";

const defaultTwitterCard = "summary_large_image";

type StructuredData = Record<string, unknown> | Array<Record<string, unknown>>;

type SeoProps = {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: StructuredData;
  noIndex?: boolean;
};

export const Seo = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogType = "website",
  ogImage = defaultOgImage,
  twitterCard = defaultTwitterCard,
  structuredData,
  noIndex = false,
}: SeoProps) => {
  const structuredDataItems = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={ogTitle ?? title} />
      <meta property="og:description" content={ogDescription ?? description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Auxilio" />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@auxilio_cloud" />
      <meta name="twitter:creator" content="@auxilio_cloud" />
      <meta name="twitter:title" content={ogTitle ?? title} />
      <meta name="twitter:description" content={ogDescription ?? description} />
      <meta name="twitter:image" content={ogImage} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {structuredDataItems.map((data, index) => (
        <script key={`structured-data-${index}`} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};
