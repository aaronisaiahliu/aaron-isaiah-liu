import { PageIntro, ContactCta } from "@/components/site/shared";
import Gallery from "@/components/site/gallery";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Gallery",
  "A personal archive of artists, collaborators, and conversations from Aaron Isaiah Liu’s life in and around the arts.",
  "/gallery",
);
export default function GalleryPage() {
  return (
    <>
      <PageIntro
        number="05"
        eyebrow="Personal archive"
        title="In the company of…"
      >
        <p>
          Artists, collaborators, and conversations. A few moments from life in
          and around the arts.
        </p>
      </PageIntro>
      <div className="gallery-meta wrap">
        <span>SELECTED MOMENTS / 24 PHOTOGRAPHS</span>
        <span>CLICK TO EXPLORE</span>
      </div>
      <Gallery />
      <ContactCta />
    </>
  );
}
