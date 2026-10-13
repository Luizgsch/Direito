import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import type { ReactNode } from "react";

export function Arrow() {
  return (
    <svg
      className="arrow"
      width="26"
      height="20"
      viewBox="0 0 26 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 10h23M17 3l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ActionLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link href={href} className={secondary ? "text-link" : "button"}>
      {children}
      <Arrow />
    </Link>
  );
}
export function PhotoSpace({
  className = "",
  slot = "about",
  preload = false,
}: {
  className?: string;
  slot?: "hero" | "about" | "context";
  preload?: boolean;
}) {
  const photo = site.photos[slot] ?? site.photo;
  return (
    <figure
      className={`photo-space ${className} ${photo ? "has-photo" : "is-reserved"}`}
    >
      <div className="photo-aperture">
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={
              slot === "context"
                ? "(max-width: 760px) 75vw, 220px"
                : "(max-width: 760px) 90vw, 40vw"
            }
            preload={preload}
            style={{
              objectFit: photo.fit ?? "cover",
              objectPosition: photo.position ?? "50% 35%",
            }}
          />
        ) : (
          <div className="photo-placeholder">
            <span className="portrait-initials" aria-hidden="true">
              {site.name.split(/\s+/).map((part) => part[0]).filter(Boolean).slice(0, 2).join("")}
            </span>
            <p className="portrait-subjects">Família.<br />Patrimônio.<br /><em>Escolhas.</em></p>
          </div>
        )}
      </div>
      {!photo && (
        <figcaption className="photo-caption">
          Fotografia real a inserir · 4:5
        </figcaption>
      )}
    </figure>
  );
}
export function PageIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="page-intro">
      <h1>{title}</h1>
      <p className="intro-text">{description}</p>
    </header>
  );
}
