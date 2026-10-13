import type { MetadataRoute } from "next";
import { site } from "@/config/site";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  const index = site.indexing && !site.conceptual;
  return {
    rules: { userAgent: "*", ...(index ? { allow: "/" } : { disallow: "/" }) },
    ...(index ? { sitemap: `${site.url.replace(/\/$/, "")}/sitemap.xml` } : {}),
  };
}
