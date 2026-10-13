import { site } from "@/config/site";
export type InitialContact = {
  name: string;
  topic: string;
  preference: string;
};

export function prepareMessage(data: InitialContact) {
  const name = data.name.trim().replace(/\s+/g, " ");
  const copy = site.form.message;
  return `${copy.greeting} ${name}.\n\n${copy.interest} ${data.topic}.\n${copy.preference} ${data.preference}.\n\n${copy.closing}`;
}

export function contactLinks(
  message: string,
  channels: { email: string | null; whatsapp: string | null },
) {
  const email = channels.email?.trim();
  const rawPhone = channels.whatsapp?.trim();
  const phone =
    rawPhone && /^\+?[\d\s().-]+$/.test(rawPhone)
      ? rawPhone.replace(/\D/g, "")
      : null;
  return {
    email:
      email && !email.toLowerCase().endsWith(".invalid") && /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(email)
        ? `mailto:${email.split("@").map(encodeURIComponent).join("@")}?subject=${encodeURIComponent(site.form.message.subject)}&body=${encodeURIComponent(message)}`
        : null,
    whatsapp:
      phone && /^[1-9]\d{9,14}$/.test(phone)
        ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
        : null,
  };
}
