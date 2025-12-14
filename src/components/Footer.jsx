import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { socialLinks } from '@/data/mock';
import { 
  Mail, 
  Send, 
  Instagram, 
  Heart,
  ArrowUp,
  Music2
} from 'lucide-react';

// TikTok Icon
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const Footer = ({ onOpenImpressum, onOpenDatenschutz,onOpenAGB, onOpenTickets }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
           <div className="lg:col-span-1">
  <div className="flex items-center gap-3 mb-6">
    <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
    <span className="text-2xl font-bold text-gradient-logo font-bebas tracking-wider">
      MALLE FÜR ALLE
    </span>
  </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Das größte Party-Event des Jahres! Erlebe unvergessliche Momente mit den besten DJs und einer einzigartigen Atmosphäre.
            </p>
            {/* Social Links - Only Instagram & TikTok */}
            <div className="flex gap-3">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-[#d40e7b]/20 hover:to-[#9621ff]/20 border border-white/10 hover:border-[#d40e7b]/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400 hover:text-[#d40e7b]" />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-[#9621ff]/20 hover:to-[#d40e7b]/20 border border-white/10 hover:border-[#9621ff]/50 transition-all duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4 text-gray-400 hover:text-[#9621ff]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="text-gray-400 hover:text-[#d40e7b] transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('lineup')} 
                  className="text-gray-400 hover:text-[#d40e7b] transition-colors text-sm"
                >
                  Line Up
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('vvk')} 
                  className="text-gray-400 hover:text-[#d40e7b] transition-colors text-sm"
                >
                  VVK
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenTickets} 
                  className="text-gray-400 hover:text-[#d40e7b] transition-colors text-sm"
                >
                  Tickets
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-400 hover:text-[#d40e7b] transition-colors text-sm"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={onOpenImpressum}
                  className="text-gray-400 hover:text-[#d40e7b] transition-colors text-sm"
                >
                  Impressum
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenDatenschutz}
                  className="text-gray-400 hover:text-[#d40e7b] transition-colors text-sm"
                >
                  Datenschutz
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenAGB}
                  className="text-gray-400 hover:text-[#d40e7b] transition-colors text-sm"
                >
                  AGB
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Erhalte exklusive Updates und Early Bird Angebote!
            </p>
            {subscribed ? (
              <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-sm">
                ✓ Erfolgreich angemeldet!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Deine E-Mail"
                    className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#d40e7b]"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full malle-btn py-2 font-semibold rounded-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Anmelden
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © 2025 Malle für Alle. Made with <Heart className="w-4 h-4 text-[#d40e7b]" /> in Germany
            </p>
            <p className="text-gray-600 text-xs">
              Alle Preise inkl. MwSt.
            </p>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-gray-400 hover:text-[#d40e7b] transition-colors text-sm"
            >
              Nach oben
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#d40e7b]/20 group-hover:to-[#9621ff]/20 transition-colors">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
