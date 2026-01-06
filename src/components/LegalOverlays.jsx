import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { impressumData, datenschutzData } from '@/data/mock';
import { Scale, Shield, Building2, Phone, Mail, User, FileText } from 'lucide-react';

export const ImpressumOverlay = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[85vh] bg-[#141414] border border-white/20 p-0">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#d40e7b]/20 to-[#9621ff]/10 p-6 border-b border-white/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d40e7b]/10 rounded-full blur-3xl"></div>

          <DialogHeader className="relative z-10">
            <DialogTitle className="text-3xl font-bold flex items-center gap-3 text-white font-bebas tracking-wider">
              <Scale className="w-8 h-8 text-[#d40e7b]" />
              IMPRESSUM
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Angaben gemäß § 5 TMG
            </DialogDescription>
          </DialogHeader>
        </div>

        <ScrollArea className="h-[60vh] p-6">
          <div className="space-y-6">
            {/* Company Info */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-[#d40e7b]">
                <Building2 className="w-5 h-5" />
                <h3 className="font-semibold">Unternehmen</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="font-semibold text-white text-lg">{impressumData.company}</p>
                <p>{impressumData.address}</p>
              </div>
            </div>

            {/* Contact */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-[#d40e7b]">
                <Phone className="w-5 h-5" />
                <h3 className="font-semibold">Kontakt</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  {impressumData.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  {impressumData.email}
                </p>
              </div>
            </div>

            {/* Responsible Person */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-[#d40e7b]">
                <User className="w-5 h-5" />
                <h3 className="font-semibold">Verantwortlich</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="text-gray-500">Geschäftsführer:</span> {impressumData.ceo}
                </p>
              </div>
            </div>

            {/* Register Info */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-[#d40e7b]">
                <FileText className="w-5 h-5" />
                <h3 className="font-semibold">Registereintrag</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p>{impressumData.register}</p>
                <p>
                  <span className="text-gray-500">USt-IdNr:</span> {impressumData.vatId}
                </p>
              </div>
            </div>

            {/* Additional Sections */}
            {impressumData.additionalSections.map((section, index) => (
              <div key={index} className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export const DatenschutzOverlay = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[85vh] bg-[#141414] border border-white/20 p-0">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#9621ff]/20 to-[#d40e7b]/10 p-6 border-b border-white/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#9621ff]/10 rounded-full blur-3xl"></div>

          <DialogHeader className="relative z-10">
            <DialogTitle className="text-3xl font-bold flex items-center gap-3 text-white font-bebas tracking-wider">
              <Shield className="w-8 h-8 text-[#9621ff]" />
              DATENSCHUTZ
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Zuletzt aktualisiert: {datenschutzData.lastUpdated}
            </DialogDescription>
          </DialogHeader>
        </div>

        <ScrollArea className="h-[60vh] p-6">
          <div className="space-y-6">
            {datenschutzData.sections.map((section, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3 hover:bg-white/[0.07] transition-colors"
              >
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                <p className="text-gray-400 leading-relaxed">{section.content}</p>
              </div>
            ))}

            {/* Additional Info */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-[#d40e7b]/10 to-[#9621ff]/10 border border-[#d40e7b]/30 space-y-3">
              <h3 className="text-lg font-semibold text-[#d40e7b]">Kontakt für Datenschutzanfragen</h3>
              <p className="text-gray-300">
                Bei Fragen zum Datenschutz können Sie uns jederzeit unter{' '}
                <a href={`mailto:${impressumData.email}`} className="text-[#d40e7b] hover:underline">
                  {impressumData.email}
                </a>{' '}
                kontaktieren.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export const AgbOverlay = ({ open, onClose, agbData }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[85vh] bg-[#141414] border border-white/20 p-0">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#ff8100]/20 to-[#ffdb00]/10 p-6 border-b border-white/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff8100]/10 rounded-full blur-3xl"></div>

          <DialogHeader className="relative z-10">
            <DialogTitle className="text-3xl font-bold text-white font-bebas tracking-wider">
              AGB
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Allgemeine Geschäftsbedingungen
            </DialogDescription>
          </DialogHeader>
        </div>

        <ScrollArea className="h-[60vh] p-6">
          <div className="space-y-6">
            {agbData.map((section, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3 hover:bg-white/[0.07] transition-colors"
              >
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>

                {/* IMPORTANT: preserve line breaks + spacing */}
                <div className="text-gray-400 leading-relaxed whitespace-pre-wrap break-words">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ImpressumOverlay;
