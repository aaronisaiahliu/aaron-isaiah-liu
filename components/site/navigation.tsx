"use client";
import Link from "next/link";
import PersonalLogo from "@/components/site/personal-logo";
import ArrowIcon from "@/components/site/arrow-icon";
import { Dialog } from "radix-ui";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Clients", "/clients"],
  ["Work", "/work"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

function MenuSymbol() {
  return (
    <svg
      className="menu-symbol"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12h14M12 5v14" />
    </svg>
  );
}

export default function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [focusOrigin, setFocusOrigin] = useState<"pointer" | "keyboard">(
    "keyboard",
  );
  const closeButton = useRef<HTMLButtonElement>(null);
  const navigating = useRef(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const sync = () => {
      setCollapsed(media.matches);
      setOpen(false);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  const closeForLink = (href: string) => {
    navigating.current = href !== path;
    setOpen(false);
  };
  const current = (href: string) =>
    path === href || path.startsWith(href + "/");

  return (
    <Dialog.Root
      open={open && collapsed}
      onOpenChange={(value) => {
        navigating.current = false;
        setOpen(value);
      }}
    >
      <header className="site-header">
        <Link
          href="/"
          className="wordmark"
          aria-label="Aaron Isaiah Liu, home"
          onClick={() => closeForLink("/")}
        >
          <PersonalLogo priority />
        </Link>
        <Dialog.Trigger asChild>
          <button
            className="menu-toggle"
            aria-label="Open navigation menu"
            data-focus-origin={focusOrigin}
            onPointerDown={() => setFocusOrigin("pointer")}
            onKeyDown={() => setFocusOrigin("keyboard")}
          >
            <span>MENU</span>
            <MenuSymbol />
          </button>
        </Dialog.Trigger>
        <nav className="nav" aria-label="Main navigation" inert={collapsed}>
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={current(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-menu-backdrop" />
        <Dialog.Content
          className="mobile-menu-panel"
          aria-describedby={undefined}
          onPointerDownCapture={() => setFocusOrigin("pointer")}
          onKeyDownCapture={() => setFocusOrigin("keyboard")}
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            closeButton.current?.focus({ preventScroll: true });
          }}
          onCloseAutoFocus={(event) => {
            if (navigating.current) event.preventDefault();
          }}
        >
          <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
          <div className="site-header mobile-menu-header">
            <Link
              href="/"
              className="wordmark"
              aria-label="Aaron Isaiah Liu, home"
              onClick={() => closeForLink("/")}
            >
              <PersonalLogo />
            </Link>
            <Dialog.Close asChild>
              <button
                ref={closeButton}
                className="menu-toggle"
                aria-label="Close navigation menu"
                data-focus-origin={focusOrigin}
              >
                <span>MENU</span>
                <MenuSymbol />
              </button>
            </Dialog.Close>
          </div>
          <nav className="mobile-menu-nav" aria-label="Mobile navigation">
            <div className="mobile-menu-links">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={current(href) ? "page" : undefined}
                  onClick={() => closeForLink(href)}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mobile-menu-socials">
              <a
                href="https://www.instagram.com/aaronisaiahliu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram{" "}
                <span>
                  <ArrowIcon />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/aaronisaiahliu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn{" "}
                <span>
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
