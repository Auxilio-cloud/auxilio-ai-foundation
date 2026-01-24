import { Helmet } from "react-helmet-async";
import { organizationSchema, websiteSchema } from "@/lib/structuredData";

export const GlobalStructuredData = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
  </Helmet>
);
