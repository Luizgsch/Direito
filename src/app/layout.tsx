import type { Metadata } from "next";
import { Geist, Bodoni_Moda } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/config/site";
import { shareImagePath } from "@/lib/paths";
import "./globals.css";
import "lenis/dist/lenis.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const display = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("/", site.url),
  title: {
    default: `${site.name}${site.conceptual ? " · Projeto conceitual" : ""}`,
    template: `%s | ${site.name}${site.conceptual ? " · Demonstração" : ""}`,
  },
  description: site.description,
  robots: {
    index: site.indexing && !site.conceptual,
    follow: site.indexing && !site.conceptual,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: `${site.name} · ${site.author}`,
    title: `${site.name}${site.conceptual ? " · Projeto conceitual" : ""}`,
    description: site.description,
    images: [{ url: shareImagePath(), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}${site.conceptual ? " · Projeto conceitual" : ""}`,
    description: site.description,
    images: [shareImagePath()],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${display.variable} antialiased`}
    >
      <body>
        <SmoothScroll />
        <a className="skip-link" href="#conteudo">
          {site.interface.skip}
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
