import type { Metadata } from "next";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const origin = process.env.NEXT_PUBLIC_SITE_URL;
  return {
    title,
    description,
    ...(origin
      ? { alternates: { canonical: new URL(path, origin).toString() } }
      : {}),
    openGraph: {
      title: `${title} — Aaron Isaiah Liu`,
      description,
      type: "website",
      ...(origin
        ? {
            images: [
              {
                url: new URL("/images/photo-01.webp", origin).toString(),
                alt: "Aaron Isaiah Liu",
              },
            ],
          }
        : {}),
      ...(origin ? { url: new URL(path, origin).toString() } : {}),
    },
    twitter: {
      title: `${title} — Aaron Isaiah Liu`,
      description,
      card: "summary_large_image",
    },
  };
}
