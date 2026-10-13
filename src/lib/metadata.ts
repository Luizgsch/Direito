import type { Metadata } from "next";
import { site } from "@/config/site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const label = `${title} | ${site.name}${site.conceptual ? " · Demonstração" : ""}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: label,
      description,
      url: path,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: label,
      description,
      images: ["/opengraph-image"],
    },
  };
}
