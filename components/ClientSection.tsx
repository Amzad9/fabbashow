'use client';

import { useState } from 'react';
import Image from 'next/image';

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  const [error, setError] = useState(false);
  if (error) {
    return <span className="text-lg font-bold text-gray-600 tracking-tight">{name}</span>;
  }
  return (
    <div className="relative h-8 w-[120px] sm:h-9 sm:w-[150px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
      <Image
        src={logo}
        alt={`${name} partner logo`}
        fill
        className="object-contain object-center"
        sizes="(max-width: 640px) 130px, 150px"
        unoptimized
        onError={() => setError(true)}
      />
    </div>
  );
}

const PARTNERS = [
  { name: 'Ticketmaster', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-swtvpQ825Twr9l3lOcItRvkzCWppWgbDvQ&s' },
  { name: 'Broadway World', logo: 'https://play-lh.googleusercontent.com/edz4NK9AK9rExSfbs_V3vdzCG2zQ6YTsv9AM8MQINmcRnMJpSqwLRIZN6gQ-DzSDuf8=w600-h300-pc0xffffff-pd' },
  { name: 'The New York Times', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png' },
  { name: 'VOGUE', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/VOGUE_LOGO.svg' },
];

const FEATURES = [
  {
    title: 'Live Vocals & Comedy',
    description: 'High-energy performance, live vocals, and audience participation.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 013-3V4a3 3 0 00-3 3v2a3 3 0 013 3z"
      />
    ),
  },
  {
    title: 'Audience Participation',
    description: 'Get involved! Sing along, dance, and be part of the show.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  {
    title: 'Authentic Costumes',
    description: 'Authentic costumes showcasing classics & the golden era of ABBA.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    ),
  },
  {
    title: 'Iconic Hits Performed Live',
    description: 'Note-perfect renditions of your favourite ABBA classics.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
      />
    ),
  },
];

export default function ClientSection() {
  return (
    <section
      id="partners"
      className="relative z-40 scroll-mt-24 pt-0 pb-8 sm:pb-12 -mt-[5vh] overflow-hidden px-4 sm:px-6"
    >
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" aria-hidden />

      <div className="relative container mx-auto">
        <div className="bg-white/80 backdrop-blur-2xl rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 relative">
          <div className="absolute inset-0 bg-linear-to-br from-white/30 via-primary/20 to-white/30 blur-3xl pointer-events-none rounded-2xl" aria-hidden />

          <div className="relative flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {PARTNERS.map(({ name, logo }) => (
              <PartnerLogo key={name} name={name} logo={logo} />
            ))}
          </div>
          <div className="relative flex flex-col sm:flex-row items-center gap-2 sm:gap-4 shrink-0">
            <div className="flex items-center gap-0.5" role="img" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg sm:text-xl font-bold text-black">4.9/5</p>
              <p className="text-xs sm:text-sm text-gray-500">Average Review Rating</p>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 rounded-2xl bg-linear-to-br from-gray-100/10 to-primary-pale/30 p-4 sm:p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {FEATURES.map(({ title, description, icon }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/20 backdrop-blur-xl p-6 sm:p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-white/30 hover:border-white/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/30 via-primary/20 to-white/30 blur-3xl pointer-events-none rounded-2xl" aria-hidden />
                <svg className="relative w-12 h-12 sm:w-14 sm:h-14 text-primary/80 mb-4 sm:mb-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  {icon}
                </svg>
                <h3 className="relative text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{title}</h3>
                <p className="relative text-gray-600 text-sm leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
