export const siteUrl = "https://www.auxilio.cloud";
export const defaultOgImage = `${siteUrl}/logo_dark.png`;

export const buildCanonicalUrl = (path: string) => new URL(path, siteUrl).toString();
