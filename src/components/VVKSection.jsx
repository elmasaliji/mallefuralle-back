import React, { useState, useMemo } from 'react';
import { vorverkaufsstellen } from '@/data/mock';
import { Input } from '@/components/ui/input';
import { MapPin, Search, Store, Navigation } from 'lucide-react';

export const VVKSection = () => {
  const [searchPLZ, setSearchPLZ] = useState('');

  const filteredLocations = useMemo(() => {
    if (!searchPLZ.trim()) return vorverkaufsstellen;
    return vorverkaufsstellen.filter((loc) =>
      loc.plz.startsWith(searchPLZ.trim())
    );
  }, [searchPLZ]);

  return (
    <section
      id="vvk"
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden scroll-animate"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-48 md:w-96 h-48 md:h-96 bg-[#ff8100]/5 rounded-full blur-3xl animate-pulse stagger-item"></div>
        <div className="absolute bottom-1/4 left-0 w-40 md:w-80 h-40 md:h-80 bg-[#ffdb00]/5 rounded-full blur-3xl animate-pulse delay-700 stagger-item"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 relative">
          <div className="title-background-text hidden sm:block">TICKETS</div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#ff8100]/20 to-[#ffdb00]/20 rounded-full text-[#ff8100] text-xs md:text-sm font-semibold mb-3 md:mb-4 stagger-item">
              <Store className="w-3 h-3 md:w-4 md:h-4" />
              VORVERKAUFSSTELLEN
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-bebas tracking-wider stagger-item">
              VVK <span className="text-gradient-logo">STELLEN</span>
            </h2>

            <p className="text-gray-400 text-sm md:text-lg mt-3 md:mt-4 max-w-2xl mx-auto px-4 stagger-item">
              Finde deine nächste Vorverkaufsstelle – Tickets auch offline erhältlich!
            </p>
          </div>
        </div>

        {/* Search by PLZ */}
        <div className="max-w-xl mx-auto mb-10 md:mb-14 stagger-item">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              value={searchPLZ}
              onChange={(e) =>
                setSearchPLZ(e.target.value.replace(/\D/g, '').slice(0, 5))
              }
              placeholder="Postleitzahl eingeben (z.B. 07937)"
              className="pl-12 py-6 bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#ff8100] rounded-xl text-center text-lg"
              maxLength={5}
            />
          </div>

          {searchPLZ && (
            <p className="text-sm text-gray-400 mt-2 text-center">
              {filteredLocations.length} Ergebnis
              {filteredLocations.length !== 1 ? 'se' : ''} gefunden
            </p>
          )}
        </div>

        {/* VVK Locations Grid - 2 columns on md+ */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {filteredLocations.map((location, index) => (
              <div
                key={location.id}
                className="group relative p-6 md:p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff8100]/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#ff8100]/10 hover:to-[#ffdb00]/10 hover:transform hover:scale-[1.01] stagger-item"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#ff8100]/20 to-[#ffdb00]/20 group-hover:from-[#ff8100]/30 group-hover:to-[#ffdb00]/30 transition-colors">
                    <MapPin className="w-5 h-5 text-[#ff8100]" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-white group-hover:text-[#ffdb00] transition-colors text-base md:text-lg">
                      {location.name}
                    </h3>

                    <p className="text-sm md:text-base text-gray-400 mt-1 leading-relaxed">
                      {location.address}
                    </p>

                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#ff8100]/20 text-[#ff8100] text-xs font-medium">
                        PLZ: {location.plz}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Navigation Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Navigation className="w-4 h-4 text-[#ffdb00]" />
                </div>
              </div>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="text-center py-12 stagger-item">
              <div className="p-4 rounded-full bg-white/5 inline-flex mb-4">
                <MapPin className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-gray-400">
                Keine Vorverkaufsstelle in dieser PLZ gefunden.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Versuche eine andere Postleitzahl oder nutze unseren Online-Shop.
              </p>
            </div>
          )}
        </div>

        {/* Online Ticket CTA */}
        <div className="mt-12 md:mt-14 text-center stagger-item">
          <p className="text-gray-400 mb-4">
            Oder kaufe deine Tickets bequem online:
          </p>
          <a
            href="https://mixerei.ticket.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ff8100] to-[#ffdb00] text-[#141414] font-bold rounded-xl hover:shadow-lg hover:shadow-[#ff8100]/30 transition-all duration-300 hover:scale-105"
          >
            <Store className="w-5 h-5" />
            Zum Online-Ticketshop
          </a>
        </div>
      </div>
    </section>
  );
};

export default VVKSection;
