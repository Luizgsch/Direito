"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

function hashTarget(hash: string) {
  try {
    return hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
  } catch {
    // Leave malformed hashes to native navigation.
    return null;
  }
}

/** One scroll controller for the entire site; native touch and keyboard remain available. */
export function SmoothScroll() {
  const pathname = usePathname();
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      anchors: false,
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
      respectReducedMotion: true,
      stopInertiaOnNavigate: false,
      prevent: (node) =>
        node.matches(".main-nav, .comparison-scroll, textarea, select"),
    });

    // Handle same-page anchors once, before Next.js can perform a competing scroll.
    let frame = 0;
    let animationFrame = 0;
    function synchronize() {
      lenis.stop();
      lenis.start();
    }
    function interrupt() {
      cancelAnimationFrame(frame);
      synchronize();
    }
    function restoreFocus() {
      interrupt();
      frame = requestAnimationFrame(() => {
        hashTarget(location.hash)?.focus({ preventScroll: true });
      });
    }
    function animate(time: number) {
      // Native focus, history, scrollbar and Next.js scrolling take precedence.
      if (Math.abs(window.scrollY - lenis.animatedScroll) > 2) synchronize();
      lenis.raf(time);
      animationFrame = requestAnimationFrame(animate);
    }
    animationFrame = requestAnimationFrame(animate);
    function keyboard(event: KeyboardEvent) {
      if (["Tab", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) interrupt();
    }
    function navigate(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>("a[href]")
        : null;
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      interrupt();
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
      const target = hashTarget(url.hash);
      if (!target) return;
      event.preventDefault();
      if (location.hash !== url.hash) history.pushState(history.state, "", url.href);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        lenis.scrollTo(target, {
          onComplete: () => target.focus({ preventScroll: true }),
        });
      });
    }
    document.addEventListener("click", navigate, true);
    document.addEventListener("focusin", synchronize);
    document.addEventListener("keydown", keyboard, true);
    document.addEventListener("pointerdown", interrupt, true);
    window.addEventListener("popstate", restoreFocus);
    // Next.js owns cross-route scrolling; only transfer keyboard focus here.
    restoreFocus();

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(animationFrame);
      document.removeEventListener("click", navigate, true);
      document.removeEventListener("focusin", synchronize);
      document.removeEventListener("keydown", keyboard, true);
      document.removeEventListener("pointerdown", interrupt, true);
      window.removeEventListener("popstate", restoreFocus);
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}
