import { site } from "@/config/site";
import { ActionLink } from "./ui";
import { ContactForm } from "./contact-form";
import Link from "next/link";
import { contactTopics } from "@/config/topics";
export function ContactSection({ inline = false }: { inline?: boolean }) {
  return (
    <section
      id={inline ? "contato" : undefined}
      tabIndex={inline ? -1 : undefined}
      className={`contact-section section-wrap${inline ? " contact-section-inline" : ""}`}
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title">{site.contactContent.title}</h2>
      <div>
        <p>{site.contactContent.homeText}</p>
        {!inline && <ActionLink href="/contato">{site.contactContent.action}</ActionLink>}
      </div>
      {inline && (
        <div className="home-contact-form">
          <ContactForm topics={contactTopics} />
          <p className="privacy-link">
            <Link href="/privacidade">{site.footer.privacy}</Link>
          </p>
        </div>
      )}
    </section>
  );
}
