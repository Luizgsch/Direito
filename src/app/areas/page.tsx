import { site, practiceAreas } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro, ActionLink } from "@/components/ui";
import { ContactSection } from "@/components/contact-section";
import { TopicsNavigation } from "@/components/topics-navigation";

export const metadata = pageMetadata(
  site.pages.areas.title,
  site.pages.areas.description,
  "/areas",
);
export default function Areas() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <PageIntro
        title={site.areasIntro.title}
        description={site.areasIntro.description}
      />
      <section
        className="directory-topics section-wrap"
        aria-label={site.editorial.topicNavigation}
      >
        <TopicsNavigation />
      </section>
      <div className="areas-directory section-wrap">
        {practiceAreas.map((area) => (
          <section className="directory-item" key={area.slug}>
            <h2>{area.title}</h2>
            <div>
              <p>{area.introduction}</p>
              <ul className="topic-index">
                {area.topics.map((topic) => (
                  <li key={topic.title}>{topic.title}</li>
                ))}
              </ul>
              <ActionLink secondary href={`/areas/${area.slug}`}>
                {site.pages.areas.readAction} {area.title}
              </ActionLink>
            </div>
          </section>
        ))}
      </div>
      <div className="reading-note section-wrap">
        <p>{site.pages.areas.note}</p>
      </div>
      <ContactSection />
    </main>
  );
}
