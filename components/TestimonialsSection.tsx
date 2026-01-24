'use client';

import Image from 'next/image';

const TESTIMONIALS = [
  {
    name: 'Sarah L.',
    meta: 'ABBA Fan · Long Beach, CA',
    quote: 'Best night ever! The energy was incredible and it truly felt like ABBA was back on stage. Already planning to see them again.',
    image: 'https://i.pravatar.cc/400?img=1',
    rating: 5,
  },
  {
    name: 'Mark D.',
    meta: 'Concert-goer · San Diego',
    quote: 'Incredible vocals and spot-on costumes. The cast had us dancing in the aisles from the first song. A must-see for any ABBA fan!',
    image: 'https://i.pravatar.cc/400?img=3',
    rating: 5,
  },
  {
    name: 'Emily R.',
    meta: 'First-time attendee',
    quote: "The most fun I've had in years. Even my friends who weren't ABBA fans loved it. Highly recommend—you won't regret it!",
    image: 'https://i.pravatar.cc/400?img=5',
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 justify-center" role="img" aria-label={`${count} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 sm:w-5 sm:h-5 ${i < count ? 'text-amber-500' : 'text-gray-200'}`}
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
    <article className="group relative flex flex-col h-full rounded-2xl border border-gray-100/80 bg-white/90 backdrop-blur-sm px-6 sm:px-8 py-8 sm:py-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08),0_0_0_1px_rgba(26,97,166,0.12)] hover:border-primary/20">
      {/* Accent bar – top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-full bg-linear-to-r from-amber-400 via-amber-500 to-primary" aria-hidden />

      <div className="relative flex flex-col items-center">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-white ring-offset-2 ring-offset-primary-pale/50 shadow-lg mb-5 sm:mb-6">
          <Image
            src={image}
            alt={`${name}, audience member`}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>

        <StarRating count={rating} />

        <blockquote className="mt-4 sm:mt-5 text-gray-700 text-sm sm:text-base leading-relaxed min-h-[4.5em]">
          <span className="text-primary/50">&ldquo;</span>
          {quote}
          <span className="text-primary/50">&rdquo;</span>
        </blockquote>

        <footer className="mt-5 sm:mt-6">
          <p className="text-base font-bold text-gray-900">{name}</p>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{meta}</p>
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary-light/8 blur-[80px] pointer-events-none" aria-hidden />
      <div className="absolute -bottom-20 -left-32 w-72 h-72 rounded-full bg-primary-pale/40 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" aria-hidden />
      {/* Overlay behind the cards */}
      <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,640px)] h-72 sm:h-80 rounded-3xl bg-linear-to-br from-primary/12 via-primary-light/10 to-primary-pale/20 blur-[60px] pointer-events-none" aria-hidden />

      <div className="relative container mx-auto container-wide z-10">
        <div className="text-center mb-8 sm:mb-16">
          <p className="section-label text-amber-500 mb-2 sm:mb-3">
            What audiences say
          </p>
          <h2 id="testimonials-heading" className="section-title text-gray-900 mb-3 sm:mb-4">
            Testimonials
          </h2>
          <p className="section-lead text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it—hear from fans who&apos;ve experienced the magic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {TESTIMONIALS.map((member) => (
            <TestimonialCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
