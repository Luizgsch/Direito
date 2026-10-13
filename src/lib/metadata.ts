import type { Metadata } from "next";
import { site } from "@/config/site";
import { assetPath, shareImagePath } from "./paths";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const label = `${title} | ${site.name}${site.conceptual ? " · Demonstração" : ""}`;
  return {
    title,
    description,
    alternates: { canonical: assetPath(path) },
    openGraph: {
      title: label,
      description,
      url: assetPath(path),
      images: [{ url: shareImagePath(), width: 1200, height: 630 }],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: label,
      description,
      images: [shareImagePath()],
    },
  };
}
