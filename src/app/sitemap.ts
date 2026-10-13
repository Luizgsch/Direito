import type { MetadataRoute } from "next";
import { practiceAreas, site } from "@/config/site";
import { practiceTopics } from "@/config/topics";
export default function sitemap(): MetadataRoute.Sitemap {
  if (site.conceptual || !site.indexing) return [];
  const routes = [
    "/",
    "/sobre",
    "/areas",
    "/contato",
    "/privacidade",
    ...practiceAreas.map((area) => `/areas/${area.slug}`),
    ...practiceTopics.map((topic) => `/areas/${topic.slug}`),
  ];
  return routes.map((path) => ({
    url: `${site.url.replace(/\/$/, "")}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
