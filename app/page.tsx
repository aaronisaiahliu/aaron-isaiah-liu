import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Marketing & Digital Strategy",
  "Independent marketing and digital strategy for artists, cultural organizations, and creative brands.",
  "/",
);
import { Photo, TextLink, ContactCta } from "@/components/site/shared";
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            INDEPENDENT CONSULTANT / INTERNATIONAL OUTLOOK
          </p>
          <h1>
            Aaron
            <br />
            Isaiah <em>Liu.</em>
          </h1>
          <div className="hero-bottom">
            <p>
              Marketing. Digital strategy.
              <br />A considered approach to culture.
            </p>
            <a
              href="#perspective"
              className="down-link"
              aria-label="Explore the portfolio"
            >
              ↓
            </a>
          </div>
        </div>
        <div className="hero-image">
          <Photo
            id={1}
            alt="Black and white portrait of Aaron Isaiah Liu"
            priority
          />
          <span className="image-index">01 — A DIFFERENT PERSPECTIVE</span>
        </div>
        <div className="hero-side">CULTURE × STRATEGY × STORYTELLING</div>
      </section>
      <section id="perspective" className="perspective wrap">
        <p className="eyebrow">THE PRACTICE</p>
        <div>
          <h2>
            Good work deserves
            <br />
            <em>the right audience.</em>
          </h2>
          <div className="split-copy">
            <p>
              I help artists, cultural organizations, and creative brands find
              their voice online—and build the audience to hear it.
            </p>
            <p>
              From social media strategy to a complete digital presence, my work
              connects a clear creative point of view with the realities of
              modern platforms.
            </p>
          </div>
          <TextLink href="/about">A little about me</TextLink>
        </div>
      </section>
      <section className="selected wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED RELATIONSHIPS</p>
            <h2>
              In good <em>company.</em>
            </h2>
          </div>
          <TextLink href="/clients">All clients</TextLink>
        </div>
        <div className="client-pair">
          <Link href="/clients/sumi-jo" className="client-feature">
            <Photo id={24} alt="Aaron with soprano Sumi Jo" />
            <div className="feature-caption">
              <h3>Sumi Jo</h3>
              <span>Digital & social media strategy ↗</span>
            </div>
          </Link>
          <Link
            href="/clients/hudson-zhang-studio"
            className="client-feature offset"
          >
            <Photo
              id={5}
              alt="Aaron at Hudson Zhang’s book launch reception at the Harvard Club of New York City"
            />
            <div className="feature-caption">
              <h3>Hudson Zhang Studio</h3>
              <span>Media & communications ↗</span>
            </div>
          </Link>
        </div>
        <div className="name-strip">
          <Link href="/clients/xian-zhang">Xian Zhang</Link>
          <Link href="/clients/jasmine-choi">Jasmine Choi</Link>
          <Link href="/clients/new-york-star">
            New York Star Artist Management
          </Link>
          <Link href="/clients/401-entertainment">401 Entertainment</Link>
        </div>
      </section>
      <section className="divinity">
        <div className="divinity-top">
          <span className="eyebrow">BUILT, NOT JUST ADVISED</span>
          <span className="eyebrow">CLASSIC DIVINITY / FOUNDER</span>
        </div>
        <div className="million">
          1M<span>+</span>
        </div>
        <div className="divinity-bottom">
          <p>
            Followers across
            <br />
            Instagram & TikTok
          </p>
          <div>
            <h2>
              A world of music.
              <br />
              <em>A new generation of listeners.</em>
            </h2>
            <p>
              I founded Classic Divinity to bring classical music into the
              everyday digital conversation. Building that audience informs
              every strategy I create.
            </p>
            <TextLink href="/work/classic-divinity">Explore the story</TextLink>
          </div>
        </div>
      </section>
      <section className="expertise wrap">
        <div>
          <p className="eyebrow">HOW I CAN HELP</p>
          <h2>
            Clear strategy.
            <br />
            <em>Creative instinct.</em>
          </h2>
          <TextLink href="/services">Explore services</TextLink>
        </div>
        <div className="service-index">
          {[
            "Social media & audience development",
            "Digital marketing & campaigns",
            "Web design & digital presence",
            "Content & creative direction",
            "Newsletters & CRM",
            "Arts & entertainment marketing",
          ].map((s, i) => (
            <Link href={`/services#service-${i + 1}`} key={s}>
              <span>0{i + 1}</span>
              <h3>{s}</h3>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="gallery-teaser wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BEYOND THE SCREEN</p>
            <h2>
              The people.
              <br />
              <em>The conversations.</em>
            </h2>
          </div>
          <TextLink href="/gallery">View the gallery</TextLink>
        </div>
        <div className="teaser-images">
          <Photo id={8} alt="Aaron with Cai Guo-Qiang" />
          <Photo id={16} alt="Aaron with Jasmine Choi and Alice Sara Ott" />
          <Photo id={28} alt="Aaron with Gil Shaham" />
        </div>
        <p className="caption">
          A few moments from a life in and around the arts.
        </p>
      </section>
      <ContactCta />
    </>
  );
}
