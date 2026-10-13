"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = header.current;
    if (!element) return;
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty("--header-height", `${element.getBoundingClientRect().height}px`);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    function close(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus({ preventScroll: true });
      }
    }
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      {site.conceptual && (
        <aside className="demo-bar" aria-label="Aviso de demonstração">
          {site.notice}
        </aside>
      )}
      <header ref={header} className="site-header">
        <Link
          href="/#inicio"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} — ${site.interface.homeLabel}`}
        >
          {site.name}
        </Link>
        <button
          ref={button}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <span>{open ? site.interface.close : site.interface.menu}</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="m5 5 12 12M17 5 5 17"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            ) : (
              <path
                d="M3 7h16M3 15h16"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            )}
          </svg>
        </button>
        <nav
          id="main-navigation"
          aria-label={site.interface.navigation}
          className={`main-nav ${open ? "is-open" : ""}`}
        >
          {site.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                if (open) button.current?.focus({ preventScroll: true });
                setOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
