import { Phone, MapPin, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-primary-foreground font-bold text-lg">JICLIMATIZAÇÃO</h3>
            <p className="text-primary-foreground/60 text-sm mt-1">
              Higienização & Manutenção de Ar Condicionado
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
            <a href="tel:+5511949104621" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4" /> (11) 94910-4621
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> São Paulo e região
            </span>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-primary-foreground/40 text-xs">
          © 2026 JICLIMATIZAÇÃO. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
