'use client';

import Image from 'next/image';

const EVENTS = [
  {
    date: 'Saturday, February 7th',
    time: '8:00 PM',
    doors: 'Doors 6:00 PM',
    location: 'Long Beach, CA',
    venue: 'The Gaslamp',
    price: '$28.54',
    cta: 'Get Tickets',
    accent: 'amber' as const,
  },
  {
    date: 'Friday, May 8th',
    time: 'TBA',
    doors: null,
    location: 'Palmdale, CA',
    venue: 'Palmdale Playhouse',
    price: 'TBA',
    cta: 'View Details',
    accent: 'primary' as const,
  },
  {
    date: 'Saturday, May 9th',
    time: 'TBA',
    doors: null,
    location: 'Huntington Beach, CA',
    venue: 'Biergarten @ Old World HB',
    price: 'TBA',
    cta: 'View Details',
    accent: 'amber' as const,
  },
  {
    date: 'Sunday, June 15th',
    time: '7:30 PM',
    doors: 'Doors 6:00 PM',
    location: 'San Diego, CA',
    venue: 'House of Blues',
    price: '$35.00',
    cta: 'Get Tickets',
    accent: 'primary' as const,
  },
];

function CalendarBadge({ date }: { date: string }) {
  const match = date.match(/(\w+), (\w+) (\d+)(?:st|nd|rd|th)/);
  const day = match ? match[3] : '—';
  const month = match ? match[2].slice(0, 3) : '—';
  return (
    <div className="flex flex-col items-center justify-center w-11 h-11 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shrink-0">
      <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300">{month}</span>
      <span className="text-base font-black leading-none text-white tabular-nums">{day}</span>
    </div>
  );
}

const PinIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg className="w-4 h-4 shrink-0 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const focusClass = 'focus-accent';

export default function EventsSection() {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="scroll-mt-20 sm:scroll-mt-24 pt-24 sm:pt-24 md:pt-36 pb-8 sm:pb-10 md:pb-12 overflow-hidden relative z-20 section-padding-x"
    >
      <div className="absolute inset-0 bg-surface-dark" aria-hidden />
      <div className="absolute inset-0 bg-linear-to-b from-primary-dark/30 via-transparent to-primary-dark/20" aria-hidden />
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" aria-hidden />
      <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/3 -left-48 w-80 h-80 rounded-full bg-primary-light/10 blur-3xl pointer-events-none" aria-hidden />
      
      {/* Background Concert Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-surface-dark via-surface-dark/90 to-transparent" />
      </div>

      <div className="relative container mx-auto z-10">
        {/* Top banner image */}
        <div className="mb-6 sm:mb-8">
          <div className="relative h-36 sm:h-44 md:h-52 lg:h-60 rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 shadow-[0_18px_45px_rgba(0,0,0,0.5)]">
            <Image
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80"
              alt="The fABBA Show performing live on stage with audience"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" aria-hidden />
            <div className="relative h-full flex items-center px-3 sm:px-5 md:px-8">
              <div className="max-w-xl space-y-0.5 sm:space-y-1">
                <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] text-amber-300">
                  Live nationwide
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white line-clamp-2 sm:line-clamp-none">
                  Join The fABBA Show on tour for an unforgettable 70s pop celebration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-5">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="section-label text-amber-400 mb-1.5 sm:mb-2">
              Live performances
            </p>
            <h2 id="events-heading" className="section-title text-white mb-2 sm:mb-2.5">
              Upcoming Events
            </h2>
            <p className="section-lead text-white/70 max-w-2xl lg:max-w-none">
              Don&apos;t miss your chance to experience the magic live!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {EVENTS.map((event, index) => (
            <article
              key={`${event.venue}-${event.location}`}
              className="group relative flex flex-col rounded-xl overflow-hidden bg-white/[0.07] backdrop-blur-md border border-white/15 hover:bg-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)]"
            >
              {/* Event Image Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                style={{
                  backgroundImage: `url(${index % 2 === 0 ? 
                    'https://thefabbashow.com/_next/image?url=%2Fimgs%2Fhighlights%2Fhighlight-02.jpg&w=640&q=75' :
                    'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=50'
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0  bg-linear-to-br from-white/30 via-primary/20 to-white/30 blur-3xl" />
              </div>

              {/* Blur overlay – left side, on hover */}
              <div
                className="absolute left-0 top-0 bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-1 backdrop-blur-md bg-primary-dark/20"
                aria-hidden
              />

              <div className="relative p-3 sm:p-4 md:p-5 flex flex-col flex-1 z-10">
                <div className="flex gap-2.5 sm:gap-3 mb-3 sm:mb-3.5">
                  <CalendarBadge date={event.date} />
                  <div className="min-w-0 flex flex-col justify-center">
                    <time className="text-white font-semibold text-xs sm:text-sm">
                      {event.date}
                    </time>
                    <p className="text-white/60 text-xs mt-0.5">
                      {event.time}
                      {event.doors && (
                        <span className="text-white/50"> · {event.doors}</span>
                      )}
                    </p>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 leading-tight">
                  {event.venue}
                </h3>
                <p className="flex items-center gap-1.5 text-white/70 text-xs mb-3 sm:mb-4">
                  <PinIcon aria-hidden />
                  <span>{event.location}</span>
                </p>

                <div className="mt-auto flex items-center justify-between gap-2.5 sm:gap-3 flex-wrap">
                  <span
                    className={`text-base sm:text-lg font-black tabular-nums ${
                      event.accent === 'amber' ? 'text-amber-400' : 'text-primary-light'
                    }`}
                  >
                    {event.price}
                  </span>
                  <a
                    href="#"
                    className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full font-bold text-xs min-h-[40px] transition-all duration-300 relative overflow-hidden group ${focusClass} ${
                      event.cta === 'Get Tickets'
                        ? 'bg-linear-to-r from-amber-400 to-amber-500 text-gray-900 hover:from-amber-300 hover:to-amber-400 hover:shadow-[0_0_16px_rgba(251,191,36,0.4)]'
                        : 'bg-white/15 text-white border border-white/25 hover:bg-white/25 hover:border-white/40'
                    }`}
                  >
                    <span className="relative z-10">{event.cta}</span>
                    <ArrowIcon />
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-center p-3 sm:p-4">
            <div className="w-full md:w-auto text-center">
              <button
                type="button"
                aria-label="Get notified when new shows are announced"
                className={`inline-flex flex-wrap items-center justify-center gap-1.5 text-amber-400 font-semibold hover:text-amber-300 transition-colors rounded-lg px-2.5 py-2 min-h-[40px] text-xs sm:text-sm max-w-full ${focusClass}`}
              >
                <span>Get notified when new shows are announced</span>
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}