'use client';

import { useEffect, useRef } from 'react';

export default function RecreatingMagicSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section
      id="about-show"
      aria-labelledby="about-show-heading"
      className="scroll-mt-20 sm:scroll-mt-24 relative bg-surface-dark z-30 section-padding section-padding-x"
    >
      {/* Blue overlays – top left, middle, bottom left */}
      <div className="absolute -top-24 -left-32 w-80 h-80 rounded-full bg-primary/15 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-primary-light/10 blur-[100px] pointer-events-none" aria-hidden />
      <div className="absolute -bottom-24 -left-32 w-72 h-72 rounded-full bg-primary-dark/15 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-light/30 to-transparent" aria-hidden />

      <div className="relative container mx-auto">
        <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-12 md:gap-6">
          {/* Left: video */}
          <div className="relative w-full max-w-xl mx-auto md:max-w-none md:mx-0 md:col-span-6">
            <div className="relative aspect-video min-h-[200px] sm:min-h-[240px] isolate z-50 rounded-xl border border-white/15 bg-black/40 shadow-xl shadow-black/60 overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                aria-label="The fABBA Show promo video – performance highlights"
                title="The fABBA Show Promo"
                className="h-full w-full object-cover"
                src="https://thefabbashow.com/vids/The-Fabba-Show-Promo.mp4"
              >
                <source src="https://thefabbashow.com/vids/The-Fabba-Show-Promo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Right: content */}
          <div className="container-narrow md:col-span-6 md:ml-auto md:text-left text-center space-y-2.5 sm:space-y-3 px-0 sm:px-2">
          <div className="md:ps-8 lg:ps-12 md:pe-4 lg:pe-8">
             <h2 id="about-show-heading" className="section-title text-white mb-0.5 sm:mb-1">
              Recreating the magic of <span className="text-amber-400">ABBA</span> for a new generation
            </h2>
            <p className="section-lead text-gray-300 leading-relaxed text-xs sm:text-[0.85rem]">
              A polished collage of performance, costume, and timeless hits—The fABBA Show brings the
              spirit of ABBA to life for a new generation. Experience the energy, the nostalgia, and
              the pure joy of their music like never before.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
