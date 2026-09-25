import type { Metadata } from "next";
import Navigation from "@/components/site/navigation";
import { Footer } from "@/components/site/shared";
import "./globals.css";
import PageTransition from "@/components/site/page-transition";
const origin = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  ...(origin ? { metadataBase: new URL(origin) } : {}),
  title: {
    default: "Aaron Isaiah Liu — Marketing & Digital Strategy",
    template: "%s — Aaron Isaiah Liu",
  },
  description:
    "Independent marketing consultant and digital strategist working across culture, creative industries, and modern platforms. Founder of Classic Divinity.",
  openGraph: {
    type: "website",
    siteName: "Aaron Isaiah Liu",
    title: "Aaron Isaiah Liu — Marketing & Digital Strategy",
    description: "Culture, considered. Audiences, connected.",
    ...(origin
      ? {
          images: [
            {
              url: new URL("/images/photo-04.webp", origin).toString(),
              alt: "Aaron Isaiah Liu",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron Isaiah Liu — Marketing & Digital Strategy",
    description:
      "Independent marketing and digital strategy for artists, cultural organizations, and creative brands.",
  },
  manifest: "/site.webmanifest?v=1390b66282",
  icons: {
    icon: [
      {
        url: "/favicon.ico?v=1390b66282",
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon",
      },
      {
        url: "/icons/ail-16-1390b66282.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/icons/ail-32-1390b66282.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico?v=1390b66282",
    apple: {
      url: "/icons/ail-180-1390b66282.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navigation />
        <main id="main">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aaron Isaiah Liu",
              jobTitle: "Marketing Consultant / Digital Strategist",
              sameAs: [
                "https://www.instagram.com/aaronisaiahliu/",
                "https://www.linkedin.com/in/aaronisaiahliu/",
              ],
              knowsAbout: [
                "Social media strategy",
                "Digital marketing",
                "Arts marketing",
                "Audience development",
              ],
              ...(origin ? { url: origin } : {}),
            }),
          }}
        />
      </body>
    </html>
  );
}
