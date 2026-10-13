import Link from "next/link";
import { InformativeSources } from "@/components/informative-sources";
import { notFound } from "next/navigation";
import { practiceAreas, site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro, ActionLink } from "@/components/ui";
import { AreasList } from "@/components/areas-list";
import { practiceTopics } from "@/config/topics";
import { TopicArticle } from "@/components/topic-article";
import { TopicsNavigation } from "@/components/topics-navigation";
import { ProfileContext } from "@/components/profile-context";

export function generateStaticParams() {
  return [...practiceAreas, ...practiceTopics].map((area) => ({
    slug: area.slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = [...practiceAreas, ...practiceTopics].find(
    (item) => item.slug === slug,
  );
  if (!area) return {};
  return pageMetadata(
    area.title,
    `${area.summary} ${site.pages.area.metadataNote}`,
    `/areas/${slug}`,
  );
}
export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = practiceTopics.find((item) => item.slug === slug);
  if (topic) return <TopicArticle topic={topic} />;
  const area = practiceAreas.find((item) => item.slug === slug);
  if (!area) notFound();
  return (
    <main id="conteudo" tabIndex={-1}>
      <nav className="breadcrumb" aria-label={site.interface.paths}>
        <Link href="/">{site.interface.home}</Link>
        <span aria-hidden="true">/</span>
        <Link href="/areas">{site.pages.areas.title}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{area.title}</span>
      </nav>
      <PageIntro title={area.title} description={area.introduction} />
      <section
        className="category-topics section-wrap"
        aria-label={site.editorial.overviewTitle}
      >
        <TopicsNavigation category={slug} />
      </section>
      <div className="article-layout section-wrap">
        <aside className="article-sidebar">
          <div className="article-index">
            <p>{site.pages.area.contents}</p>
            <nav aria-label={site.pages.area.topicsNavigation}>
              <ul>
                {area.topics.map((topic, index) => (
                  <li key={topic.title}>
                    <a href={`#tema-${index}`}>{topic.title}</a>
                  </li>
                ))}
                <li>
                  <a href="#preparacao">{site.pages.area.preparationTitle}</a>
                </li>
              </ul>
            </nav>
          </div>
          <ProfileContext />
        </aside>
        <article className="prose article-content">
          {area.topics.map((topic, index) => (
            <section id={`tema-${index}`} tabIndex={-1} key={topic.title}>
              <h2>{topic.title}</h2>
              <p>{topic.text}</p>
            </section>
          ))}
          <section id="preparacao" tabIndex={-1}>
            <h2>{site.pages.area.preparationTitle}</h2>
            <ul className="plain-list">
              {area.preparation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="article-disclaimer">{site.pages.area.disclaimer}</p>
            <ActionLink href="/contato">{site.pages.area.action}</ActionLink>
          </section>
          <InformativeSources />
        </article>
      </div>
      <section className="related-areas section-wrap">
        <h2>{site.pages.area.relatedTitle}</h2>
        <AreasList exclude={slug} />
      </section>
    </main>
  );
}
