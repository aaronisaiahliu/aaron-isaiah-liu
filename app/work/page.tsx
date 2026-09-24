import Link from "next/link";
import { projects } from "@/content/site";
import {
  ClientArtwork,
  BrandMark,
  PageIntro,
  ContactCta,
} from "@/components/site/shared";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Selected work",
  "Audience building, concert promotion, and cultural communications: selected projects by Aaron Isaiah Liu.",
  "/work",
);
export default function Work() {
  return (
    <>
      <PageIntro
        number="04"
        eyebrow="Selected work"
        title="Ideas in the world."
      >
        <p>Building a cultural audience. Shaping a studio’s public presence.</p>
      </PageIntro>
      <div className="work-list wrap">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className={`work-feature work-${i}`}
          >
            <div className="work-visual">
              {p.slug === "hudson-zhang-studio" ? (
                <ClientArtwork slug={p.slug} />
              ) : (
                <div className="divinity-project-art">
                  <span className="eyebrow">
                    CLASSICAL MUSIC / DIGITAL CULTURE
                  </span>
                  <BrandMark slug="classic-divinity" />
                  <span className="divinity-art-footer">
                    A shared digital stage.<span>INSTAGRAM / TIKTOK</span>
                  </span>
                </div>
              )}
            </div>
            <div className="work-description">
              <span className="eyebrow">
                0{i + 1} /{" "}
                {p.slug === "classic-divinity"
                  ? "Founder / Digital Media Platform"
                  : p.category}
              </span>
              <h2>{p.name}</h2>
              <p>
                {p.slug === "classic-divinity"
                  ? "I founded Classic Divinity and built its strategy, brand, content direction, audience, partnerships, and digital presence."
                  : "I lead media and communications, connecting the studio’s digital presence, exhibition promotion, and positioning around art and golf."}
              </p>
              {p.slug === "classic-divinity" && (
                <div className="work-audience">
                  <strong>1M+</strong>
                  <span>
                    Combined followers
                    <br />
                    Instagram & TikTok
                  </span>
                </div>
              )}
              <span className="text-link">
                Explore the project <span aria-hidden="true">↗</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
      <section
        className="upcoming-work wrap"
        aria-label="Upcoming portfolio categories"
      >
        {[
          ["03 / WEB DESIGN", "Websites", "Design & development"],
          [
            "04 / CONTENT",
            "Selected social media content",
            "Reels, posts & campaigns",
          ],
          [
            "05 / SOCIAL",
            "Social media pages",
            "Positioning & audience development",
          ],
        ].map(([number, title, description]) => (
          <article key={number}>
            <p className="eyebrow">{number}</p>
            <h2>{title}</h2>
            <p>{description}</p>
            <span className="coming-soon">COMING SOON</span>
          </article>
        ))}
      </section>
      <ContactCta />
    </>
  );
}
