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
      className="scroll-mt-24 relative overflow-visible bg-surface-dark z-20 section-padding section-padding-x"
    >
      {/* Blue overlays – top left, middle, bottom left */}
      <div className="absolute -top-24 -left-32 w-80 h-80 rounded-full bg-primary/15 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-primary-light/10 blur-[100px] pointer-events-none" aria-hidden />
      <div className="absolute -bottom-24 -left-32 w-72 h-72 rounded-full bg-primary-dark/15 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-light/30 to-transparent" aria-hidden />

      <div className="relative container mx-auto flex flex-col">
        <div className="relative w-full aspect-video mx-auto mb-8 sm:mb-12 md:mb-16 mt-0 md:-mt-[40vh]">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            aria-label="The fABBA Show promo video – performance highlights"
            title="The fABBA Show Promo"
            className="w-full h-full object-cover border-4 border-white/10 rounded-xl shadow-2xl"
            src="https://thefabbashow.com/vids/The-Fabba-Show-Promo.mp4"
          >
            <source src="https://thefabbashow.com/vids/The-Fabba-Show-Promo.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col items-center text-center container-narrow">
          <h2 id="about-show-heading" className="section-title text-white mb-4 sm:mb-6">
            Recreating the magic of{' '}
            <span className="text-amber-400">ABBA</span>
            {' '}for a new generation
          </h2>
          <p className="section-lead text-gray-400 leading-relaxed">
            A polished collage of performance, costume, and timeless hits—The fABBA Show brings the
            spirit of ABBA to life for a new generation. Experience the energy, the nostalgia, and
            the pure joy of their music like never before.
          </p>
        </div>
      </div>
    </section>
  );
}
