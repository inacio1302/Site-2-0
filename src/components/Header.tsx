import { Phone, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-40">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
            JI
          </div>
          <div>
            <h2 className="font-bold text-foreground text-sm tracking-wide">JICLIMATIZAÇÃO</h2>
            <p className="text-muted-foreground text-xs">Higienização & Manutenção de AC</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="tel:+5511949104621" className="hidden sm:flex items-center gap-1.5 text-sm text-foreground font-medium">
            <Phone className="w-4 h-4" />
            (11) 94910-4621
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cta text-primary-foreground rounded-lg px-4 py-2 text-sm font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" fill="currentColor" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
