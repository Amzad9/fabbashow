'use client';

export default function CTASection() {
  return (
    <section aria-labelledby="cta-heading" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-950 via-[#0c1222] to-gray-950" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" aria-hidden />
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-amber-400/5 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" aria-hidden />

      {/* Top golden line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent" aria-hidden />

      <div className="relative container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative rounded-2xl sm:rounded-3xl md:rounded-4xl p-px bg-linear-to-b from-amber-400/60 via-amber-500/40 to-amber-600/60 shadow-[0_0_60px_rgba(251,191,36,0.15),inset_0_0_60px_rgba(251,191,36,0.03)]">
            <div className="rounded-2xl sm:rounded-3xl md:rounded-4xl bg-gray-900/90 backdrop-blur-xl border border-white/5 px-6 py-12 sm:px-8 sm:py-16 md:px-14 md:py-20">
              <h2 id="cta-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-tight">
                Ready to experience ABBA live?
              </h2>
              <p className="text-amber-200/90 text-sm sm:text-base md:text-lg mb-8 sm:mb-10">
                Don&apos;t miss the party!
              </p>

              <a
                href="#events"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-8 py-3.5 sm:px-10 sm:py-4 md:px-14 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg uppercase tracking-widest text-gray-900 min-h-[48px] transition-all duration-300 hover:shadow-[0_0_50px_rgba(251,191,36,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #fde68a 0%, #f59e0b 35%, #d97706 65%, #b45309 100%)',
                  boxShadow: '0 0 0 1px rgba(251,191,36,0.3), 0 4px 20px rgba(0,0,0,0.3), 0 0 40px rgba(251,191,36,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
                }}
              >
                <span>Book your show now</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom golden line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent" aria-hidden />
    </section>
  );
}
