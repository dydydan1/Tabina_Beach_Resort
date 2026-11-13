import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { galleryImages, type GalleryCategory } from "../data/resort";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./Icons";
import { Reveal } from "./Reveal";

const filters: Array<"All" | GalleryCategory> = ["All", "Spring & Pools", "Nature & Grounds", "Cottages"];

export function GallerySection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const visibleImages = useMemo(
    () => (filter === "All" ? galleryImages : galleryImages.filter((image) => image.category === filter)),
    [filter],
  );

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (direction: 1 | -1) =>
      setOpenIndex((current) => {
        if (current === null) return current;
        const next = (current + direction + visibleImages.length) % visibleImages.length;
        return next;
      }),
    [visibleImages.length],
  );

  useEffect(() => {
    if (openIndex === null) {
      lastFocusedRef.current?.focus();
      return;
    }

    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, step]);

  const activeImage = openIndex !== null ? visibleImages[openIndex] : null;

  return (
    <section className="section section--forest gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal className="section-head section-head--onDark">
          <p className="eyebrow">Gallery</p>
          <h2 id="gallery-title" className="section-title">
            A look around the <em>grounds</em>
          </h2>
          <p className="lede">
            Spring pools, shaded paths and the cottages in between. Tap any photo to see it larger.
          </p>
        </Reveal>

        <Reveal className="gallery__filters" delay={60}>
          <div className="filter-group" role="group" aria-label="Filter gallery by category">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                className={`filter-chip${filter === item ? " is-active" : ""}`}
                onClick={() => {
                  setFilter(item);
                  setOpenIndex(null);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="gallery__grid">
          {visibleImages.map((image, index) => (
            <button
              type="button"
              key={image.src}
              className={`gallery__item gallery__item--${image.span}`}
              onClick={() => setOpenIndex(index)}
              aria-label={`View larger: ${image.caption}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              <span className="gallery__caption">
                <span className="gallery__category">{image.category}</span>
                <span className="gallery__title">{image.caption}</span>
              </span>
              <span className="gallery__zoom" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="M16 16l4.5 4.5M11 8.5v5M8.5 11h5" strokeLinecap="round" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeImage && openIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image: ${activeImage.caption}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="lightbox__bar">
            <span className="lightbox__counter">
              {openIndex + 1} / {visibleImages.length}
            </span>
            <button ref={closeButtonRef} type="button" className="lightbox__close" onClick={close}>
              <CloseIcon width={18} height={18} />
              <span>Close</span>
            </button>
          </div>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={() => step(-1)}
            aria-label="Previous image"
          >
            <ChevronLeftIcon width={22} height={22} />
          </button>

          <figure className="lightbox__figure">
            <img src={activeImage.src} alt={activeImage.alt} />
            <figcaption>
              <span className="lightbox__category">{activeImage.category}</span>
              {activeImage.caption}
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={() => step(1)}
            aria-label="Next image"
          >
            <ChevronRightIcon width={22} height={22} />
          </button>
        </div>
      )}
    </section>
  );
}
