'use client';

import Image from 'next/image';

const CAST = [
  {
    name: 'Andy Marshall',
    role: 'Lead Vocalist',
    tagline: 'Brings the magic to every show.',
    image: 'https://thefabbashow.com/imgs/avatars/andy-01.jpg',
  },
  {
    name: 'Marie-Claire Marshall',
    role: 'Guitar & Vocals',
    tagline: 'Iconic sound, unforgettable energy.',
    image: 'https://thefabbashow.com/imgs/avatars/mc-01.jpg',
  },
  {
    name: 'Julianne Ruck',
    role: 'Keys & Vocals',
    tagline: 'The heart of the performance.',
    image: 'https://thefabbashow.com/imgs/avatars/julie-01.jpg',
  },
  {
    name: 'Lars Midthun',
    role: 'Drums & Percussion',
    tagline: 'Keeps the rhythm that moves the crowd.',
    image: 'https://thefabbashow.com/imgs/avatars/lars-01.jpeg',
  },
];

function CastCard({ name, role, tagline, image, index }: (typeof CAST)[number] & { index: number }) {
  const id = `cast-${index}`;
  return (
    <article className="group group/card flex flex-col" aria-labelledby={id}>
      <div className="relative flex flex-col items-center">
        <div className="relative w-full max-w-[200px] sm:max-w-[220px] mx-auto mb-4 sm:mb-6">
          <div
            className="absolute -inset-2 rounded-full bg-linear-to-br from-amber-400 via-amber-500 to-amber-600 opacity-80 blur-xl group-hover/card:opacity-100 group-hover/card:blur-2xl group-hover/card:scale-105 transition-all duration-500"
            aria-hidden
          />
          <div className="relative aspect-square rounded-full overflow-hidden bg-gray-100 ring-4 ring-white ring-offset-4 ring-offset-primary-pale/50 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] group-hover/card:ring-amber-400/30 group-hover/card:shadow-[0_20px_48px_rgba(0,0,0,0.15),0_0_0_1px_rgba(245,158,11,0.2)] transition-all duration-500">
            <Image
              src={image}
              alt={`${name}, ${role}`}
              fill
              className="object-cover object-top group-hover/card:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 640px) 200px, 220px"
              priority
            />
          </div>
        </div>

        <div className="text-center space-y-1">
          <h3 id={id} className="text-lg sm:text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-amber-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">{role}</p>
          <p className="text-gray-500 text-sm mt-2 max-w-[240px] mx-auto leading-relaxed">
            {tagline}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function MeetTheCastSection() {
  return (
    <section
      id="cast"
      aria-labelledby="cast-heading"
      className="scroll-mt-20 sm:scroll-mt-24 relative overflow-hidden section-padding section-padding-x"
    >
      <div
        className="absolute inset-0 bg-linear-to-b from-primary-pale/40 via-white to-primary-pale/30"
        aria-hidden
      />
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden />

      <div className="relative container mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <p className="section-label text-amber-500 mb-2 sm:mb-3">
            The performers
          </p>
          <h2 id="cast-heading" className="section-title text-gray-900 mb-3 sm:mb-4">
            Meet the Cast
          </h2>
          <p className="section-lead text-gray-600 max-w-2xl mx-auto">
            The talented artists who bring the magic of ABBA to the stage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {CAST.map((member, i) => (
            <CastCard key={member.name} {...member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
