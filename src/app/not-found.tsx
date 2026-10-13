import { site } from "@/config/site";
import { ActionLink } from "@/components/ui";
export default function NotFound() {
  return (
    <main id="conteudo" tabIndex={-1} className="not-found section-wrap">
      <h1>{site.notFound.title}</h1>
      <p>{site.notFound.text}</p>
      <div className="hero-actions">
        <ActionLink href="/">{site.notFound.home}</ActionLink>
        <ActionLink secondary href="/areas">
          {site.notFound.areas}
        </ActionLink>
      </div>
    </main>
  );
}
