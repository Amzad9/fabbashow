'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

const LOGO_SRC = '/logo-h.webp';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  // { label: 'Meet the Cast', href: '#cast' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  // { label: 'Contact', href: '#contact' },
];

const focusClass = 'focus-accent';

export default function Nav({ isScrolled }: { isScrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300"
    >
      <div className="container mx-auto section-padding-x">
        <div className="flex items-center justify-between ">
          <Link
            href="/"
            className={`flex items-center gap-2 -m-2 p-2 rounded-lg ${focusClass}`}
            aria-label="The fABBA Show – home"
          >
            <div className="relative w-24 h-24 shrink-0">
              <Image
                src={LOGO_SRC}
                alt=""
                fill
                className="object-contain"
                sizes="192px"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1 sm:gap-2 lg:gap-6">
            {NAV_LINKS.map(({ label, href }) => {
              const isHashLink = href.startsWith('#');
              const Component = isHashLink ? 'a' : Link;
              return (
                <Component
                  key={label}
                  href={href}
                  className={`text-gray-900 hover:text-amber-500 transition-colors font-medium text-sm md:text-base px-2 sm:px-3 py-2 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center ${focusClass}`}
                >
                  {label}
                </Component>
              );
            })}
            <Link
              href="/events"
              className="focus-accent inline-flex min-h-[44px] sm:min-h-[48px] items-center justify-center rounded-full bg-linear-to-br from-amber-400 via-amber-500 to-amber-600 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-bold text-gray-900 shadow-lg transition-all hover:shadow-xl hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
              }}
            >
              Book Tickets
            </Link>
       
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={`md:hidden text-gray-900 p-2 min-w-[44px] min-h-[44px] rounded-lg ${focusClass}`}
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

      {mounted &&
        createPortal(
          <>
            {/* Backdrop – mobile only, full viewport */}
            <div
              aria-hidden
              onClick={() => setMenuOpen(false)}
              className={`md:hidden fixed inset-0 w-full min-h-svh bg-black/40 transition-opacity duration-300 ${
                menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
              style={{ zIndex: 9998 }}
            />
            {/* Right-side drawer – mobile only, full height */}
            <div
              id="nav-menu"
              aria-hidden={!menuOpen}
              className={`md:hidden fixed top-0 right-0 bottom-0 w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col pt-20 pb-8 px-4 transition-transform duration-300 ease-out ${
                menuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{ zIndex: 9999 }}
            >
              <div className="flex flex-col gap-1 flex-1 min-h-0 overflow-y-auto">
                {NAV_LINKS.map(({ label, href }) => {
                  const isHashLink = href.startsWith('#');
                  const Component = isHashLink ? 'a' : Link;
                  return (
                    <Component
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-gray-900 hover:text-amber-500 hover:bg-gray-100 transition-colors font-medium px-4 py-3 rounded-lg min-h-[44px] flex items-center ${focusClass}`}
                    >
                      {label}
                    </Component>
                  );
                })}
                <Link
                  href="/events"
                  onClick={() => setMenuOpen(false)}
                  className={`bg-linear-to-r from-amber-400 to-amber-500 text-gray-900 px-4 py-3 rounded-full font-semibold mt-2 min-h-[44px] flex items-center justify-center hover:from-amber-300 hover:to-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all ${focusClass}`}
                >
                  Book Tickets
                </Link>
              </div>
            </div>
          </>,
          document.body
        )}
    </nav>
  );
}
