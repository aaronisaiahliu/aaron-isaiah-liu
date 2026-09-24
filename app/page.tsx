import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Marketing & Digital Strategy",
  "Independent marketing and digital strategy for artists, cultural organizations, and creative brands.",
  "/",
);
import {
  Photo,
  ClientArtwork,
  BrandMark,
  TextLink,
  ContactCta,
} from "@/components/site/shared";
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            INDEPENDENT CONSULTANT / INTERNATIONAL OUTLOOK
          </p>
          <h1>
            Digital strategy
            <br />
            <em>for culture.</em>
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
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="hero-image ambient-photo">
          <Photo
            id={4}
            alt="Black and white portrait of Aaron Isaiah Liu"
            priority
          />
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
            <ClientArtwork slug="sumi-jo" />
            <div className="feature-caption">
              <h3>Sumi Jo</h3>
              <span>
                Digital & Social Media Strategy{" "}
                <span aria-hidden="true">↗</span>
              </span>
            </div>
          </Link>
          <Link href="/clients/xian-zhang" className="client-feature offset">
            <ClientArtwork slug="xian-zhang" />
            <div className="feature-caption">
              <h3>Xian Zhang</h3>
              <span>
                Digital & Social Media Strategy{" "}
                <span aria-hidden="true">↗</span>
              </span>
            </div>
          </Link>
        </div>
        <div className="name-strip">
          <Link href="/clients/jasmine-choi">Jasmine Choi</Link>
          <Link href="/clients/opera-italiana">
            Opera Italiana is in the Air
          </Link>
          <Link href="/clients/hudson-zhang-studio">Hudson Zhang Studio</Link>
        </div>
      </section>
      <section className="home-divinity wrap" aria-labelledby="divinity-title">
        <p className="eyebrow home-divinity-label">BUILT, NOT JUST ADVISED</p>
        <div className="home-divinity-feature">
          <div className="home-divinity-art">
            <span className="eyebrow">CLASSICAL MUSIC / DIGITAL CULTURE</span>
            <BrandMark slug="classic-divinity" />
            <div className="home-divinity-audience">
              <span className="home-divinity-number">
                1M<span>+</span>
              </span>
              <p>
                Combined followers across
                <br />
                Instagram &amp; TikTok
              </p>
            </div>
          </div>
          <div className="home-divinity-copy">
            <p className="eyebrow">FOUNDER / DIGITAL MEDIA PLATFORM</p>
            <h2 id="divinity-title">Classic Divinity</h2>
            <p className="home-divinity-statement">
              A world of music.
              <br />
              <em>A new generation of listeners.</em>
            </p>
            <p className="home-divinity-description">
              I founded Classic Divinity and built its strategy, brand, content
              direction, audience, partnerships, and digital presence.
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
        <div className="teaser-images ambient-photo">
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
