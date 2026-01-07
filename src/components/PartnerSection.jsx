import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function PartnerSection() {
  return (
    <section id="partners" className="relative py-16 md:py-24 lg:py-32 overflow-hidden scroll-animate">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-48 md:w-96 h-48 md:h-96 bg-[#d40e7b]/5 rounded-full blur-3xl animate-pulse stagger-item"></div>
        <div className="absolute bottom-1/4 right-0 w-40 md:w-80 h-40 md:h-80 bg-[#9621ff]/5 rounded-full blur-3xl animate-pulse delay-700 stagger-item"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 relative">
          <div className="title-background-text hidden sm:block">PARTNERS</div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#d40e7b]/20 to-[#9621ff]/20 rounded-full text-[#d40e7b] text-xs md:text-sm font-semibold mb-3 md:mb-4 stagger-item">
            <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" />
            UNSERE PARTNER
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-bebas tracking-wider stagger-item">
            PARTNERS <span className="text-gradient-malle">2026</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-lg mt-3 md:mt-4 max-w-2xl mx-auto px-4 stagger-item">
            Danke an unsere Partner.
          </p>
        </div>

        {/* Logo tile (brighter + glow) */}
        <div className="flex items-center justify-center">
          <a
            href="https://de.safenow.app/"
            target="_blank"
            rel="noreferrer"
            className="group"
            aria-label="SafeNow"
          >
            <div className="relative">
              {/* glow behind */}
              <div className="absolute -inset-6 rounded-[32px] bg-white/10 blur-2xl opacity-70 group-hover:opacity-90 transition-opacity"></div>

              {/* tile */}
              <div className="relative px-8 py-6 md:px-12 md:py-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 shadow-2xl shadow-white/10">
                <img
                  src={`${process.env.PUBLIC_URL}/safenowlogo.svg`}
                  alt="SafeNow Logo"
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
