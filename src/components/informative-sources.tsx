import { informativeSources, site } from "@/config/site";

export function InformativeSources() {
  return (
    <section className="sources">
      <h2>{site.pages.area.sourcesTitle}</h2>
      <p>{site.pages.area.sourcesText}</p>
      <ul>
        {informativeSources.map((source) => (
          <li key={source.href}>
            <a href={source.href} target="_blank" rel="noopener noreferrer">
              {source.title}
              <span className="sr-only"> {site.interface.newTab}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
