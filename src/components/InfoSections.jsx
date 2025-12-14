import React from 'react';
import { eventData, merchInfo } from '@/data/mock';
import {
  Palmtree,
  PartyPopper,
  ShoppingBag,
  Sparkles,
  Lightbulb,
  Sun
} from 'lucide-react';

// ==========================
// Info Section – About Event
// ==========================
export const InfoSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden scroll-animate">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-[#d40e7b]/5 rounded-full blur-3xl animate-pulse stagger-item"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 md:w-64 h-40 md:h-64 bg-[#9621ff]/5 rounded-full blur-3xl animate-pulse delay-500 stagger-item"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header (standard spacing) */}
          <div className="text-center mb-10 md:mb-16 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d40e7b]/20 to-[#9621ff]/20 rounded-full text-[#d40e7b] text-sm font-semibold mb-4 stagger-item">
              <Palmtree className="w-4 h-4" />
              MALLE FÜR ALLE
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-bebas tracking-wider stagger-item">
              Sonne, Sangria & <span className="text-gradient-malle">Spaßattacken!</span>
            </h2>
          </div>

          {/* Content Card */}
          <div className="relative p-6 md:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-3xl animate-fire-border opacity-30"></div>

            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 stagger-item">
                {eventData.description}
              </p>

              <p className="text-base md:text-lg text-gray-400 leading-relaxed stagger-item">
                {eventData.fullDescription}
              </p>

              {/* Feature Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-10 border-t border-white/10">
                <div className="flex flex-col items-center text-center p-4 stagger-item">
                  <div className="p-3 rounded-xl bg-[#d40e7b]/20 mb-3">
                    <Sun className="w-6 h-6 text-[#d40e7b]" />
                  </div>
                  <span className="text-sm text-gray-400">Sonnenschein-Modus</span>
                </div>

                <div className="flex flex-col items-center text-center p-4 stagger-item">
                  <div className="p-3 rounded-xl bg-[#9621ff]/20 mb-3">
                    <PartyPopper className="w-6 h-6 text-[#9621ff]" />
                  </div>
                  <span className="text-sm text-gray-400">Abgefahrene Spiele</span>
                </div>

                <div className="flex flex-col items-center text-center p-4 stagger-item">
                  <div className="p-3 rounded-xl bg-[#ff8100]/20 mb-3">
                    <Sparkles className="w-6 h-6 text-[#ff8100]" />
                  </div>
                  <span className="text-sm text-gray-400">Überraschungen</span>
                </div>

                <div className="flex flex-col items-center text-center p-4 stagger-item">
                  <div className="p-3 rounded-xl bg-[#ffdb00]/20 mb-3">
                    <Palmtree className="w-6 h-6 text-[#ffdb00]" />
                  </div>
                  <span className="text-sm text-gray-400">Mallorca-Vibes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================
// Merch Section – Party Shop
// ==========================
export const MerchSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden scroll-animate">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-48 md:w-80 h-48 md:h-80 bg-[#ff8100]/5 rounded-full blur-3xl animate-pulse stagger-item"></div>
        <div className="absolute bottom-1/4 left-0 w-40 md:w-72 h-40 md:h-72 bg-[#ffdb00]/5 rounded-full blur-3xl animate-pulse delay-700 stagger-item"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ff8100]/20 to-[#ffdb00]/20 rounded-full text-[#ff8100] text-sm font-semibold mb-4 stagger-item">
                <ShoppingBag className="w-4 h-4" />
                PARTY SHOP
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-bebas tracking-wider mb-4 stagger-item">
                {merchInfo.tagline.split(',')[0]}
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed mb-6 stagger-item">
                {merchInfo.description}
              </p>

              <p className="text-base text-gray-400 leading-relaxed mb-8 stagger-item">
                {merchInfo.fullDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {merchInfo.items.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-[#ff8100]/50 hover:bg-[#ff8100]/10 transition-colors cursor-default stagger-item"
                  >
                    <Lightbulb className="w-3 h-3 text-[#ffdb00]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative stagger-item">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#ff8100]/20 to-[#ffdb00]/10 border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="p-8 rounded-full bg-gradient-to-br from-[#ff8100] to-[#ffdb00] animate-pulse-glow">
                      <ShoppingBag className="w-16 h-16 text-[#141414]" />
                    </div>

                    <div className="absolute -top-8 -left-8 p-3 rounded-full bg-[#d40e7b]/30 animate-float">
                      <Sparkles className="w-6 h-6 text-[#d40e7b]" />
                    </div>
                    <div
                      className="absolute -bottom-6 -right-6 p-3 rounded-full bg-[#9621ff]/30 animate-float"
                      style={{ animationDelay: '0.5s' }}
                    >
                      <Lightbulb className="w-6 h-6 text-[#9621ff]" />
                    </div>
                    <div
                      className="absolute top-0 right-0 p-3 rounded-full bg-[#ffdb00]/30 animate-float"
                      style={{ animationDelay: '1s' }}
                    >
                      <PartyPopper className="w-6 h-6 text-[#ffdb00]" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-[#ff8100]/20"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border border-[#ffdb00]/20"></div>
              </div>

              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#ff8100] rounded-tl-xl"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#ffdb00] rounded-br-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
