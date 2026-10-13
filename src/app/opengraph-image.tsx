import { ImageResponse } from "next/og";
import { site } from "@/config/site";
export const dynamic = "force-static";
export const alt = `${site.name} — ${site.conceptual ? "projeto conceitual da dev_norm, sem atendimento jurídico ativo" : "apresentação profissional"}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#24221f",
        color: "#f3f0e9",
        width: "100%",
        height: "100%",
        display: "flex",
        padding: "68px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: 38, display: "flex" }}>{site.name}</div>
      <div
        style={{
          fontSize: 66,
          lineHeight: 1.1,
          maxWidth: 980,
          display: "flex",
        }}
      >
        {site.hero.titleLead} {site.hero.titleEnd}
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #916d4d",
          paddingTop: 24,
          fontSize: 22,
        }}
      >
        {site.conceptual ? site.notice : site.description}
      </div>
    </div>,
    size,
  );
}
