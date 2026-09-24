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
      <div className="gallery-grid wrap">
        {photos.map((p, i) => (
          <figure className={`gallery-item gallery-item-${i % 7}`} key={p.id}>
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
              <span>{p.caption}</span>
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
                {current.caption}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Personal archive photograph. Use the previous and next buttons
                or your arrow keys to browse. Escape closes the photograph.
              </DialogDescription>
              <div className="lightbox-image">
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
                  ← Previous
                </button>
                <span>
                  {selected! + 1} / {photos.length}
                </span>
                <button onClick={() => move(1)} aria-label="Next photograph">
                  Next →
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
