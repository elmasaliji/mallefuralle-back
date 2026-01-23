import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Instagram, 
  Sparkles,
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import { impressumData, socialLinks } from '@/data/mock';

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 overflow-hidden scroll-animate">
      {/* Pozadine i animacije ostaju iste */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d40e7b]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#9621ff]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-20 right-20 animate-float">
          <div className="w-20 h-20 rounded-full border border-[#d40e7b]/30"></div>
        </div>
        <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-16 h-16 rounded-full border border-[#9621ff]/20"></div>
        </div>
        <div className="absolute top-1/2 right-10 animate-bounce-soft">
          <Sparkles className="w-8 h-8 text-[#d40e7b]/30" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header sekcija ostaje */}
        <div className="text-center mb-10 md:mb-16 relative">
          <div className="title-background-text hidden sm:block">KONTAKT</div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#d40e7b]/20 to-[#9621ff]/20 rounded-full text-[#d40e7b] text-xs md:text-sm font-semibold mb-3 md:mb-4 stagger-item">
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
              SCHREIB UNS
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-bebas tracking-wider stagger-item">
              KONTAKT
            </h2>
            <p className="text-gray-400 text-sm md:text-lg mt-3 md:mt-4 max-w-2xl mx-auto stagger-item">
              Hast du Fragen? Wir sind für dich da!
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Kontakt info i social */}
          <div className="space-y-6 md:space-y-8 stagger-item">
            <div className="space-y-4">
              {[{ icon: Mail, label: 'E-Mail', value: impressumData.email, href: `mailto:${impressumData.email}` },
                { icon: Phone, label: 'Telefon', value: impressumData.phone, href: `tel:${impressumData.phone}` },
                { icon: MapPin, label: 'Adresse', value: impressumData.address }]
                .map((item, i) => (
                <div key={i} className="group p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d40e7b]/50 transition-all duration-500 hover:translate-x-2 stagger-item">
                  <div className="flex items-center gap-4">
                    <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-[#d40e7b]/20 to-[#9621ff]/20">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#d40e7b]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.label}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-gray-400 hover:text-[#d40e7b] transition-colors text-sm md:text-base">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm md:text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-r from-[#d40e7b]/10 to-[#9621ff]/5 border border-[#d40e7b]/20 stagger-item">
              <h4 className="font-semibold text-white mb-4">Folge uns</h4>
              <div className="flex gap-4">
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 hover:scale-110 transition-all">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-[#d40e7b]" />
                </a>
                <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 hover:scale-110 transition-all">
                  <TikTokIcon className="w-5 h-5 text-gray-400 hover:text-[#9621ff]" />
                </a>
              </div>
            </div>
          </div>

          {/* Forma */}
          <div className="relative stagger-item">
            <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              {isSubmitted ? (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-2xl animate-bounce-soft">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white text-lg">Ihre Nachricht wurde gesendet!</h3>
                    <p className="text-green-100 text-sm">Wir melden uns so schnell wie möglich.</p>
                  </div>
                </div>
              ) : (
                // ✅ Netlify Forms: dodaj attribute netlify i name
                <form name="contact" netlify className="space-y-5" onSubmit={() => setIsSubmitted(true)}>
                  <Input name="name" placeholder="Name" required />
                  <Input name="email" type="email" placeholder="E-Mail" required />
                  <Input name="subject" placeholder="Betreff" required />
                  <Textarea name="message" rows={5} placeholder="Nachricht" required />
                  <Button type="submit" className="w-full malle-btn">
                    <Send className="w-4 h-4 mr-2" /> Nachricht senden
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
