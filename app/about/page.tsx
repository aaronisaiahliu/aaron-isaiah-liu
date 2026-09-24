import {
  Photo,
  PageIntro,
  ContactCta,
  TextLink,
} from "@/components/site/shared";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About",
  "The perspective behind Aaron Isaiah Liu’s work in marketing, digital strategy, and cultural audience building.",
  "/about",
);
export default function About() {
  return (
    <>
      <PageIntro
        number="01"
        eyebrow="About"
        title="A cultural perspective. A digital instinct."
      />
      <section className="about-story wrap ambient-photo">
        <Photo id={3} alt="Portrait of Aaron Isaiah Liu" priority />
        <div className="about-prose">
          <p className="eyebrow">AARON ISAIAH LIU</p>
          <h2>
            Close to the work.
            <br />
            <em>Connected to the audience.</em>
          </h2>
          <p>
            I’m a marketing consultant and digital strategist working with
            artists, cultural organizations, entertainment companies, and
            creative brands.
          </p>
          <p>
            My practice spans social media strategy, digital marketing, creative
            direction, and websites. I’m interested in how these parts fit
            together: the story an organization tells, the platforms it uses,
            and the audience it builds over time.
          </p>
          <p>
            As the founder of Classic Divinity, I’ve built a classical music
            media platform with more than one million followers across Instagram
            and TikTok. That experience keeps my consulting grounded in the
            everyday work of publishing, promoting, and understanding an
            audience.
          </p>
          <p>
            I also serve as Director of Media and Communications for Hudson
            Zhang Studio, working across its digital presence and its
            positioning around art and golf culture.
          </p>
          <p>
            My background in the arts informs the way I work. The thinking
            travels further—to any creative business with a distinct point of
            view and something worth sharing.
          </p>
          <TextLink href="/clients">Selected relationships</TextLink>
        </div>
      </section>
      <section className="about-statement wrap">
        <p className="eyebrow">A WORKING PRINCIPLE</p>
        <h2>
          Understand the work.
          <br />
          Find its language.
          <br />
          <em>Bring people closer.</em>
        </h2>
      </section>
      <ContactCta />
    </>
  );
}
