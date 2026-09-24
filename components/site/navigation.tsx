"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  return (
    <header className="site-header">
      <Link
        href="/"
        className="wordmark"
        aria-label="Aaron Isaiah Liu, home"
        onClick={() => setOpen(false)}
      >
        AARON ISAIAH LIU<span>MARKETING & DIGITAL STRATEGY</span>
      </Link>
      <button
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
