import { motion } from "framer-motion";
import { Shield, Star, MessageCircle, Clock, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ac.jpg";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useEffect, useState } from "react";

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count}{suffix}</>;
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Técnico higienizando ar condicionado" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero opacity-90" />
      </div>

      <div className="container relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            {/* Social proof badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/40 rounded-full px-4 py-2 mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <span className="text-primary-foreground text-sm font-semibold">
                🔥 3 clientes agendaram hoje
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] max-w-2xl"
            >
              Seu ar condicionado está fazendo{" "}
              <span className="text-gradient-accent">você adoecer?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-5 text-primary-foreground/85 text-lg md:text-xl max-w-lg leading-relaxed"
            >
              Fungos, bactérias e ácaros se acumulam no seu aparelho. 
              <strong className="text-primary-foreground"> Agende agora</strong> e respire ar limpo em até 24h.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {[
                { icon: Clock, text: "Atendimento em até 24h" },
                { icon: Shield, text: "Garantia de 7 dias" },
                { icon: Users, text: "Técnicos certificados" },
              ].map((item) => (
                <span key={item.text} className="inline-flex items-center gap-1.5 text-primary-foreground/90 text-sm bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-primary-foreground/10">
                  <item.icon className="w-3.5 h-3.5 text-accent" />
                  {item.text}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-cta shadow-cta text-primary-foreground rounded-xl px-8 py-5 text-lg font-bold flex items-center justify-center gap-3 hover:scale-[1.03] transition-all duration-300 animate-pulse-slow"
              >
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
                  RÁPIDO
                </span>
                <MessageCircle className="w-6 h-6" fill="currentColor" />
                Agendar pelo WhatsApp
                <Zap className="w-4 h-4 opacity-70" />
              </a>
              <a
                href="#servicos"
                className="border-2 border-primary-foreground/30 text-primary-foreground rounded-xl px-8 py-5 text-lg font-semibold text-center hover:bg-primary-foreground/10 transition-colors"
              >
                Ver Serviços
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-4 text-primary-foreground/50 text-sm flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Resposta em menos de 5 minutos no WhatsApp
            </motion.p>
          </div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-8 border border-primary-foreground/15">
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-accent" fill="currentColor" />
                <Star className="w-5 h-5 text-accent" fill="currentColor" />
                <Star className="w-5 h-5 text-accent" fill="currentColor" />
                <Star className="w-5 h-5 text-accent" fill="currentColor" />
                <Star className="w-5 h-5 text-accent" fill="currentColor" />
                <span className="text-primary-foreground font-bold ml-2">4.9</span>
              </div>

              <div className="space-y-6">
                {[
                  { value: 300, suffix: "+", label: "Aparelhos higienizados" },
                  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
                  { value: 24, suffix: "h", label: "Tempo máximo de atendimento" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-extrabold text-accent">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-primary-foreground/10">
                <p className="text-primary-foreground/80 text-sm italic">
                  "Serviço excelente! Meu ar ficou como novo." 
                </p>
                <p className="text-primary-foreground/50 text-xs mt-1">— Camila R., Vila Mariana</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
