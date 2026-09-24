import { notFound } from "next/navigation";
import { clients } from "@/content/site";
import images from "@/content/images.json";
import { Photo, ContactCta, TextLink } from "@/components/site/shared";
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
      {c.image ? (
        <figure
          className={`profile-hero wrap ${c.slug === "hudson-zhang-studio" ? "landscape" : ""}`}
        >
          <Photo id={c.image} alt={c.alt} priority />
          <figcaption className="caption">
            {c.alt} · Personal archive
          </figcaption>
        </figure>
      ) : (
        <div className="entertainment-banner wrap">
          <span>401</span>
          <p>
            Entertainment.
            <br />
            In conversation.
          </p>
        </div>
      )}
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
              Artist / organization background ↗
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
      {c.gallery.length > 1 && (
        <section className="profile-sequence wrap">
          <div className="section-heading">
            <p className="eyebrow">FROM THE PERSONAL ARCHIVE</p>
            <TextLink href="/gallery">More moments</TextLink>
          </div>
          <div>
            {c.gallery
              .filter((id) => id !== c.image)
              .slice(0, 2)
              .map((id) => (
                <Photo
                  id={id}
                  key={id}
                  alt={`${id === 5 || id === 6 ? "Aaron at " : "Aaron with "}${images.find((image) => image.id === id)?.caption}`}
                />
              ))}
          </div>
        </section>
      )}
      <section className="next-profile wrap">
        <p className="eyebrow">NEXT RELATIONSHIP</p>
        <TextLink href={`/clients/${next.slug}`}>{next.name}</TextLink>
      </section>
      <ContactCta />
    </>
  );
}
