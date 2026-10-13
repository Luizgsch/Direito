import { site } from "@/config/site";
export function FAQ() {
  return (
    <div className="faq-list">
      {site.faq.items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>
            {item.question}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 10h14M10 3v14"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
