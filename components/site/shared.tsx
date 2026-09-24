import Link from "next/link";
import Image from "next/image";
export function Photo({
  id,
  alt,
  className = "",
  priority = false,
}: {
  id: number;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image
        src={`/images/photo-${String(id).padStart(2, "0")}.webp`}
        alt={alt}
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 65vw, 55vw"
        priority={priority}
      />
    </div>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-link">
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
export function PageIntro({
  number,
  eyebrow,
  title,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-intro wrap">
      <div className="eyebrow">
        {number} / {eyebrow}
      </div>
      <h1>{title}</h1>
      {children && <div className="intro-description">{children}</div>}
    </section>
  );
}
export function ContactCta() {
  return (
    <section className="contact-cta wrap">
      <p className="eyebrow">A conversation is a good place to start.</p>
      <Link href="/contact">
        Let’s make
        <br />
        <em>something matter.</em>
        <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer wrap">
      <Link href="/" className="footer-name">
        Aaron Isaiah Liu
      </Link>
      <p>
        Independent perspective.
        <br />
        International reach.
      </p>
      <div>
        <a
          href="https://www.instagram.com/aaronisaiahliu/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram ↗
        </a>
        <a
          href="https://www.linkedin.com/in/aaronisaiahliu/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
      <span className="copyright">
        © {new Date().getFullYear()} Aaron Isaiah Liu
      </span>
    </footer>
  );
}
