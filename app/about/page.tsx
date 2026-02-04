'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background overflow-x-hidden">
      <Nav isScrolled={isScrolled} />
      <main id="main-content" tabIndex={-1}>
        {/* Banner */}
        <section className="relative pt-20 sm:pt-24 md:pt-36 pb-10 sm:pb-12 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-surface-dark" aria-hidden />
          <div className="absolute inset-0 bg-linear-to-b from-primary-dark/40 via-transparent to-surface-dark" aria-hidden />
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" aria-hidden />
          <div className="relative container mx-auto section-padding-x max-w-6xl">
            <div className="relative h-44 sm:h-52 md:h-60 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80"
                alt="The fABBA Show live on stage"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-dark via-surface-dark/60 to-transparent" aria-hidden />
              <div className="absolute inset-0 flex items-end px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
                <div>
                  <p className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-1">Our Story</p>
                  <h1 className="section-title text-white">About The fABBA Show</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About content */}
        <section className="relative py-8 sm:py-10 md:py-14 section-padding-x">
          <div className="absolute inset-0 bg-surface-dark" aria-hidden />
          <div className="absolute inset-0 bg-linear-to-b from-primary-dark/20 via-transparent to-primary-dark/20" aria-hidden />
          <div className="relative container mx-auto max-w-6xl">
            {/* Mobile/tablet: stacked full width. Desktop: side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-start">
              {/* Image: full width on mobile/tablet, col 5 on desktop */}
              <div className="w-full md:col-span-5 order-2 md:order-1">
                <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] min-h-[260px] sm:min-h-[300px] md:min-h-0 md:max-h-none max-md:max-h-[450px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 shadow-xl">
                  <Image
                    src="https://thefabbashow.com/_next/image?url=%2Fimgs%2Fhighlights%2Fhighlight-02.jpg&w=640&q=75"
                    alt="The fABBA Show performers on stage in ABBA-style costumes"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-surface-dark/40 via-transparent to-transparent" aria-hidden />
                </div>
              </div>

              {/* Content: full width on mobile/tablet, col 7 on desktop */}
              <div className="w-full md:col-span-7 order-1 md:order-2">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Recreating the Magic of ABBA</h2>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                      The fABBA Show is a sensational live tribute celebrating the music, style, and spirit of ABBA. 
                      We bring the energy of the 70s to stages across the United States—live vocals, authentic costumes, 
                      and the iconic hits that have defined generations. Whether you grew up with &ldquo;Dancing Queen&rdquo; 
                      or discovered ABBA through &ldquo;Mamma Mia!&rdquo;, our show is a chance to experience that magic live.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 mt-6 sm:mt-8 md:mt-10">The Experience</h2>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                      Every performance is a high-energy celebration. Our cast delivers note-perfect renditions of 
                      classics like &ldquo;Waterloo,&rdquo; &ldquo;Fernando,&rdquo; and &ldquo;Take a Chance on Me,&rdquo; 
                      while the audience sings along, dances, and becomes part of the show. With dazzling costumes, 
                      dynamic lighting, and a live band, we don&apos;t just play the songs—we bring the era back to life.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 mt-6 sm:mt-8 md:mt-10">Live Nationwide</h2>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                      From intimate theaters to large concert halls, The fABBA Show tours continuously across the country. 
                      We&apos;ve been featured by Broadway World, The New York Times, and Vogue, and our audiences 
                      consistently rate the experience 4.9/5. Join us at a venue near you and see why fans keep coming back.
                    </p>
                  </div>

                  <div className="pt-4 sm:pt-6 md:pt-8">
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                      <Link
                        href="/events"
                        className="focus-accent inline-flex min-h-[44px] items-center justify-center rounded-full bg-linear-to-r from-amber-400 to-amber-500 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-bold text-gray-900 shadow-lg hover:from-amber-300 hover:to-amber-400 transition-all"
                      >
                        View Tour Dates
                      </Link>
                      <Link
                        href="/"
                        className="focus-accent inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all"
                      >
                        Back to Home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
