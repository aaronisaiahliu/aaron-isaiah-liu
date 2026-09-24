import ArrowIcon from "@/components/site/arrow-icon";
import { PageIntro } from "@/components/site/shared";
import ContactForm from "@/components/site/contact-form";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact",
  "Start a conversation about marketing, digital strategy, or your next creative project.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <PageIntro
        number="06"
        eyebrow="Contact"
        title="Let’s start a conversation."
      />
      <section className="contact-layout wrap">
        <aside>
          <p className="contact-aside-intro">
            A new project.
            <br />A different perspective.
            <br />
            <em>A place to begin.</em>
          </p>
          <p>
            For consulting, collaborations, and general inquiries, use the form
            to get in touch.
          </p>
          <div className="contact-socials">
            <a
              href="https://www.instagram.com/aaronisaiahliu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram{" "}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/aaronisaiahliu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn{" "}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
