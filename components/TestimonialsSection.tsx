'use client';

import Image from 'next/image';

const TESTIMONIALS = [
  {
    name: 'Sarah L.',
    meta: 'ABBA Fan · Long Beach, CA',
    quote: 'Best night ever! The energy was incredible and it truly felt like ABBA was back on stage. Already planning to see them again.',
  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&w=400&h=400',
    rating: 5,
  },
  {
    name: 'Mark D.',
    meta: 'Concert-goer · San Diego',
    quote: 'Incredible vocals and spot-on costumes. The cast had us dancing in the aisles from the first song. A must-see for any ABBA fan!',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&w=400&h=400',
    rating: 5,
  },
  {
    name: 'Emily R.',
    meta: 'First-time attendee',
    quote: "The most fun I've had in years. Even my friends who weren't ABBA fans loved it. Highly recommend—you won't regret it!",
  image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&w=400&h=400',
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 justify-center" role="img" aria-label={`${count} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i < count ? 'text-amber-500' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ name, meta, quote, image, rating }: (typeof TESTIMONIALS)[number]) {
  return (
    <article className="group relative flex flex-col h-full rounded-xl border border-gray-100/80 bg-white/90 backdrop-blur-sm px-4 sm:px-5 py-5 sm:py-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.07),0_0_0_1px_rgba(26,97,166,0.1)] hover:border-primary/20">
      {/* Accent bar – top */}

      <div className="relative flex flex-col items-center">
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 ring-white ring-offset-1 ring-offset-primary-pale/50 shadow-md mb-3 sm:mb-4">
          <Image
            src={image}
            alt={`${name}, audience member`}
            fill
            unoptimized
            className="object-cover"
            sizes="64px"
          />
        </div>

        <StarRating count={rating} />

        <blockquote className="mt-2.5 sm:mt-3 text-gray-700 text-xs sm:text-[0.8rem] leading-relaxed min-h-[3.5em]">
          <span className="text-primary/50">&ldquo;</span>
          {quote}
          <span className="text-primary/50">&rdquo;</span>
        </blockquote>

        <footer className="mt-3 sm:mt-3.5">
          <p className="text-sm font-bold text-gray-900">{name}</p>
          <p className="text-[0.7rem] sm:text-xs text-gray-500 mt-0.5">{meta}</p>
        </footer>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-20 sm:scroll-mt-24 relative overflow-hidden section-padding section-padding-x"
    >
      <div
        className="absolute inset-0 bg-linear-to-b from-primary-pale/40 via-white to-primary-pale/30"
        aria-hidden
      />
      {/* Blue overlays – top left, middle, bottom left */}
      <div className="absolute -top-20 -left-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full bg-primary-light/8 blur-[80px] pointer-events-none" aria-hidden />
      <div className="absolute -bottom-20 -left-32 w-72 h-72 rounded-full bg-primary-pale/40 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" aria-hidden />
      {/* Overlay behind the cards */}
      <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,640px)] h-72 sm:h-80 rounded-3xl bg-linear-to-br from-primary/12 via-primary-light/10 to-primary-pale/20 blur-[60px] pointer-events-none" aria-hidden />
      <div className="relative container mx-auto container-wide z-10">
        <div className="text-center mb-5 sm:mb-8">
          <h2 id="testimonials-heading" className="section-title text-amber-500 mb-2 sm:mb-2.5">
            What audiences say
          </h2>
          <p className="section-lead text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it—hear from fans who&apos;ve experienced the magic.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {TESTIMONIALS.map((member) => (
            <TestimonialCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
