'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

const focusClass = 'focus-accent';

const SLIDES = [
  { src: 'https://thefabbashow.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl77qopcp%2Fproduction%2F34954395c5b1e2f3449cdd731e45ae17c2523a53-1578x984.jpg%3Fw%3D1200&w=1200&q=75', alt: 'Concert crowd and stage', title: 'Concert crowd and stage' },
  { src: 'https://thefabbashow.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl77qopcp%2Fproduction%2Fe204ecb37f27302a90cc0ce785bbb314012eccd-1728x914.jpg%3Fw%3D1200&w=1200&q=75', alt: 'Singer performing on stage', title: 'Singer performing on stage' },
  { src: 'https://thefabbashow.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl77qopcp%2Fproduction%2F730bdae1a54d55b8f620423024baf098f6db48a7-1750x1130.jpg%3Fw%3D1200&w=1200&q=75', alt: 'Stage lighting and performance', title: 'Stage lighting and performance' },
  { src: 'https://thefabbashow.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl77qopcp%2Fproduction%2Fe204ecb37f27302a90cc0ce785bbb314012eccd-1728x914.jpg%3Fw%3D1200&w=1200&q=75', alt: 'Band performing live', title: 'Band performing live' },
];

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
    <path d="M8 5v14l11-7z" />
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
  const slide = SLIDES[current];

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="scroll-mt-20 sm:scroll-mt-24 relative overflow-hidden section-padding section-padding-x pt-20 sm:pt-24 md:pt-34 pb-10 sm:pb-12 md:pb-16 mt-24"
    >
      <div className="absolute inset-0 bg-surface-dark" aria-hidden />
      <div className="absolute inset-0 bg-linear-to-b from-primary-dark/30 via-transparent to-primary-dark/20" aria-hidden />
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" aria-hidden />
      {/* Blue overlays – top left, middle, bottom left */}
      <div className="absolute -top-24 -left-32 w-80 h-80 rounded-full bg-primary/15 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-primary-light/10 blur-[100px] pointer-events-none" aria-hidden />
      <div className="absolute -bottom-24 -left-32 w-72 h-72 rounded-full bg-primary-dark/15 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute top-1/4 -right-40 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" aria-hidden />
      {/* Overlay behind the carousel */}
      <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,800px)] h-64 sm:h-72 rounded-3xl bg-linear-to-br from-primary/10 via-primary-light/8 to-primary-pale/15 blur-[50px] pointer-events-none" aria-hidden />

      <div className="relative container mx-auto container-wide z-10">
        {/* Top banner – styled to match gallery section */}
        <div className="mb-5 sm:mb-6 md:mb-12">
          <div className="relative h-36 sm:h-44 md:h-52 lg:h-60 rounded-xl sm:rounded-2xl overflow-hidden bg-white/[0.07] backdrop-blur-md border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <Image
              src={SLIDES[0].src}
              alt={SLIDES[0].alt}
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-surface-dark/90 via-primary-dark/50 to-transparent" aria-hidden />
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-400/50 to-transparent" aria-hidden />
            <div className="relative h-full flex items-center px-3 sm:px-5 md:px-8">
              <div className="max-w-xl space-y-0.5 sm:space-y-1">
                <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] text-amber-400">
                  Costumes · Lights · Moments
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white line-clamp-2 sm:line-clamp-none">
                  A closer look at the glitter, glamour, and crowd energy that make The fABBA Show unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-5 sm:mb-7 md:mb-8">
        
          <h2 id="gallery-heading" className="section-title text-amber-400 mb-2 sm:mb-2.5">
            Behind the Scenes
          </h2>
          <p className="section-lead text-white/70 max-w-2xl mx-auto">
            Glimpses from the stage—costumes, crowd, and the magic of live performance.
          </p>
        </div>
       
        <div className="relative">
          <div
            ref={carouselRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Gallery slideshow"
            tabIndex={0}
            className={`relative rounded-xl overflow-hidden bg-white outline-none ${focusClass} border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.06)]`}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-b-full bg-linear-to-r from-amber-400 via-amber-500 to-primary z-20" aria-hidden />

            <div
              className="relative w-full overflow-hidden bg-gray-900"
              style={{ aspectRatio: '16/9', minHeight: 160 }}
            >
              {/* Flex track – sliding strip */}
              <div
                className="absolute inset-0 flex transition-transform duration-500 ease-out"
                style={{
                  width: `${SLIDES.length * 100}%`,
                  transform: `translateX(-${current * slidePercent}%)`,
                }}
              >
                {SLIDES.map((s, i) => (
                  <div
                    key={i}
                    className="relative shrink-0 h-full"
                    style={{ width: `${slidePercent}%` }}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Slide ${i + 1} of ${SLIDES.length}: ${s.alt}`}
                    aria-hidden={i !== current}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 1200px"
                      priority={i === 0}
                    />
                    {/* Subtle gradient overlay at bottom for contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/40 to-transparent pointer-events-none" aria-hidden />
                  </div>
                ))}
              </div>

              {/* Prev / Next */}
              <button
                type="button"
                onClick={prev}
                className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white hover:text-amber-600 transition-all shadow-lg ${focusClass}`}
                aria-label="Previous slide"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={next}
                className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white hover:text-amber-600 transition-all shadow-lg ${focusClass}`}
                aria-label="Next slide"
              >
                <ChevronRight />
              </button>

              {/* Play / Pause */}
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                className={`absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10 w-10 h-10 sm:w-12 sm:h-12 min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white hover:text-amber-600 transition-all shadow-lg ${focusClass}`}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>

              {/* Dot indicators */}
              <div
                role="group"
                aria-label="Slide navigation"
                className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center gap-1 sm:gap-2"
              >
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === current ? 'true' : undefined}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all duration-300 min-w-[36px] min-h-[36px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center p-1.5 sm:p-2 ${focusClass} ${
                      i === current
                        ? 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]'
                        : 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white/50 hover:bg-white/80 border border-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Slide counter + caption */}
          <div
            className="mt-3 sm:mt-3.5 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 text-center"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="text-white/60 text-xs tabular-nums">
              {current + 1} of {SLIDES.length}
            </span>
            <span className="hidden sm:inline text-white/40" aria-hidden>·</span>
            <span className="text-white/70 text-xs sm:text-sm">{slide.title}</span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
