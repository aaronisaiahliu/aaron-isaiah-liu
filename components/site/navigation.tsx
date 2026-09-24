"use client";
import Link from "next/link";
import PersonalLogo from "@/components/site/personal-logo";
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
export default function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
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
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <Link
        href="/"
        className="wordmark"
        aria-label="Aaron Isaiah Liu, home"
        onClick={() => setOpen(false)}
      >
        <PersonalLogo priority />
      </Link>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close −" : "Menu +"}
      </button>
      <nav
        id="main-navigation"
        className={open ? "nav open" : "nav"}
        aria-label="Main navigation"
        inert={collapsed && !open}
      >
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            aria-current={
              path === href || path.startsWith(href + "/") ? "page" : undefined
            }
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
