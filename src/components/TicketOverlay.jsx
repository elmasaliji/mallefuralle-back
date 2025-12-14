import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { tickets, socialLinks } from '@/data/mock';
import { Ticket, Check, Sparkles, Zap, Crown, PartyPopper, ExternalLink, Info } from 'lucide-react';

export const TicketOverlay = ({ open, onClose }) => {
  const getTicketIcon = (name) => {
    switch(name) {
      case 'Economy Class': return <Zap className="w-6 h-6" />;
      case 'Business Class': return <Ticket className="w-6 h-6" />;
      case 'First Class': return <Crown className="w-6 h-6" />;
      default: return <Ticket className="w-6 h-6" />;
    }
  };

  const getTicketGradient = (name) => {
    switch(name) {
      case 'Economy Class': return 'from-[#d40e7b]/20 to-[#9621ff]/20';
      case 'Business Class': return 'from-[#ff8100]/20 to-[#ffdb00]/20';
      case 'First Class': return 'from-[#ffdb00]/20 to-[#ff8100]/20';
      default: return 'from-[#d40e7b]/20 to-[#9621ff]/20';
    }
  };

  const getTicketAccent = (name) => {
    switch(name) {
      case 'Economy Class': return '#d40e7b';
      case 'Business Class': return '#ff8100';
      case 'First Class': return '#ffdb00';
      default: return '#d40e7b';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-[#141414] border border-[#d40e7b]/30 p-0">
        {/* Header with animation */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#d40e7b]/20 to-[#9621ff]/10 p-6 border-b border-[#d40e7b]/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d40e7b]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#9621ff]/10 rounded-full blur-2xl animate-pulse delay-300"></div>
          
          <DialogHeader className="relative z-10">
            <DialogTitle className="text-3xl font-bold flex items-center gap-3 text-white font-bebas tracking-wider">
              <PartyPopper className="w-8 h-8 text-[#d40e7b] animate-bounce" />
              TICKETS
              <Sparkles className="w-6 h-6 text-[#ffdb00] animate-pulse" />
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-base">
              Sichere dir jetzt dein Ticket für das Event des Jahres!
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-6">
          {/* Ticket Cards */}
          <div className="grid gap-6">
            {tickets.map((ticket, index) => (
              <div
                key={ticket.id}
                className={`relative p-5 md:p-6 rounded-2xl bg-gradient-to-r ${getTicketGradient(ticket.name)} border border-white/10 hover:border-[${getTicketAccent(ticket.name)}]/50 transition-all duration-300 hover:scale-[1.01]`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {ticket.popular && (
                  <div className="absolute -top-3 right-4 px-4 py-1 bg-gradient-to-r from-[#ff8100] to-[#ffdb00] text-[#141414] text-xs font-bold rounded-full animate-pulse">
                    BELIEBT
                  </div>
                )}
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div 
                      className={`p-3 rounded-xl bg-gradient-to-br ${getTicketGradient(ticket.name)}`}
                      style={{ borderColor: getTicketAccent(ticket.name) }}
                    >
                      {getTicketIcon(ticket.name)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-xl font-bold text-white">{ticket.name}</h4>
                        <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">
                          {ticket.dateRange}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{ticket.fullDescription}</p>
                      
                      {/* Features */}
                      <div className="space-y-1.5 mb-3">
                        {ticket.features.map((feature, i) => (
                          <span key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: getTicketAccent(ticket.name) }} />
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Hints */}
                      {ticket.hints && (
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                            <Info className="w-3 h-3" />
                            Wichtige Hinweise:
                          </div>
                          <ul className="text-xs text-gray-500 space-y-1">
                            {ticket.hints.map((hint, i) => (
                              <li key={i}>• {hint}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center md:text-right md:min-w-[120px]">
                    {ticket.price > 0 ? (
                      <div className="text-3xl font-bold" style={{ color: getTicketAccent(ticket.name) }}>
                        {ticket.price.toFixed(2)}€
                      </div>
                    ) : (
                      <div className="text-2xl font-bold" style={{ color: getTicketAccent(ticket.name) }}>
                        {ticket.priceText}
                      </div>
                    )}
                    <p className="text-xs text-gray-500">inkl. MwSt.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price Notice */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
            <p className="text-sm text-gray-400">
              <strong className="text-white">Alle Preise inkl. MwSt. zzgl. VVK Gebühren</strong>
            </p>
          </div>

          {/* CTA Button - Link to external ticket shop */}
          <a
            href={socialLinks.ticketShop}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              className="w-full malle-btn py-6 text-lg font-bold rounded-xl group"
            >
              <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              JETZT TICKETS KAUFEN
              <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
            </Button>
          </a>

          <p className="text-center text-xs text-gray-500">
            Du wirst zu unserem Ticket-Partner weitergeleitet
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TicketOverlay;
