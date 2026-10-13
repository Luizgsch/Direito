import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro, PhotoSpace, ActionLink } from "@/components/ui";
import { ContactSection } from "@/components/contact-section";

export const metadata = pageMetadata(
  site.pages.about.title,
  site.pages.about.description,
  "/sobre",
);
export default function About() {
  const paragraphs = site.conceptual
    ? site.about.paragraphs
    : site.about.biography;
  return (
    <main id="conteudo" tabIndex={-1}>
      <PageIntro
        title={site.about.title}
        description={
          site.conceptual ? site.pages.about.intro : site.description
        }
      />
      <section className="about-layout section-wrap">
        <PhotoSpace className="about-photo" slot="about" />
        <div className="prose">
          <h2>{site.name}</h2>
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          {site.credentials.length > 0 && (
            <ul className="plain-list">
              {site.credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <ActionLink secondary href="/areas">
            {site.pages.about.themes}
          </ActionLink>
        </div>
      </section>
      <section
        className="principles section-wrap"
        aria-labelledby="principles-title"
      >
        <h2 id="principles-title">{site.pages.about.principlesTitle}</h2>
        <div className="principles-list">
          {site.about.principles.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
