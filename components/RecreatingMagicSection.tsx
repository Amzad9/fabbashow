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
      className="scroll-mt-24 relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-visible bg-[#1A1A2E] z-20 px-4 sm:px-6"
    >
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

        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 id="about-show-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-sans font-bold text-white leading-tight mb-4 sm:mb-6">
            Recreating the magic of{' '}
            <span className="text-amber-400">ABBA</span>
            {' '}for a new generation
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            A polished collage of performance, costume, and timeless hits—The fABBA Show brings the
            spirit of ABBA to life for a new generation. Experience the energy, the nostalgia, and
            the pure joy of their music like never before.
          </p>
        </div>
      </div>
    </section>
  );
}
