import Link from "next/link";
import { Photo, PageIntro, ContactCta } from "@/components/site/shared";
import { clients } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Clients",
  "Selected consulting relationships with artists, cultural organizations, and entertainment companies.",
  "/clients",
);
export default function Clients() {
  return (
    <>
      <PageIntro
        number="03"
        eyebrow="Selected clients"
        title="Distinct voices. Shared ambition."
      >
        <p>
          Direct relationships with artists and organizations, each with their
          own audience, context, and creative world.
        </p>
      </PageIntro>
      <div className="client-directory wrap">
        {clients.map((c, i) => (
          <Link
            className={`directory-entry ${c.image ? "" : "type-only"}`}
            href={`/clients/${c.slug}`}
            key={c.slug}
          >
            <span className="eyebrow directory-number">
              0{i + 1} / {c.discipline}
            </span>
            {c.image ? (
              <Photo id={c.image} alt={c.alt} />
            ) : (
              <div className="type-art" aria-hidden="true">
                401<span>ENTERTAINMENT</span>
              </div>
            )}
            <div className="directory-copy">
              <h2>{c.name}</h2>
              <p>{c.summary}</p>
              <span className="directory-role">{c.role}</span>
              <span className="directory-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>
      <ContactCta />
    </>
  );
}
