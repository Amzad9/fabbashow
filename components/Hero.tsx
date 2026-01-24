'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
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
      id="home"
      aria-label="Hero"
      className="relative z-30 h-screen w-full min-h-[420px] sm:min-h-[480px] md:min-h-[520px] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-primary overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          aria-label="The fABBA Show promo video"
          className="absolute inset-0 w-full h-full object-cover"
          src="/1275-145116912_small.mp4"
        >
          <source src="/1275-145116912_small.mp4" type="video/mp4" />
        </video>
        {/* <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/10 to-black/10" />
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-transparent" /> */}
      </div>

      <div
        className="absolute inset-0 z-1 bg-linear-to-tr from-black/90 via-black/50 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 h-full flex items-end  pb-20 md:items-end sm:items-center section-padding-x">
        <div className="container mx-auto text-left">
          <div className="max-w-4xl space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
          

            <h1 className="section-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">The Fabba show</span>
              <span className="block mt-1 sm:mt-2 bg-linear-to-r from-amber-500 via-amber-100 to-amber-500 bg-clip-text text-transparent">
                experience Abba
              </span>
              <span className="block mt-1 sm:mt-2">like never before!</span>
            </h1>

            <p className="section-lead max-w-xl text-white/90 text-sm sm:text-base md:text-lg lg:text-xl">
              Step into a time machine and witness abba live in their prime with the fabba show, the sensational stage
              production that&apos;s taking audiences by storm all across the united states!
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1 sm:pt-4">
              <a
                href="#events"
                className="focus-accent group relative bg-linear-to-r from-amber-400 to-amber-500 text-gray-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-amber-300 hover:to-amber-400 hover:shadow-[0_0_24px_rgba(251,191,36,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden text-center min-h-[48px] flex items-center justify-center"
              >
                <span className="relative z-10">Book Tickets Now</span>
                <div className="absolute inset-0 bg-linear-to-r from-amber-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
              </a>
              <a
                href="#about-show"
                className="focus-accent group bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-center min-h-[48px] flex items-center justify-center"
              >
                Watch Trailer
              </a>
            </div>

            <a
              href="#events"
              className="focus-accent absolute bottom-4 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all text-white duration-300 min-w-[44px] min-h-[44px]"
              aria-label="Scroll to events"
            >
              <svg className="w-6 h-6 text-gray-100 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
