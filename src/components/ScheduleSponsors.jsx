import React from 'react';
import { schedule, shuttleService, faqData } from '@/data/mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import {
  Calendar,
  Clock,
  MapPin,
  Bus,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

// ==========================
// Schedule Section
// ==========================
export const ScheduleSection = () => {
  return (
    <section
      id="schedule"
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden scroll-animate"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 relative">
          <div className="title-background-text hidden sm:block">Zeitplan</div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#d40e7b]/20 to-[#9621ff]/20 rounded-full text-[#d40e7b] text-xs md:text-sm font-semibold mb-3 md:mb-4 stagger-item">
              <Calendar className="w-3 h-3 md:w-4 md:h-4" />
              ZEITPLAN
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-bebas tracking-wider stagger-item">
              Zeitplan
            </h2>
          </div>
        </div>

        {/* Wider like VVK */}
        <div className="max-w-6xl mx-auto stagger-item">
          <ScheduleDay data={schedule.tag1} />
        </div>
      </div>
    </section>
  );
};

const ScheduleDay = ({ data }) => {
  return (
    <div className="relative">
      <div className="text-center mb-8 stagger-item">
        <h3 className="text-2xl font-bold text-gradient-malle">{data.name}</h3>
      </div>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d40e7b] via-[#9621ff] to-transparent"></div>

        <div className="space-y-6 md:space-y-7">
          {data.events.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center gap-4 md:gap-10 stagger-item ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#d40e7b] to-[#9621ff] border-4 border-[#141414] z-10"></div>

              <div
                className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}
              >
                <div className="p-6 md:p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d40e7b]/50 hover:bg-gradient-to-br hover:from-[#d40e7b]/10 hover:to-[#9621ff]/10 transition-all duration-300 group">
                  <div
                    className={`flex items-center gap-3 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <Clock className="w-5 h-5 text-[#d40e7b]" />
                    <span className="text-xl font-bold text-gradient-malle">
                      {event.time} Uhr
                    </span>
                  </div>

                  <h4 className="text-lg md:text-xl font-semibold text-white mt-2">
                    {event.title}
                  </h4>
                  <p className="text-gray-400">{event.artist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================
// Shuttle Section
// ==========================
export const ShuttleSection = () => {
  return (
    <section
      id="shuttle"
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden scroll-animate"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Wider like VVK */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16 relative">
            <div className="title-background-text hidden sm:block">SHUTTLE</div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-400 text-sm font-semibold mb-4 stagger-item">
              <Bus className="w-4 h-4" />
              SHUTTLE SERVICE
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-bebas tracking-wider stagger-item">
              SHUTTLE <span className="text-gradient-malle">SERVICE</span>
            </h2>

            <p className="text-gray-400 mt-3 md:mt-4 stagger-item">
              Bequem zum Event und zurück – auch für Nachteulen!
            </p>
          </div>

          <div className="p-6 md:p-9 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 stagger-item">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-blue-400" />
                Hinfahrt
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">
                        Haltestelle
                      </th>
                      <th className="text-center py-3 px-4 text-gray-400 font-medium">
                        Fahrt 1
                      </th>
                      <th className="text-center py-3 px-4 text-gray-400 font-medium">
                        Fahrt 2
                      </th>
                      <th className="text-center py-3 px-4 text-gray-400 font-medium">
                        Fahrt 3
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {shuttleService.hinfahrt.map((stop, index) => (
                      <tr
                        key={index}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-blue-400" />
                            <span className="text-white">{stop.stop}</span>
                          </div>
                        </td>

                        {stop.times.map((time, i) => (
                          <td
                            key={i}
                            className="text-center py-3 px-4 text-gray-300 font-medium"
                          >
                            {time} Uhr
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-purple-400 rotate-180" />
                Rückfahrt
              </h3>
              <p className="text-gray-400">{shuttleService.rueckfahrt.info}</p>
              <p className="text-sm text-purple-400 mt-2">
                {shuttleService.rueckfahrt.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================
// FAQ Section
// ==========================
export const FAQSection = () => {
  return (
    <section
      id="faq"
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden scroll-animate"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 relative">
          <div className="title-background-text hidden sm:block">FAQ</div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#d40e7b]/20 to-[#9621ff]/20 rounded-full text-[#d40e7b] text-xs md:text-sm font-semibold mb-3 md:mb-4 stagger-item">
              <HelpCircle className="w-3 h-3 md:w-4 md:h-4" />
              HÄUFIGE FRAGEN
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-bebas tracking-wider stagger-item">
              FAQ
            </h2>

            <p className="text-gray-400 text-sm md:text-lg mt-3 md:mt-4 max-w-2xl mx-auto px-4 stagger-item">
              Hier findest du Antworten auf die häufigsten Fragen
            </p>
          </div>
        </div>

        {/* Wider like VVK */}
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl overflow-hidden px-4 md:px-6 transition-all duration-300 stagger-item"
              >
                {/* BIGGER QUESTION TEXT */}
                <AccordionTrigger className="py-4 md:py-5 text-left text-base md:text-lg font-semibold text-white hover:text-[#d40e7b] hover:no-underline">
                  <span className="flex items-start gap-3">
                    <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-r from-[#d40e7b]/20 to-[#9621ff]/20 flex items-center justify-center text-[#d40e7b] text-sm md:text-base font-bold">
                      {index + 1}
                    </span>
                    <span className="leading-snug">{item.question}</span>
                  </span>
                </AccordionTrigger>

                <AccordionContent className="pb-4 md:pb-5 text-gray-400 text-sm md:text-base leading-relaxed pl-9 md:pl-10">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 md:mt-16 text-center stagger-item">
          <p className="text-gray-400 mb-4">Noch Fragen?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d40e7b] to-[#9621ff] hover:from-[#ff8100] hover:to-[#ffdb00] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
          >
            Kontaktiere uns
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
