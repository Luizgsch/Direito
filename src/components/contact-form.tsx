"use client";
import { useRef, useState, type FormEvent } from "react";
import { site } from "@/config/site";
import { contactLinks, prepareMessage, type InitialContact } from "@/lib/contact";
import { Arrow } from "./ui";
type Fields = InitialContact;
type Errors = Partial<Record<keyof Fields, string>>;
const initial: Fields = {
  name: "",
  topic: "",
  preference: site.form.preferences[0],
};

export function ContactForm({ topics }: { topics: string[] }) {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [copying, setCopying] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const preview = useRef<HTMLTextAreaElement>(null);
  const revision = useRef(0);
  const channels = contactLinks(message, {
    email: site.conceptual ? null : site.contact.email,
    whatsapp: site.contact.whatsapp,
  });

  function change(key: keyof Fields, value: string) {
    revision.current++;
    setFields((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
    if (message) {
      setMessage("");
      setStatus(site.form.stale);
    } else setStatus("");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    revision.current++;
    const next: Errors = {};
    if (fields.name.trim().length < 2 || fields.name.trim().length > 80)
      next.name = site.form.nameError;
    if (!topics.includes(fields.topic)) next.topic = site.form.topicError;
    if (!site.form.preferences.includes(fields.preference))
      next.preference = site.form.preferenceError;
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      form.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setMessage(prepareMessage(fields));
    setStatus(site.form.ready);
    requestAnimationFrame(() => preview.current?.focus());
  }

  function clear() {
    revision.current++;
    setFields(initial);
    setErrors({});
    setMessage("");
    setStatus("");
    form.current?.querySelector<HTMLInputElement>("[name=name]")?.focus();
  }

  async function copy() {
    if (!message || copying) return;
    const copiedRevision = revision.current;
    setCopying(true);
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(message);
      if (revision.current === copiedRevision) setStatus(site.form.copied);
    } catch {
      if (revision.current === copiedRevision) {
        preview.current?.focus();
        preview.current?.select();
        setStatus(site.form.copyError);
      }
    } finally {
      setCopying(false);
    }
  }

  return (
    <div className="contact-tool">
      <form
        ref={form}
        onSubmit={submit}
        noValidate
        className="contact-form"
        aria-labelledby="form-title"
      >
        <h2 id="form-title">{site.form.title}</h2>
        <p className="form-hint" id="form-hint">
          {site.contactContent.disclaimer}
        </p>
        <div className="field">
          <label htmlFor="contact-name">
            {site.form.nameLabel} <span>{site.interface.required}</span>
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="given-name"
            type="text"
            maxLength={80}
            required
            placeholder={site.form.namePlaceholder}
            value={fields.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : "form-hint"}
            onChange={(event) => change("name", event.target.value)}
          />
          {errors.name && (
            <p id="name-error" className="field-error">
              {errors.name}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="contact-topic">
            {site.form.topicLabel} <span>{site.interface.required}</span>
          </label>
          <select
            id="contact-topic"
            name="topic"
            required
            value={fields.topic}
            aria-invalid={!!errors.topic}
            aria-describedby={errors.topic ? "topic-error" : undefined}
            onChange={(event) => change("topic", event.target.value)}
          >
            <option value="">{site.form.topicPlaceholder}</option>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
          {errors.topic && (
            <p id="topic-error" className="field-error">
              {errors.topic}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="contact-preference">
            {site.form.preferenceLabel}
          </label>
          <select
            id="contact-preference"
            name="preference"
            value={fields.preference}
            aria-invalid={!!errors.preference}
            aria-describedby={
              errors.preference ? "preference-error" : undefined
            }
            onChange={(event) => change("preference", event.target.value)}
          >
            {site.form.preferences.map((preference) => (
              <option key={preference}>{preference}</option>
            ))}
          </select>
          {errors.preference && (
            <p id="preference-error" className="field-error">
              {errors.preference}
            </p>
          )}
        </div>
        <div className="form-actions">
          <button className="button" type="submit">
            {site.form.submit}
            <Arrow />
          </button>
          <button className="reset-button" type="button" onClick={clear}>
            {site.form.clear}
          </button>
        </div>
      </form>
      <section className="message-preview" aria-labelledby="preview-title">
        <h2 id="preview-title">{site.form.previewTitle}</h2>
        {message ? (
          <>
            <label className="sr-only" htmlFor="prepared-message">
              {site.form.previewLabel}
            </label>
            <textarea
              ref={preview}
              id="prepared-message"
              readOnly
              value={message}
              rows={9}
            />
            <button className="button" type="button" onClick={copy} disabled={copying}>
              {copying ? site.form.copying : site.form.copy}<Arrow />
            </button>
          </>
        ) : (
          <p className="preview-empty">{site.form.previewEmpty}</p>
        )}
        <div className="whatsapp-contact">
          {message && channels.whatsapp && (
            <a className="button" href={channels.whatsapp} target="_blank" rel="noopener noreferrer">
              {site.form.whatsappAction}<Arrow />
              <span className="sr-only"> {site.interface.newTab}</span>
            </a>
          )}
          <dl className="contact-direct-details">
            <div>
              <dt>Telefone / WhatsApp</dt>
              <dd>
                {channels.whatsapp ? (
                  <a href={`tel:+${site.contact.whatsapp?.replace(/\D/g, "")}`}>{site.contact.whatsapp}</a>
                ) : site.contact.demoPhone}
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                {channels.email ? (
                  <a href={channels.email}>{site.contact.email}</a>
                ) : site.contact.demoEmail}
              </dd>
            </div>
          </dl>
          <p className="form-hint">
            {channels.whatsapp || channels.email
              ? site.form.channelHint
              : site.form.demoHint}
          </p>
        </div>
        <p
          className="message-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {status}
        </p>
      </section>
    </div>
  );
}
