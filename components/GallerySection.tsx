'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

const focusClass = 'focus-accent';

const SLIDES = [
  { src: 'https://thefabbashow.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl77qopcp%2Fproduction%2F34954395c5b1e2f3449cdd731e45ae17c2523a53-1578x984.jpg%3Fw%3D1200&w=1200&q=75', alt: 'Concert crowd and stage' },
  { src: 'https://thefabbashow.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl77qopcp%2Fproduction%2Fe204ec7b37f27302a90cc0ce785bbb314012eccd-1728x914.jpg%3Fw%3D1200&w=1200&q=75', alt: 'Singer performing on stage' },
  { src: 'https://thefabbashow.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl77qopcp%2Fproduction%2F730bdae1a54d55b8f620423024baf098f6db48a7-1750x1130.jpg%3Fw%3D1200&w=1200&q=75', alt: 'Stage lighting and performance' },
  { src: 'https://thefabbashow.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl77qopcp%2Fproduction%2Fe204ec7b37f27302a90cc0ce785bbb314012eccd-1728x914.jpg%3Fw%3D1200&w=1200&q=75', alt: 'Band performing live' },
]

const ChevronLeft = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const PauseIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M6 4h3v16H6V4zm9 0h3v16h-3V4z" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M8 5v14l11-7L8 5z" />
  </svg>
);

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent(((index % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (((c - 1) % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [isPlaying, next]);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    };
    el.addEventListener('keydown', onKeyDown);
    return () => el.removeEventListener('keydown', onKeyDown);
  }, [prev, next]);

  const slidePercent = 100 / SLIDES.length;

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="scroll-mt-24 relative overflow-hidden section-padding section-padding-x"
    >
      <div className="absolute inset-0 bg-surface-dark" aria-hidden />
      <div className="absolute inset-0 bg-linear-to-b from-primary-dark/30 via-transparent to-primary-dark/20" aria-hidden />
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" aria-hidden />
      <div className="absolute top-1/4 -right-40 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/4 -left-40 w-72 h-72 rounded-full bg-primary-light/10 blur-3xl pointer-events-none" aria-hidden />

      <div className="relative container mx-auto z-10">
        <h2 id="gallery-heading" className="section-title text-center text-white mb-6 sm:mb-8 md:mb-10">
          Gallery
        </h2>

        <div
          ref={carouselRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Gallery slideshow"
          tabIndex={0}
          className={`relative rounded-2xl overflow-hidden bg-white shadow-2xl outline-none ${focusClass}`}
        >
          <div
            className="relative w-full overflow-hidden bg-white"
            style={{ aspectRatio: '16/8', minHeight: 240 }}
          >
            {/* Gold star accents */}
            <div className="absolute inset-0 pointer-events-none z-1" aria-hidden>
              {[...Array(12)].map((_, i) => (
                <span
                  key={i}
                  className="absolute text-amber-400/30"
                  style={{
                    left: `${10 + (i * 7) % 80}%`,
                    top: `${15 + (i * 11) % 70}%`,
                    fontSize: `${0.5 + (i % 3) * 0.25}rem`,
                  }}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Flex track – sliding strip */}
            <div
              className="absolute inset-0 flex transition-transform duration-500 ease-out"
              style={{
                width: `${SLIDES.length * 100}%`,
                transform: `translateX(-${current * slidePercent}%)`,
              }}
            >
              {SLIDES.map((slide, i) => (
                <div
                  key={i}
                  className="relative shrink-0 h-full"
                  style={{ width: `${slidePercent}%` }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${i + 1} of ${SLIDES.length}: ${slide.alt}`}
                  aria-hidden={i !== current}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={prev}
              className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white transition-colors shadow-lg ${focusClass}`}
              aria-label="Previous slide"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={next}
              className={`absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white transition-colors shadow-lg ${focusClass}`}
              aria-label="Next slide"
            >
              <ChevronRight />
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className={`absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10 w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white transition-colors shadow-lg ${focusClass}`}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>

            <div
              role="group"
              aria-label="Slide navigation"
              className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center gap-2 sm:gap-2.5"
            >
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === current ? 'true' : undefined}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center p-2 ${focusClass} ${
                    i === current
                      ? 'w-3 h-3 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]'
                      : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80 border border-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
