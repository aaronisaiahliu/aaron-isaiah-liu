import ArrowIcon from "@/components/site/arrow-icon";
import { socialProfiles } from "@/content/social-links";

export default function SocialLinks({
  slug,
  showName = false,
  scope = "client",
}: {
  slug: string;
  showName?: boolean;
  scope?: "client" | "work";
}) {
  const profile = socialProfiles[slug];
  if (!profile) return null;
  const links = profile.links.filter(
    (link) => scope === "client" || link.managed,
  );
  if (!links.length) return null;
  return (
    <section
      className={`social-profile${showName ? " social-profile-named" : ""}`}
      aria-label={`${profile.name} social media`}
    >
      {showName ? (
        <h3>{profile.name}</h3>
      ) : (
        <h3 className="eyebrow">SOCIAL MEDIA</h3>
      )}
      <ul className="social-profile-links">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {label}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
