"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

// One shared enhancement for framework links and browser history. The router
// still owns fetching, history, focus and scroll; no timer delays navigation.
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const page = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const committedPath = useRef(pathname);
  const finishCommit = useRef<(() => void) | null>(null);
  const active = useRef<ViewTransition | null>(null);

  useLayoutEffect(() => {
    committedPath.current = pathname;
    finishCommit.current?.();
    finishCommit.current = null;
    // Unsupported browsers get one arriving-page animation per route commit.
    // Native transitions animate snapshots only; the real page stays at rest.
    if (
      !document.startViewTransition &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const arrival = page.current?.animate(
        [
          { opacity: 0.15, transform: "translateY(4px)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 300, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)" },
      );
      return () => arrival?.cancel();
    }
  }, [pathname]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stop = () => {
      active.current?.skipTransition();
      finishCommit.current?.();
      finishCommit.current = null;
    };
    const transition = (navigate?: () => void) => {
      stop();
      if (reduced.matches || !document.startViewTransition) {
        navigate?.();
        return;
      }
      // Install the resolver before the browser captures the old view so a
      // fast history commit cannot race the transition's update callback.
      const committed = new Promise<void>((resolve) => {
        finishCommit.current = resolve;
      });
      const current = document.startViewTransition(async () => {
        navigate?.();
        await committed;
      });
      active.current = current;
      void current.finished
        .catch(() => {})
        .finally(() => {
          if (active.current === current) {
            active.current = null;
          }
        });
    };
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        reduced.matches ||
        !document.startViewTransition
      )
        return;
      const link =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>("a[href]")
          : null;
      if (
        !link ||
        link.hasAttribute("download") ||
        (link.target && link.target !== "_self") ||
        link.rel.includes("external")
      )
        return;
      const url = new URL(link.href, window.location.href);
      // Same-page hashes and query changes retain their native behavior.
      if (
        url.origin !== window.location.origin ||
        url.pathname === window.location.pathname
      )
        return;
      event.preventDefault();
      transition(() => router.push(url.pathname + url.search + url.hash));
    };
    const onHistory = () => {
      if (window.location.pathname !== committedPath.current) transition();
    };
    const onMotionChange = () => {
      if (reduced.matches) stop();
    };
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onHistory);
    reduced.addEventListener("change", onMotionChange);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onHistory);
      reduced.removeEventListener("change", onMotionChange);
      stop();
    };
  }, [router]);

  return (
    <div ref={page} className="page-transition">
      {children}
    </div>
  );
}
