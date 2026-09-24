import ArrowIcon from "@/components/site/arrow-icon";
import Image from "next/image";
import { notFound } from "next/navigation";
import { clients } from "@/content/site";
import { ClientArtwork, ContactCta, TextLink } from "@/components/site/shared";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = clients.find((c) => c.slug === slug);
  return c
    ? pageMetadata(c.name, c.summary, `/clients/${slug}`)
    : { title: "Client not found" };
}
export default async function Client({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = clients.find((c) => c.slug === slug);
  if (!c) notFound();
  const next = clients[(clients.indexOf(c) + 1) % clients.length];
  return (
    <>
      <section className="profile-heading wrap">
        <TextLink href="/clients">All clients</TextLink>
        <p className="eyebrow">{c.discipline} / Selected relationship</p>
        <h1>{c.name}</h1>
        <p className="profile-lead">{c.summary}</p>
      </section>
      <figure className="profile-hero studio-profile wrap">
        <ClientArtwork slug={c.slug} priority credit />
      </figure>
      <section className="profile-body wrap">
        <aside>
          <p className="eyebrow">MY ROLE</p>
          <h3>{c.role}</h3>
          <ul>
            {c.scope.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </aside>
        <div>
          <p className="eyebrow">THE CONTEXT</p>
          <h2>A closer look.</h2>
          <p>{c.bio}</p>
          {c.source && (
            <a
              className="source-link"
              href={c.source}
              target="_blank"
              rel="noreferrer"
            >
              Artist / organization background{" "}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          )}
          <div className="profile-work">
            <p className="eyebrow">THE COLLABORATION</p>
            <h2>
              {c.slug === "hudson-zhang-studio"
                ? "A connected studio presence."
                : "The work together."}
            </h2>
            <p>{c.work}</p>
          </div>
          {c.stats && (
            <div className="client-evidence">
              <div className="evidence-figures">
                {c.stats.map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <p className="caption">{c.statsNote}</p>
            </div>
          )}
          {c.entries && (
            <div className="project-entries">
              {c.entries.map(([title, description]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      {c.event && (
        <figure className="client-event wrap">
          <Image
            src={c.event.src}
            alt={c.event.alt}
            width={c.event.width}
            height={c.event.height}
            sizes="90vw"
          />
          <figcaption className="caption">
            {c.event.caption} · Photograph: {c.event.credit}
          </figcaption>
        </figure>
      )}
      <div className="archive-link wrap">
        <TextLink href="/gallery">
          Conversations & moments from the archive
        </TextLink>
      </div>
      <section className="next-profile wrap">
        <p className="eyebrow">NEXT RELATIONSHIP</p>
        <TextLink href={`/clients/${next.slug}`}>{next.name}</TextLink>
      </section>
      <ContactCta />
    </>
  );
}
