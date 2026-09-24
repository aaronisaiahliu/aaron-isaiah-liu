import ArrowIcon from "@/components/site/arrow-icon";
import Link from "next/link";
import Image from "next/image";
import PersonalLogo from "@/components/site/personal-logo";
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
      <span aria-hidden="true">
        <ArrowIcon />
      </span>
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
        <span aria-hidden="true">
          <ArrowIcon />
        </span>
      </Link>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer wrap">
      <Link
        href="/"
        className="footer-name"
        aria-label="Aaron Isaiah Liu — home"
      >
        <PersonalLogo />
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
          rel="noopener noreferrer"
        >
          Instagram{" "}
          <span aria-hidden="true">
            <ArrowIcon />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/aaronisaiahliu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn{" "}
          <span aria-hidden="true">
            <ArrowIcon />
          </span>
        </a>
      </div>
      <span className="copyright">
        © {new Date().getFullYear()} Aaron Isaiah Liu
      </span>
    </footer>
  );
}

const artwork: Record<
  string,
  {
    name: string;
    credit?: string;
    position?: string;
    width?: number;
    height?: number;
  }
> = {
  "sumi-jo": { name: "Sumi Jo", credit: "Yeongjun Kim", position: "56% 18%" },
  "xian-zhang": {
    name: "Xian Zhang",
    credit: "Carlin Ma",
    position: "52% 24%",
  },
  "jasmine-choi": {
    name: "Jasmine Choi",
    credit: "Studio1207",
    position: "50% 15%",
  },
  "hudson-zhang-studio": { name: "Hudson Zhang Studio" },
  "new-york-star": { name: "New York Star Artist Management" },
  "401-entertainment": { name: "401 Entertainment" },
  "classic-divinity": { name: "Classic Divinity" },
  "sumi-jo-competition": {
    name: "Sumi Jo International Singing Competition",
    width: 1357,
    height: 1920,
  },
  "opera-italiana": {
    name: "Opera Italiana is in the Air",
    width: 1500,
    height: 560,
  },
};
export function BrandMark({ slug }: { slug: string }) {
  return (
    <span className={`brand-mark brand-${slug}`}>
      <Image
        src={`/images/${slug}.webp`}
        alt={`${artwork[slug].name} logo`}
        width={artwork[slug].width ?? 240}
        height={artwork[slug].height ?? 240}
        unoptimized={
          slug === "hudson-zhang-studio" || slug === "classic-divinity"
        }
      />
    </span>
  );
}
export function ClientArtwork({
  slug,
  priority = false,
  credit = false,
}: {
  slug: string;
  priority?: boolean;
  credit?: boolean;
}) {
  const asset = artwork[slug];
  return (
    <div
      className={`client-artwork ${asset.credit ? "studio-artwork" : "organization-artwork"} artwork-${slug}`}
    >
      {asset.credit ? (
        <div className="studio-image">
          <Image
            src={`/images/${slug}.webp`}
            alt={`${asset.name} — studio portrait`}
            fill
            priority={priority}
            sizes="(max-width: 700px) 90vw, 50vw"
            style={{ objectPosition: asset.position }}
          />
        </div>
      ) : (
        <BrandMark slug={slug} />
      )}
      {credit && asset.credit && (
        <p className="caption studio-credit">Photograph © {asset.credit}</p>
      )}
    </div>
  );
}
