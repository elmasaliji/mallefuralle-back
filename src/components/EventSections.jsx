import React, { useState, useEffect } from 'react';
import { eventData, artists, newcomers } from '@/data/mock';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Music, Disc3, Sparkles } from 'lucide-react';

// ==========================
// TimeBlock Component
// ==========================
const TimeBlock = ({ value, label }) => (
  <div className="relative group stagger-item">
    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 min-w-[70px] sm:min-w-[80px] md:min-w-[120px] transition-all duration-300 group-hover:border-[#d40e7b]/50 group-hover:bg-gradient-to-br group-hover:from-[#d40e7b]/10 group-hover:to-[#9621ff]/10">
      <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white font-bebas tracking-wider">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-widest mt-1 md:mt-2">
        {label}
      </div>
    </div>
  </div>
);

// ==========================
// Countdown Section
// ==========================
export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventData.date.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="relative py-16 md:py-24 lg:py-32 overflow-hidden scroll-animate">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <span className="section-background-text text-7xl sm:text-9xl md:text-[12rem] font-bold text-white/10 select-none stagger-item">
          ...STARTED IN...
        </span>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 font-bebas tracking-wider stagger-item">
            DAS WARTEN HAT EIN ENDE
          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-3 md:mt-4 stagger-item">
            {eventData.date.toLocaleDateString('de-DE', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          <TimeBlock value={timeLeft.days} label="Tage" />
          <div className="hidden md:flex items-center text-4xl text-[#d40e7b] font-bold animate-pulse">:</div>
          <TimeBlock value={timeLeft.hours} label="Stunden" />
          <div className="hidden md:flex items-center text-4xl text-[#9621ff] font-bold animate-pulse">:</div>
          <TimeBlock value={timeLeft.minutes} label="Minuten" />
          <div className="hidden md:flex items-center text-4xl text-[#d40e7b] font-bold animate-pulse">:</div>
          <TimeBlock value={timeLeft.seconds} label="Sekunden" />
        </div>
      </div>
    </section>
  );
};

// ==========================
// Artist Flip Card (for carousel)
// ==========================
const ArtistFlipCard = ({ artist }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card h-[350px] sm:h-[400px] md:h-[450px] stagger-item select-none"
      role="button"
      tabIndex={0}
      onClick={() => setFlipped((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setFlipped((v) => !v);
      }}
    >
      <div className={`flip-card-inner ${flipped ? 'is-flipped' : ''}`}>
        <div className="flip-card-front bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-white/10">
          <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-bebas tracking-wider">
              {artist.name}
            </h3>
            <p className="text-sm text-[#d40e7b] font-medium">{artist.genre}</p>
          </div>

          <div className="absolute top-3 right-3 opacity-70">
            <Disc3 className="w-6 h-6 text-[#9621ff] animate-rotate-slow" />
          </div>
        </div>

        <div className="flip-card-back bg-gradient-to-br from-[#d40e7b] to-[#9621ff] border border-white/20 p-5 flex flex-col text-center">
          <div className="p-3 rounded-full bg-white/20 mb-4 mx-auto">
            <Music className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-white font-bebas tracking-wider mb-2">
            {artist.name}
          </h3>

          <p className="text-white/80 text-sm font-medium mb-3">{artist.genre}</p>

          <div className="flip-scroll flex-1">
            <p className="text-white/90 text-sm leading-relaxed">{artist.description}</p>
          </div>

          <div className="mt-4 pt-4 border-t border-white/20 w-full">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ffdb00]" />
              <span className="text-white/90 text-xs">{artist.funFact}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================
// Featured Artist
// ==========================
const FeaturedArtist = ({ artist }) => {
  if (!artist) return null;

  return (
    <div className="max-w-6xl mx-auto mb-10 md:mb-14">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#ffdb00]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#ff8100]/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-10 p-6 md:p-10">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-[#ff8100] to-[#ffdb00] text-black text-xs md:text-sm font-extrabold uppercase tracking-widest mb-4 stagger-item">
              <Sparkles className="w-4 h-4" />
              Featured • Moderatorin
            </div>

            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-bebas tracking-wider leading-none stagger-item">
              {artist.name}
            </h3>

            <p className="text-[#ffdb00] text-sm md:text-lg font-semibold mt-2 stagger-item">
              {artist.genre}
            </p>

            <p className="text-gray-200/90 text-sm md:text-lg leading-relaxed max-w-2xl mt-5 stagger-item">
              {artist.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 stagger-item">
              <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white text-sm">
                {artist.funFact}
              </div>
              <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#d40e7b]/25 to-[#9621ff]/25 border border-white/10 text-white text-sm">
                Tippe auf die Karten unten für alle Artists
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================
// LineUp Section
// ==========================
export const LineUpSection = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  const featuredArtist = artists.find((a) => a?.highlight);
  const carouselArtists = artists.filter((a) => !a?.highlight);

  const newcomerCount = Array.isArray(newcomers) ? newcomers.length : 0;
  const newcomerColsLg = newcomerCount === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    return () => api.off('select', onSelect);
  }, [api]);

  return (
    <section id="lineup" className="relative py-16 md:py-24 lg:py-32 overflow-hidden scroll-animate">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-48 md:w-96 h-48 md:h-96 bg-[#d40e7b]/5 rounded-full blur-3xl animate-pulse stagger-item"></div>
        <div className="absolute bottom-1/4 right-0 w-40 md:w-80 h-40 md:h-80 bg-[#9621ff]/5 rounded-full blur-3xl animate-pulse delay-700 stagger-item"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="text-center mb-10 md:mb-16 relative">
          <div className="title-background-text hidden sm:block">LINE UP</div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#d40e7b]/20 to-[#9621ff]/20 rounded-full text-[#d40e7b] text-xs md:text-sm font-semibold mb-3 md:mb-4 stagger-item">
            <Music className="w-3 h-3 md:w-4 md:h-4" /> UNSERE KÜNSTLER
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-bebas tracking-wider stagger-item">
            LINE UP <span className="text-gradient-malle">2026</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-lg mt-3 md:mt-4 max-w-2xl mx-auto px-4 stagger-item">
            Die besten DJs und Künstler auf einer Bühne - Tippe auf die Karten für mehr Infos!
          </p>
        </div>

        <FeaturedArtist artist={featuredArtist} />

        <div className="relative px-2 sm:px-8 md:px-12">
          <Carousel setApi={setApi} opts={{ align: 'center', loop: true }} className="w-full">
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
              {carouselArtists.map((artist) => (
                <CarouselItem
                  key={artist.id}
                  className="pl-2 sm:pl-3 md:pl-4 basis-[75%] xs:basis-[65%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <ArtistFlipCard artist={artist} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="bg-gradient-to-r from-[#d40e7b] to-[#9621ff] hover:from-[#ff8100] hover:to-[#ffdb00] text-white border-none -left-2 sm:-left-4 md:-left-6 w-8 h-8 sm:w-10 sm:h-10" />
            <CarouselNext className="bg-gradient-to-r from-[#d40e7b] to-[#9621ff] hover:from-[#ff8100] hover:to-[#ffdb00] text-white border-none -right-2 sm:-right-4 md:-right-6 w-8 h-8 sm:w-10 sm:h-10" />
          </Carousel>

          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 stagger-item">
            {carouselArtists.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? 'w-8 bg-gradient-to-r from-[#d40e7b] to-[#9621ff]'
                    : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* NEWCOMER-FÖRDERUNG */}
          <div className="mt-12 md:mt-16 max-w-5xl mx-auto text-left">
            <div className="relative p-6 md:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-3xl animate-fire-border opacity-25"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#ff8100]/20 to-[#ffdb00]/20 rounded-full text-[#ffdb00] text-xs md:text-sm font-semibold mb-4 stagger-item">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                  NEWCOMER-FÖRDERUNG
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-bebas tracking-wider mb-3 stagger-item">
                  Neue Sounds brauchen eine Bühne.
                </h3>

                <p className="text-gray-300 text-sm md:text-lg max-w-3xl stagger-item">
                  Wir unterstützen aufstrebende Künstlerinnen und Bands, die ihre Musik live präsentieren
                  und den nächsten Schritt gehen wollen.
                </p>

                <div className={`grid sm:grid-cols-2 ${newcomerColsLg} gap-4 md:gap-6 mt-8 place-items-center`}>
                  {newcomers.map((nc) => {
                    const isBig =
                      nc?.big === true ||
                      (typeof nc?.name === 'string' &&
                        (nc.name.toLowerCase().includes('willi') || nc.name.toLowerCase().includes('isa')));

                    return (
                      <div
                        key={nc.id}
                        className="w-full max-w-[420px] min-h-[320px] p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ffdb00]/50 transition-all duration-300 hover:-translate-y-1 stagger-item flex flex-col"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`rounded-xl overflow-hidden border border-white/10 bg-white/5 shrink-0 ${
                              isBig ? 'w-20 h-20 md:w-24 md:h-24' : 'w-14 h-14'
                            }`}
                          >
                            <img src={nc.image} alt={nc.name} className="w-full h-full object-cover" />
                          </div>

                          <div>
                            <h4 className="text-white font-semibold">{nc.name}</h4>
                            <p className="text-[#ffdb00] text-xs font-semibold uppercase tracking-wider">
                              {nc.genre}
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed mt-4 flex-1">
                          {nc.description}
                        </p>

                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="flex items-center gap-2 text-xs text-gray-300">
                            <Sparkles className="w-4 h-4 text-[#ffdb00]" />
                            <span>{nc.funFact}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
          {/* /NEWCOMER-FÖRDERUNG */}
        </div>
      </div>
    </section>
  );
};

export default LineUpSection;
