import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";
import { contactTopics } from "@/config/topics";

export const metadata = pageMetadata(
  site.pages.contact.title,
  site.pages.contact.description,
  "/contato",
);
export default function Contact() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <PageIntro
        title={site.contactContent.title}
        description={site.contactContent.intro}
      />
      <div className="contact-body section-wrap">
        {site.conceptual && (
          <p className="demo-contact-note">{site.contactContent.demoNotice}</p>
        )}
        {!site.conceptual && (site.contact.address || site.contact.hours) && (
          <div className="contact-information">
            {site.contact.address && <p>{site.contact.address}</p>}
            {site.contact.hours && <p>{site.contact.hours}</p>}
          </div>
        )}
        <ContactForm topics={contactTopics} />
        <p className="privacy-link">
          {site.pages.contact.privacyQuestion}{" "}
          <Link href="/privacidade">{site.pages.contact.privacyAction}</Link>
        </p>
      </div>
    </main>
  );
}
