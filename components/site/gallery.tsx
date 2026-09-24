"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import images from "@/content/images.json";
import titles from "@/content/gallery-titles.json";
const profession = (id: number) =>
  (titles as Record<string, string>)[String(id)];
const people: Record<number, { name: string; title?: string }[]> = {
  7: [
    { name: "Leah Li", title: "CEO, New York Star Artist Management" },
    { name: "Xian Zhang", title: "Conductor" },
  ],
  16: [
    { name: "Jasmine Choi", title: "Flutist" },
    { name: "Alice Sara Ott", title: "Pianist" },
  ],
  18: [
    { name: "Danny Koo", title: "Violinist" },
    { name: "Korea Music Foundation team" },
  ],
  21: [
    { name: "Dani Bedoni", title: "Producer" },
    { name: "Jasmine Choi", title: "Flutist" },
    { name: "Adi Konstatzky", title: "Entrepreneur" },
  ],
};
function GalleryCaption({ photo }: { photo: (typeof images)[number] }) {
  const rows = people[photo.id] ?? [
    { name: photo.caption, title: profession(photo.id) },
  ];
  return (
    <span className="gallery-caption-lines">
      {rows.map((person) => (
        <span className="caption-person" key={person.name}>
          {person.name}
          {person.title && (
            <span className="caption-role"> — {person.title}</span>
          )}
        </span>
      ))}
    </span>
  );
}
const order = [
  24, 23, 11, 12, 15, 14, 17, 5, 6, 8, 16, 28, 27, 7, 18, 26, 10, 9, 13, 21, 22,
  19, 20, 25,
];
const photos = order.map((id) => images.find((p) => p.id === id)!);
export default function Gallery() {
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const current = selected === null ? null : photos[selected];
  const move = (step: number) =>
    setSelected((n) =>
      n === null ? 0 : (n + step + photos.length) % photos.length,
    );
  return (
    <>
      <div id="photographs" className="gallery-grid wrap">
        {photos.map((p, i) => (
          <figure
            className={`gallery-item gallery-item-${i % 7} ${p.id === 9 ? "gallery-small" : ""}`}
            key={p.id}
          >
            <button
              onClick={(event) => {
                lastTrigger.current = event.currentTarget;
                setSelected(i);
              }}
              aria-label={`Enlarge photograph: ${p.caption}`}
            >
              <Image
                src={p.src}
                alt={`${p.id === 5 || p.id === 6 ? "Aaron at " : "Aaron with "}${p.caption}`}
                width={p.width}
                height={p.height}
                sizes="(max-width: 700px) 90vw, (max-width: 1000px) 45vw, 40vw"
              />
              <span className="enlarge" aria-hidden="true">
                ↗
              </span>
            </button>
            <figcaption>
              <GalleryCaption photo={p} />
              <span className="photo-number">
                {String(i + 1).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent
          className="gallery-dialog"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            lastTrigger.current?.focus();
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              move(1);
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              move(-1);
            }
          }}
        >
          {current && (
            <>
              <DialogTitle className="gallery-dialog-title">
                <GalleryCaption photo={current} />
              </DialogTitle>
              <DialogDescription className="sr-only">
                Personal archive photograph. Use the previous and next buttons
                or your arrow keys to browse. Escape closes the photograph.
              </DialogDescription>
              <div
                className={`lightbox-image ${current.id === 9 ? "lightbox-small" : ""}`}
              >
                <Image
                  src={current.src}
                  alt={`${current.id === 5 || current.id === 6 ? "Aaron at " : "Aaron with "}${current.caption}`}
                  fill
                  sizes="90vw"
                />
              </div>
              <div className="lightbox-controls">
                <button
                  onClick={() => move(-1)}
                  aria-label="Previous photograph"
                >
                  <span className="arrow-left" aria-hidden="true">
                    ←
                  </span>{" "}
                  Previous
                </button>
                <span>
                  {selected! + 1} / {photos.length}
                </span>
                <button onClick={() => move(1)} aria-label="Next photograph">
                  Next{" "}
                  <span className="arrow-right" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
