import React, { useState, useEffect } from 'react';
import './App.css';
import { eventData, socialLinks, agbData } from './data/mock';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  Ticket,
  Music2,
  Home,
  MapPin,
  HelpCircle,
  MessageCircle,
  Instagram
} from 'lucide-react';

// Components
import TicketOverlay from './components/TicketOverlay';
import { ImpressumOverlay, DatenschutzOverlay, AgbOverlay } from './components/LegalOverlays';
import { CountdownSection, LineUpSection } from './components/EventSections';
import { ScheduleSection, FAQSection, ShuttleSection } from './components/ScheduleSponsors';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VVKSection } from './components/VVKSection';
import { MerchSection, InfoSection } from './components/InfoSections';

// TikTok Icon
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

// Scroll animation hook
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
            entry.target.classList.remove('scroll-hidden');

            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('scroll-visible');
                child.classList.remove('scroll-hidden');
              }, index * 120);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => {
      el.classList.add('scroll-hidden');
      observer.observe(el);
    });

    const staggerItems = document.querySelectorAll('.stagger-item');
    staggerItems.forEach((item) => item.classList.add('scroll-hidden'));

    return () => observer.disconnect();
  }, []);
};

// Navigation
const Navigation = ({ onOpenTickets }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.pageYOffset - 96;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'lineup', label: 'Line Up', icon: Music2 },
    { id: 'vvk', label: 'VVK', icon: MapPin },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'contact', label: 'Kontakt', icon: MessageCircle }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#141414]/95 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div
          className="flex items-center gap-2 md:gap-3 cursor-pointer h-16"
          onClick={() => scrollToSection('hero')}
        >
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="h-full w-auto object-contain" />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-gradient-logo font-bebas tracking-wider leading-none mt-[1px]">
            MALLE FÜR ALLE
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-[#d40e7b] transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#141414] backdrop-blur-l border-b border-white/10 py-6 animate-slide-in-up">
          <div className="container mx-auto px-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full flex items-center gap-3 p-4 rounded-xl bg-white/5 text-white hover:bg-gradient-to-r hover:from-[#d40e7b]/20 hover:to-[#9621ff]/20 transition-colors"
              >
                <link.icon className="w-5 h-5 text-[#d40e7b]" />
                {link.label}
              </button>
            ))}

            <Button
              onClick={() => {
                onOpenTickets();
                setMobileMenuOpen(false);
              }}
              className="w-full malle-btn py-4 text-lg font-bold rounded-xl mt-4"
            >
              <Ticket className="w-5 h-5 mr-2" />
              TICKETS KAUFEN
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Sticky Ticket Button
const StickyTicketButton = ({ onOpenTickets }) => (
  <button
    onClick={onOpenTickets}
    className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-2 px-3 py-6 bg-gradient-to-b from-[#d40e7b] to-[#9621ff] hover:from-[#ff8100] hover:to-[#ffdb00] text-white font-bold rounded-l-2xl shadow-2xl shadow-[#d40e7b]/30 transition-all duration-300 hover:pr-5 group animate-glow-pulse"
    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
  >
    <Ticket className="w-5 h-5 rotate-90 group-hover:rotate-[100deg] transition-transform" />
    <span className="text-sm uppercase tracking-widest font-bebas">Ticket Kaufen</span>
  </button>
);

// Hero Section
const HeroSection = ({ onOpenTickets }) => (
  <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
    <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-[#d40e7b]/20 to-[#9621ff]/20 backdrop-blur-sm rounded-full border border-[#d40e7b]/30 mb-6 md:mb-8 animate-bounce-soft">
          <span className="w-2 h-2 rounded-full bg-[#d40e7b] animate-pulse"></span>
          <span className="text-[#d40e7b] text-xs md:text-sm font-semibold uppercase tracking-wider">
            09. Mai 2026 • Seestern-Panoramabühne, Zeulenroda-Triebes
          </span>
        </div>

        <div className="flex justify-center mb-4 md:mb-6">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="w-64 md:w-96 lg:w-[500px] object-contain logo-animate" />
        </div>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-10 animate-slide-in-up px-4" style={{ animationDelay: '0.2s' }}>
          {eventData.tagline}
        </p>

        <div className="animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          <Button onClick={onOpenTickets} className="malle-btn px-6 py-5 md:px-10 md:py-7 text-base md:text-xl font-bold rounded-xl md:rounded-2xl animate-pulse-glow group">
            <Ticket className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:rotate-12 transition-transform" />
            TICKET KAUFEN
          </Button>
        </div>
      </div>
    </div>

    {/* VIDEO iz public foldera */}
    <div className="fixed inset-0 z-0 pointer-events-none">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
      </video>
    </div>

    {/* Background overlay */}
    <div className="fixed inset-0 z-10 pointer-events-none">
      <img src={`${process.env.PUBLIC_URL}/background.png`} alt="" className="w-full h-full object-cover opacity-75" />
    </div>
    <div className="noise-overlay"></div>
  </section>
);

function App() {
  const [ticketOverlayOpen, setTicketOverlayOpen] = useState(false);
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [datenschutzOpen, setDatenschutzOpen] = useState(false);
  const [agbOpen, setAgbOpen] = useState(false);

  useScrollAnimation();

  return (
    <div className="min-h-screen relative">
      <Navigation onOpenTickets={() => setTicketOverlayOpen(true)} />
      <StickyTicketButton onOpenTickets={() => setTicketOverlayOpen(true)} />

      <main className="relative z-20 overflow-x-hidden">
        <HeroSection onOpenTickets={() => setTicketOverlayOpen(true)} />
        <CountdownSection />
        <InfoSection />
        <LineUpSection />
        <ScheduleSection />
        <ShuttleSection />
        <VVKSection />
        <MerchSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer
        onOpenImpressum={() => setImpressumOpen(true)}
        onOpenDatenschutz={() => setDatenschutzOpen(true)}
        onOpenAGB={() => setAgbOpen(true)}
        onOpenTickets={() => setTicketOverlayOpen(true)}
      />

      <TicketOverlay open={ticketOverlayOpen} onClose={() => setTicketOverlayOpen(false)} />
      <ImpressumOverlay open={impressumOpen} onClose={() => setImpressumOpen(false)} />
      <DatenschutzOverlay open={datenschutzOpen} onClose={() => setDatenschutzOpen(false)} />
      <AgbOverlay open={agbOpen} onClose={() => setAgbOpen(false)} agbData={agbData} />
    </div>
  );
}

export default App;
