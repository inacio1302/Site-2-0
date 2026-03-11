import { motion } from "framer-motion";
import { MessageCircle, Shield, Clock, ArrowRight, Phone } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const CTASection = () => {
  return (
    <section className="py-20 bg-promo relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container max-w-2xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-1.5 text-accent text-sm font-bold tracking-widest mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            ESTAMOS ONLINE AGORA
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground leading-tight">
            Não deixe para depois.
            <br />
            <span className="text-gradient-accent">Seu ar precisa de limpeza.</span>
          </h2>

          <p className="text-primary-foreground/70 mt-4 text-lg max-w-md mx-auto">
            Clique abaixo e fale direto com nosso técnico. Resposta garantida em menos de 5 minutos.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cta shadow-cta text-primary-foreground rounded-xl px-10 py-5 text-xl font-bold hover:scale-[1.03] transition-transform animate-pulse-slow"
            >
              <MessageCircle className="w-6 h-6" fill="currentColor" />
              Chamar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+5511949104621"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground rounded-xl px-8 py-5 text-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-secondary" /> Garantia de 7 dias
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-secondary" /> Atendimento em até 24h
            </span>
          </div>

          <p className="mt-4 text-primary-foreground/40 text-xs">
            ✓ Sem compromisso • ✓ Preço justo • ✓ Profissional certificado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
