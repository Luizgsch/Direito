import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui";
export const metadata = pageMetadata(
  site.pages.privacy.title,
  site.pages.privacy.description,
  "/privacidade",
);
export default function Privacy() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <PageIntro title={site.privacy.title} description={site.privacy.intro} />
      <article className="privacy-content prose section-wrap">
        {site.privacy.sections.map((item) => (
          <section key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </section>
        ))}
      </article>
    </main>
  );
}
