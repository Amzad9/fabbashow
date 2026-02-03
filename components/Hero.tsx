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
      className="relative z-30 w-full overflow-hidden bg-blue-200/20 pt-20 sm:pt-24 md:pt-20 pb-0"
    >
      <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-white/20 blur-3xl pointer-events-none rounded-l-2xl -z-10" aria-hidden />
      {/* Mobile/tablet: padded container. Desktop: same as before */}
      <div className="">
        <div className="container-fluid mx-auto relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-full bg-blue-300/30 blur-3xl pointer-events-none rounded-l-2xl -z-10" aria-hidden />
          {/* Mobile/tablet: 1 col stacked. Desktop (md+): 2 cols – unchanged */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 sm:gap-8 md:gap-0">
            {/* Text */}
            <div className="w-full md:col-span-6 space-y-3 sm:space-y-4 md:space-y-6 px-0 sm:px-2 md:px-6 lg:px-12 py-6 sm:py-8 md:py-12">
              <div className="md:ps-4 lg:ps-12 ps-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                <span className="block">Experience the Ultimate</span>
                <span className="block">
                  <span className="text-amber-500">ABBA</span> Tribute Celebration
                </span>
              </h1>

              <p className="max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                High-energy performance, live vocals, and audience participation in a spectacular
                70s pop concert.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <a
                  href="#events"
                  className="focus-accent inline-flex min-h-[48px] items-center justify-center rounded-full bg-linear-to-br from-primary-dark via-primary to-primary-light px-6 sm:px-8 py-3 text-sm sm:text-base font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #145088 0%, #1A61A6 50%, #5b9fd4 100%)',
                    boxShadow: '0 4px 12px rgba(26, 97, 166, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                  }}
                >
                  Book Tickets
                </a>
                <a
                  href="#"
                  className="focus-accent inline-flex min-h-[48px] items-center justify-center rounded-full bg-linear-to-br from-amber-400 via-amber-500 to-amber-600 px-6 sm:px-8 py-3 text-sm sm:text-base font-bold text-gray-900 shadow-lg transition-all hover:shadow-xl hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
                  }}
                >
                  Watch Trailer
                </a>
              </div>
              </div>
            </div>

            {/* Video: full width below md; desktop right col unchanged */}
            <div className="relative w-full md:col-span-6 h-[280px] sm:h-[360px] md:h-[600px] lg:h-[700px] min-h-[240px] md:min-h-0">
              <div className="absolute inset-0 rounded-tl-2xl rounded-bl-2xl md:rounded-tl-3xl md:rounded-bl-3xl overflow-hidden bg-black shadow-2xl">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="The fABBA Show promo video"
                  className="h-full w-full object-cover"
                  src="/1275-145116912_small.mp4"
                >
                  <source src="/1275-145116912_small.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
