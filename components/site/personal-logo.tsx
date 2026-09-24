import Image from "next/image";

/** CSS clips only the supplied PNG's outer whitespace; the source stays intact. */
export default function PersonalLogo({
  priority = false,
}: {
  priority?: boolean;
}) {
  return (
    <span className="personal-logo">
      <Image
        src="/images/aaron-isaiah-liu-logo-final.png"
        alt="Aaron Isaiah Liu — Marketing & Digital Strategy"
        width={1672}
        height={941}
        unoptimized
        priority={priority}
      />
    </span>
  );
}
