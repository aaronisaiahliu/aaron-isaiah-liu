import { notFound } from "next/navigation";
import { projects } from "@/content/site";
import {
  Photo,
  BrandMark,
  ContactCta,
  TextLink,
} from "@/components/site/shared";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p
    ? pageMetadata(p.name, p.lead, `/work/${slug}`)
    : { title: "Project not found" };
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <section className="profile-heading wrap">
        <TextLink href="/work">Selected work</TextLink>
        <p className="eyebrow">{p.category}</p>
        <h1>{p.name}</h1>
        <BrandMark slug={p.slug} />
        <p className="profile-lead">{p.lead}</p>
      </section>
      <section className={`project-stat wrap ${p.image ? "with-photo" : ""}`}>
        {p.image && (
          <Photo
            id={p.image}
            alt="Aaron at Hudson Zhang’s book launch reception"
            priority
          />
        )}
        <div>
          <span>{p.stat}</span>
          <p>{p.statLabel}</p>
        </div>
      </section>
      <section className="profile-body wrap">
        <aside>
          <p className="eyebrow">MY ROLE</p>
          <h3>{p.role}</h3>
          <ul>
            {p.scope.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </aside>
        <div>
          <p className="eyebrow">THE CONTEXT</p>
          <h2>{p.lead}</h2>
          <p>{p.context}</p>
          <div className="profile-work">
            <p className="eyebrow">THE WORK</p>
            <p>{p.approach}</p>
          </div>
          <div className="profile-work">
            <p className="eyebrow">
              {slug === "hudson-zhang-studio"
                ? "AN ONGOING PRACTICE"
                : "THE RESULT"}
            </p>
            <p>{p.result}</p>
          </div>
          {slug === "classic-divinity" && (
            <p className="project-note">{p.note}</p>
          )}
          {slug === "hudson-zhang-studio" && (
            <TextLink href="/clients/hudson-zhang-studio">
              Meet the studio
            </TextLink>
          )}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
