import { PageIntro, ContactCta } from "@/components/site/shared";
import { services } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Services",
  "Social media strategy, digital marketing, web design, creative direction, newsletters, and arts marketing.",
  "/services",
);
export default function Services() {
  return (
    <>
      <PageIntro
        number="02"
        eyebrow="Services"
        title="From point of view to public presence."
      >
        <p>
          Strategy and creative execution, shaped around the work and the people
          it needs to reach.
        </p>
      </PageIntro>
      <div className="services-list wrap">
        {services.map((s, i) => (
          <section
            id={`service-${i + 1}`}
            key={s.name}
            className="service-detail"
          >
            <div className="eyebrow">0{i + 1}</div>
            <div>
              <h2>{s.name}</h2>
              <h3>{s.line}</h3>
              <p>{s.description}</p>
            </div>
            <ul>
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <ContactCta />
    </>
  );
}
