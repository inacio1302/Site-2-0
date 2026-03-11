import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-cta rounded-full pl-5 pr-6 py-4 shadow-float text-primary-foreground font-bold text-base hover:scale-110 transition-transform"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-cta animate-ping opacity-20" />
      
      {/* Notification dot */}
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-card animate-bounce" />
      
      <MessageCircle className="w-6 h-6 relative z-10" fill="currentColor" />
      <span className="hidden sm:inline relative z-10">Fale Conosco</span>
    </motion.a>
  );
};

export default WhatsAppFloat;
