'use client';

import Image from 'next/image';

const TESTIMONIALS = [
  {
    name: 'Sarah L.',
    role: 'Lead Vocalist',
    quote: 'Best night ever! Feels like the real thing.',
    image: 'https://i.pravatar.cc/400?img=1',
  },
  {
    name: 'Mark D.',
    role: 'Guitar & Vocals',
    quote: 'Incredible energy, amazing vocals. A must-see!',
    image: 'https://i.pravatar.cc/400?img=3',
  },
  {
    name: 'Emily R.',
    role: 'Keys & Vocals',
    quote: "The most fun I've had in years. Highly recommend.",
    image: 'https://i.pravatar.cc/400?img=5',
  },
];

function TestimonialCard({ name, role, quote, image }: (typeof TESTIMONIALS)[number]) {
  return (
    <article className="group flex flex-col items-center text-center">
      <div className="relative mb-4 sm:mb-6">
        <div
          className="absolute -inset-1 rounded-full bg-linear-to-r from-amber-400 via-amber-500 to-amber-400 opacity-90 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-300"
          aria-hidden
        />
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full p-1 bg-linear-to-r from-amber-400 via-amber-500 to-amber-400 shadow-[0_0_24px_rgba(245,158,11,0.4)] group-hover:shadow-[0_0_32px_rgba(245,158,11,0.5)] transition-shadow duration-300">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200 ring-2 ring-white">
            <Image
              src={image}
              alt={`${name}, ${role}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 112px, 144px"
            />
          </div>
        </div>
      </div>
      <blockquote className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 max-w-xs">
        <span>&ldquo;{quote}&rdquo;</span>
      </blockquote>
      <footer className="text-sm font-semibold text-primary">
        <cite className="not-italic">— {name}</cite>
      </footer>
      <p className="text-gray-500 text-xs sm:text-sm mt-1">{role}</p>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 relative overflow-hidden section-padding section-padding-x"
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

      <div className="relative container mx-auto container-wide">
        <div className="text-center mb-10 sm:mb-16">
          <p className="section-label text-amber-500 mb-2 sm:mb-3">
            What audiences say
          </p>
          <h2 id="testimonials-heading" className="section-title text-gray-900 mb-3 sm:mb-4">
            Testimonials
          </h2>
          <p className="section-lead text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it—hear from fans and the cast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {TESTIMONIALS.map((member) => (
            <TestimonialCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
