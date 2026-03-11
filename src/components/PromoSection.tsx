import { motion } from "framer-motion";
import { MessageCircle, Clock, Shield, Zap } from "lucide-react";
import { getWhatsAppPromoLink } from "@/lib/whatsapp";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 5, minutes: 47, seconds: 32 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex gap-2 mt-4">
      {[
        { value: pad(time.hours), label: "horas" },
        { value: pad(time.minutes), label: "min" },
        { value: pad(time.seconds), label: "seg" },
      ].map((unit) => (
        <div key={unit.label} className="bg-primary-foreground/10 rounded-lg px-3 py-2 text-center min-w-[60px]">
          <p className="text-2xl font-extrabold text-accent tabular-nums">{unit.value}</p>
          <p className="text-primary-foreground/50 text-[10px] uppercase tracking-wider">{unit.label}</p>
        </div>
      ))}
    </div>
  );
};

const PromoSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-promo rounded-2xl p-8 md:p-10 relative overflow-hidden border border-secondary/20"
        >
          {/* Urgency ribbon */}
          <div className="absolute top-6 -right-10 bg-urgency text-accent-foreground text-xs font-bold px-12 py-1.5 rotate-45">
            VAGAS LIMITADAS
          </div>

          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

          <span className="inline-flex items-center gap-1.5 text-accent text-sm font-bold tracking-widest">
            <Zap className="w-4 h-4" fill="currentColor" />
            OFERTA ESPECIAL
          </span>

          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mt-2">
            Higienização Split até 12.000 BTUs
          </h2>

          <p className="text-primary-foreground/70 mt-3">
            Atendimento residencial e pequenos comércios em São Paulo e região.
          </p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-primary-foreground/60 text-sm">R$</span>
            <span className="text-5xl font-extrabold text-primary-foreground">250</span>
            <span className="text-primary-foreground/50 line-through text-lg">R$ 280</span>
            <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full ml-2">
              -11% OFF
            </span>
          </div>

          <p className="text-primary-foreground/60 text-sm mt-2">
            Valor por unidade • Dinheiro ou PIX
          </p>

          {/* Countdown */}
          <div className="mt-4">
            <p className="text-primary-foreground/70 text-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              Oferta expira em:
            </p>
            <CountdownTimer />
          </div>

          <a
            href={getWhatsAppPromoLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full bg-cta shadow-cta text-primary-foreground rounded-xl px-6 py-5 text-lg font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform animate-pulse-slow relative"
          >
            <MessageCircle className="w-5 h-5" fill="currentColor" />
            Aproveitar Promoção pelo WhatsApp
          </a>

          <div className="mt-4 flex flex-wrap gap-3 justify-center">
            <span className="text-primary-foreground/60 text-xs flex items-center gap-1">
              <Shield className="w-3 h-3 text-secondary" /> Garantia 7 dias
            </span>
            <span className="text-primary-foreground/60 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3 text-secondary" /> Atendimento 24h
            </span>
          </div>

          <p className="text-accent text-xs mt-3 flex items-center justify-center gap-1.5 font-semibold">
            🟠 Apenas 3 vagas restantes para hoje
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoSection;
