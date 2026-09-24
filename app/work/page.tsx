import Link from "next/link";
import { projects } from "@/content/site";
import { Photo, PageIntro, ContactCta } from "@/components/site/shared";
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
        <p>
          From a million-person digital audience to the people taking their
          seats in a concert hall.
        </p>
      </PageIntro>
      <div className="work-list wrap">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className={`work-feature work-${i}`}
          >
            <div className="work-visual">
              {p.image ? (
                <Photo
                  id={p.image}
                  alt="Hudson Zhang’s book launch reception"
                />
              ) : (
                <div className="work-type">
                  {i === 0 ? (
                    <>
                      <span className="eyebrow">CLASSIC DIVINITY</span>
                      <strong>
                        1M<em>+</em>
                      </strong>
                      <span>Culture has an audience.</span>
                    </>
                  ) : (
                    <>
                      <span className="eyebrow">
                        CARNEGIE HALL / ISAAC STERN AUDITORIUM
                      </span>
                      <strong>Yiruma.</strong>
                      <span>A live moment. A full house.</span>
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="work-description">
              <span className="eyebrow">
                0{i + 1} / {p.category}
              </span>
              <h2>{p.name}</h2>
              <p>{p.lead}</p>
              <span className="text-link">
                Explore the project <span aria-hidden="true">↗</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
      <ContactCta />
    </>
  );
}
