import SocialLinks from "@/components/site/social-links";
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
      {slug === "classic-divinity" ? (
        <section
          className="classic-project-intro wrap"
          aria-labelledby="classic-project-title"
        >
          <TextLink href="/work">Selected work</TextLink>
          <div className="classic-project-composition">
            <div className="classic-project-heading">
              <p className="eyebrow">{p.category}</p>
              <h1 id="classic-project-title">
                Classic
                <br />
                Divinity
              </h1>
              <p className="profile-lead">{p.lead}</p>
              <p className="eyebrow classic-project-role">
                Founder / Digital media platform
              </p>
            </div>
            <div className="classic-project-brand">
              <p className="eyebrow">CLASSICAL MUSIC / DIGITAL CULTURE</p>
              <BrandMark slug="classic-divinity" />
              <div className="classic-project-audience">
                <span>{p.stat}</span>
                <p>
                  Combined followers across
                  <br />
                  Instagram &amp; TikTok
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section
          className="classic-project-intro hudson-project-intro wrap"
          aria-labelledby="hudson-project-title"
        >
          <TextLink href="/work">Selected work</TextLink>
          <div className="classic-project-composition">
            <div className="classic-project-heading">
              <p className="eyebrow">{p.category}</p>
              <h1 id="hudson-project-title">
                Hudson
                <br />
                Zhang
                <br />
                Studio
              </h1>
              <p className="profile-lead">{p.lead}</p>
              <p className="eyebrow classic-project-role">{p.role}</p>
            </div>
            <div className="classic-project-brand hudson-project-brand">
              <p className="eyebrow">VISUAL ART / GOLF CULTURE</p>
              <BrandMark slug={p.slug} />
              <div className="classic-project-audience hudson-project-identity">
                <span>{p.stat}</span>
                <p>{p.statLabel}</p>
              </div>
            </div>
          </div>
        </section>
      )}
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
          {slug === "hudson-zhang-studio" && p.image && (
            <figure className="hudson-project-image ambient-photo">
              <Photo
                id={p.image}
                alt="Aaron at Hudson Zhang’s book launch reception"
              />
              <figcaption>{p.note}</figcaption>
            </figure>
          )}
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
          <SocialLinks slug={slug} scope="work" />
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
