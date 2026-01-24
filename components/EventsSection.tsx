'use client';

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
    <div className="flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shrink-0">
      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">{month}</span>
      <span className="text-xl font-black leading-none text-white tabular-nums">{day}</span>
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

const btnFocus =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark';

export default function EventsSection() {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="scroll-mt-24 pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-24 md:pb-80 overflow-hidden relative z-20 px-4 sm:px-6"
    >
      <div className="absolute inset-0 bg-linear-to-b from-primary-dark via-primary to-primary-dark" aria-hidden />
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
        <div className="absolute inset-0 bg-linear-to-t from-primary-dark via-primary-dark/90 to-transparent" />
      </div>

      <div className="relative container mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-10 sm:mb-16 gap-6 sm:gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-2 sm:mb-3">
              Live performances
            </p>
            <h2 id="events-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
              Upcoming Events
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl lg:max-w-none">
              Don&apos;t miss your chance to experience the magic live!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {EVENTS.map((event, index) => (
            <article
              key={`${event.venue}-${event.location}`}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/[0.07] backdrop-blur-md border border-white/15 hover:bg-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.35)]"
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

              <div className="relative p-4 sm:p-6 md:p-7 flex flex-col flex-1 z-10">
                <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <CalendarBadge date={event.date} />
                  <div className="min-w-0 flex flex-col justify-center">
                    <time className="text-white font-semibold text-sm md:text-base">
                      {event.date}
                    </time>
                    <p className="text-white/60 text-sm mt-0.5">
                      {event.time}
                      {event.doors && (
                        <span className="text-white/50"> · {event.doors}</span>
                      )}
                    </p>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                  {event.venue}
                </h3>
                <p className="flex items-center gap-2 text-white/70 text-sm mb-4 sm:mb-6">
                  <PinIcon aria-hidden />
                  <span>{event.location}</span>
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 sm:gap-4 flex-wrap">
                  <span
                    className={`text-xl sm:text-2xl font-black tabular-nums ${
                      event.accent === 'amber' ? 'text-amber-400' : 'text-primary-light'
                    }`}
                  >
                    {event.price}
                  </span>
                  <a
                    href="#"
                    className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-bold text-sm min-h-[44px] transition-all duration-300 relative overflow-hidden group ${btnFocus} ${
                      event.cta === 'Get Tickets'
                        ? 'bg-linear-to-r from-amber-400 to-amber-500 text-gray-900 hover:from-amber-300 hover:to-amber-400 hover:shadow-[0_0_24px_rgba(251,191,36,0.5)]'
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

        <div className="mt-10 sm:mt-16 relative">
          <div className="flex flex-col md:flex-row items-center justify-center p-4 sm:p-8">
            <div className="md:w-full text-center">
              <button
                type="button"
                aria-label="Get notified when new shows are announced"
                className={`inline-flex items-center justify-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors rounded-lg px-3 py-2.5 min-h-[44px] ${btnFocus} focus-visible:ring-offset-primary-dark`}
              >
                Get notified when new shows are announced
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
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