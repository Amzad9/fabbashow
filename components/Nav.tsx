'use client';

import { useState } from 'react';
import Image from 'next/image';

const LOGO_SRC = 'https://thefabbashow.com/imgs/logos/logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  // { label: 'Meet the Cast', href: '#cast' },
  { label: 'About Us', href: '#about-show' },
  { label: 'Gallery', href: '#gallery' },
  // { label: 'Contact', href: '#contact' },
];

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black';

export default function Nav({ isScrolled }: { isScrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#home"
            className={`flex items-center gap-2 min-w-[44px] min-h-[44px] -m-2 p-2 rounded-lg ${focusRing}`}
            aria-label="The fABBA Show – home"
          >
            <div className="relative w-20 h-20 sm:w-12 sm:h-12 shrink-0">
              <Image
                src={LOGO_SRC}
                alt=""
                fill
                className="object-contain"
                sizes="168px"
                priority
              />
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1 sm:gap-2 lg:gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`text-white hover:text-amber-400 transition-colors font-medium px-3 py-2 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center ${focusRing}`}
              >
                {label}
              </a>
            ))}
            <a
              href="#events"
              className={`bg-linear-to-r from-amber-400 to-amber-500 text-gray-900 px-5 py-2.5 rounded-full font-semibold hover:from-amber-300 hover:to-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:scale-105 transition-all min-h-[44px] flex items-center ${focusRing}`}
            >
              Book Tickets
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={`md:hidden text-white p-2 min-w-[44px] min-h-[44px] rounded-lg ${focusRing}`}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Backdrop – mobile only */}
      <div
        aria-hidden
        onClick={() => setMenuOpen(false)}
        className={`md:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Right-side drawer – mobile only */}
      <div
        id="nav-menu"
        aria-hidden={!menuOpen}
        className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-black/95 backdrop-blur-md shadow-2xl z-50 flex flex-col pt-20 pb-8 px-4 transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-white hover:text-amber-400 hover:bg-white/10 transition-colors font-medium px-4 py-3 rounded-lg min-h-[44px] flex items-center ${focusRing}`}
            >
              {label}
            </a>
          ))}
          <a
            href="#events"
            onClick={() => setMenuOpen(false)}
            className={`bg-linear-to-r from-amber-400 to-amber-500 text-gray-900 px-4 py-3 rounded-full font-semibold mt-2 min-h-[44px] flex items-center justify-center hover:from-amber-300 hover:to-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all ${focusRing}`}
          >
            Book Tickets
          </a>
        </div>
      </div>
    </nav>
  );
}
