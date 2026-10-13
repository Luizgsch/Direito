import Link from "next/link";
import { practiceAreas, site } from "@/config/site";
import { practiceTopics, type PracticeTopic } from "@/config/topics";
import { Arrow } from "./ui";

export function TopicsNavigation({
  category,
  headingLevel = 2,
}: {
  category?: string;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="topics-grid">
      {practiceAreas
        .filter((area) => !category || area.slug === category)
        .map((area) => (
          <section className="topic-category" key={area.slug}>
            <div className="category-heading">
              <Heading>{category ? site.editorial.overviewTitle : area.title}</Heading>
              {!category && (
                <Link href={`/areas/${area.slug}`}>
                  {site.editorial.categoryAction}
                  <span className="sr-only"> de {area.title}</span>
                </Link>
              )}
            </div>
            <p>{area.summary}</p>
            <ul>
              {practiceTopics
                .filter(
                  (topic) => topic.category === area.slug,
                )
                .map((topic) => (
                  <li key={topic.slug}>
                    <TopicLink topic={topic} />
                  </li>
                ))}
            </ul>
          </section>
        ))}
    </div>
  );
}

export function RelatedTopics({ slugs }: { slugs: string[] }) {
  return (
    <ul className="related-topics">
      {slugs.map((slug) => {
        const topic = practiceTopics.find((item) => item.slug === slug);
        return topic ? (
          <li key={slug}>
            <TopicLink topic={topic} />
          </li>
        ) : null;
      })}
    </ul>
  );
}

function TopicLink({ topic }: { topic: PracticeTopic }) {
  return (
    <Link className="topic-link" href={`/areas/${topic.slug}`}>
      <span>
        <strong>{topic.title}</strong>
        <span>{topic.summary}</span>
      </span>
      <Arrow />
    </Link>
  );
}
