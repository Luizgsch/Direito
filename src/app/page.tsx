import type { Metadata } from "next";
import { site } from "@/config/site";
import { PhotoSpace, ActionLink } from "@/components/ui";
import { TopicsNavigation } from "@/components/topics-navigation";
import { FAQ } from "@/components/faq";
import { ContactSection } from "@/components/contact-section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  site.pages.home.title,
  site.description,
  "/",
);
export default function Home() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <section id="inicio" tabIndex={-1} className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">
            {site.hero.titleLead} <em>{site.hero.titleEnd}</em>
          </h1>
          <p>{site.hero.description}</p>
          <div className="hero-actions">
            <ActionLink href="/#atuacao">{site.hero.primary}</ActionLink>
            <ActionLink secondary href="/#atendimento">
              {site.hero.secondary}
            </ActionLink>
          </div>
        </div>
        <div className="hero-composition">
          <PhotoSpace slot="hero" className="hero-photo" preload />
          <div className="portrait-signature">
            <span>{site.name}</span>
            <span>{site.editorial.specialty}</span>
          </div>
        </div>
      </section>
      <section
        id="atuacao"
        tabIndex={-1}
        className="home-areas section-wrap"
        aria-labelledby="areas-title"
      >
        <div className="section-heading">
          <h2 id="areas-title">{site.pages.areas.title}</h2>
        </div>
        <TopicsNavigation headingLevel={3} />
        <div className="section-end">
          <p>{site.pages.areas.note}</p>
          <ActionLink secondary href="/areas">
            Todos os temas
          </ActionLink>
        </div>
      </section>
      <section
        id="sobre"
        tabIndex={-1}
        className="home-about section-wrap"
        aria-labelledby="about-title"
      >
        {site.photos.about || site.photo ? (
          <PhotoSpace slot="about" className="home-about-photo" />
        ) : (
          <div className="about-identity">
            <p className="about-identity-name">{site.name}</p>
            <p>{site.editorial.specialty}</p>
          </div>
        )}
        <div className="home-about-copy">
          <h2 id="about-title">{site.about.homeTitle}</h2>
          <p>{site.about.homeText}</p>
          <p>As páginas organizam perguntas e explicam diferenças entre procedimentos. São um ponto de partida para leitura, sem antecipar uma resposta sobre uma situação individual.</p>
          <p className="muted">
            {site.conceptual ? site.about.homeNote : site.about.biography[0]}
          </p>
          <ActionLink secondary href="/sobre">
            {site.about.homeAction}
          </ActionLink>
        </div>
      </section>
      <section
        id="atendimento"
        tabIndex={-1}
        className="process-section section-wrap"
        aria-labelledby="process-title"
      >
        <div className="process-heading">
          <h2 id="process-title">{site.process.title}</h2>
        </div>
        <ol className="process-list">
          {site.process.steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section
        id="duvidas"
        tabIndex={-1}
        className="faq-section section-wrap"
        aria-labelledby="faq-title"
      >
        <div className="faq-heading">
          <h2 id="faq-title">{site.faq.title}</h2>
          <p>
            Divórcio, rotina dos filhos e transmissão de bens: respostas iniciais para reconhecer o que merece uma análise mais próxima.
          </p>
          <ActionLink secondary href="/areas">Aprofundar minha dúvida</ActionLink>
        </div>
        <FAQ />
      </section>
      <ContactSection inline />
    </main>
  );
}
