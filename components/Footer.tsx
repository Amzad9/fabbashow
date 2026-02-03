'use client';

import Image from 'next/image';

const LOGO_SRC = 'https://thefabbashow.com/imgs/logos/logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Tour Dates', href: '/events' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '#contact' },
];

const focusClass = 'focus-accent';

const SOCIAL = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 sm:scroll-mt-24 relative overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 bg-surface-dark" aria-hidden />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/20 to-transparent" aria-hidden />
      {/* Blue overlays – top left, middle, bottom left */}
      <div className="absolute -top-24 -left-32 w-80 h-80 rounded-full bg-primary/12 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-light/8 blur-[100px] pointer-events-none" aria-hidden />
      <div className="absolute -bottom-24 -left-32 w-72 h-72 rounded-full bg-primary-dark/12 blur-3xl pointer-events-none" aria-hidden />

      <div className="relative container mx-auto section-padding-x pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10">
        <div className="rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 border-b-0 px-4 sm:px-6 md:px-8 lg:px-10 pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 md:pb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <a
              href="/"
              className={`flex items-center gap-2 sm:gap-3 self-start lg:flex-shrink-0 ${focusClass} rounded-lg -m-1 p-1 min-h-[44px]`}
              aria-label="The fABBA Show – home"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 shrink-0">
                <Image
                  src={LOGO_SRC}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 56px, (max-width: 768px) 56px, 64px"
                />
              </div>
           
            </a>

            <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className={`relative inline-flex items-center text-gray-300 hover:text-white font-medium transition-colors py-2 min-h-[44px] rounded-lg -m-1 px-1 group ${focusClass}`}
                >
                  {label}
                  <span className="absolute bottom-1 left-1 right-1 block w-[calc(100%-8px)] h-0.5 bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              {SOCIAL.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`text-gray-400 hover:text-amber-400 transition-colors p-2.5 rounded-lg hover:bg-white/5 min-w-[44px] min-h-[44px] flex items-center justify-center ${focusClass}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-4 sm:py-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} The fABBA Show. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
