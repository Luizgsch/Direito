import Link from "next/link";
import { InformativeSources } from "@/components/informative-sources";
import { site, practiceAreas } from "@/config/site";
import type { PracticeTopic } from "@/config/topics";
import { PageIntro, ActionLink } from "./ui";
import { RelatedTopics } from "./topics-navigation";
import { ProfileContext } from "./profile-context";

export function TopicArticle({ topic }: { topic: PracticeTopic }) {
  const category = practiceAreas.find((area) => area.slug === topic.category);
  if (!category) throw new Error(`Unknown category for topic: ${topic.slug}`);
  return (
    <main id="conteudo" tabIndex={-1}>
      <nav className="breadcrumb" aria-label={site.interface.paths}>
        <Link href="/">{site.interface.home}</Link>
        <span aria-hidden="true">/</span>
        <Link href="/areas">{site.pages.areas.title}</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/areas/${category.slug}`}>{category.title}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{topic.title}</span>
      </nav>
      <PageIntro title={topic.title} description={topic.summary} />
      <div className="article-layout section-wrap">
        <aside className="article-sidebar">
          <nav
            className="article-index"
            aria-label={site.pages.area.topicsNavigation}
          >
            <p>{site.pages.area.contents}</p>
            <ul>
              {topic.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
              {topic.comparison && (
                <li>
                  <a href="#comparacao">{topic.comparison.title}</a>
                </li>
              )}
              <li>
                <a href="#preparacao">{site.editorial.topicPreparation}</a>
              </li>
            </ul>
          </nav>
          <ProfileContext />
        </aside>
        <article className="prose article-content">
          <p className="article-lead">{topic.introduction}</p>
          {topic.sections.map((section) => (
            <section id={section.id} tabIndex={-1} key={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {section.list && (
                <ul className="plain-list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {topic.comparison && (
            <section id="comparacao" tabIndex={-1} className="comparison">
              <h2>{topic.comparison.title}</h2>
              <p className="comparison-hint" id="comparacao-dica">
                {site.editorial.comparisonHint}
              </p>
              <div
                className="comparison-scroll"
                role="region"
                aria-label={topic.comparison.title}
                aria-describedby="comparacao-dica"
                tabIndex={0}
              >
                <table>
                  <caption className="sr-only">
                    {topic.comparison.title}
                  </caption>
                  <thead>
                    <tr>
                      {topic.comparison.columns.map((column) => (
                        <th scope="col" key={column}>
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {topic.comparison.rows.map((row) => (
                      <tr key={row[0]}>
                        <th scope="row">{row[0]}</th>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="table-note">{site.editorial.comparisonNote}</p>
            </section>
          )}
          <section id="preparacao" tabIndex={-1} className="article-preparation">
            <h2>{site.editorial.topicPreparation}</h2>
            <ul className="plain-list">
              {topic.preparation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="article-disclaimer">{site.pages.area.disclaimer}</p>
            <ActionLink href="/contato">
              {site.editorial.contactLink}
            </ActionLink>
          </section>
          <InformativeSources />
        </article>
      </div>
      <section
        className="related-areas section-wrap"
        aria-labelledby="related-title"
      >
        <h2 id="related-title">{site.editorial.relatedTopics}</h2>
        <RelatedTopics slugs={topic.related} />
        <ActionLink secondary href="/areas">
          Todos os assuntos
        </ActionLink>
      </section>
    </main>
  );
}
