import Link from "next/link";
import { site } from "@/config/site";
import { practiceTopics } from "@/config/topics";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-identity">
          <Link className="brand" href="/">
            {site.name}
          </Link>
          <p>{site.editorial.specialty}</p>
          <p>{site.footer.text}</p>
        </div>
        <nav aria-label={site.editorial.footerNavigation}>
          <h2>{site.editorial.footerNavigation}</h2>
          {site.navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/privacidade">{site.footer.privacy}</Link>
        </nav>
        <nav aria-label={site.editorial.footerTopics}>
          <h2>{site.editorial.footerTopics}</h2>
          {practiceTopics.map((topic) => (
            <Link key={topic.slug} href={`/areas/${topic.slug}`}>
              {topic.title}
            </Link>
          ))}
        </nav>
        {site.conceptual && (
          <div className="footer-project">
            <h2>{site.editorial.footerProject}</h2>
            <p>{site.editorial.footerProjectText}</p>
            <p>
              {site.fictionNote} {site.interface.noService}
            </p>
          </div>
        )}
      </div>
      <div className="footer-bottom">
        <span>{site.conceptual ? site.interface.portfolio : site.name}</span>
        <span>
          {site.footer.credit} <strong>{site.author}</strong>
        </span>
      </div>
    </footer>
  );
}
