import { motion } from "framer-motion";
import { MessageCircle, Calendar, SprayCan, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Chame no WhatsApp",
    desc: "Envie uma mensagem, resposta em menos de 5 minutos.",
  },
  {
    icon: Calendar,
    number: "02",
    title: "Escolha o melhor dia",
    desc: "Agendamos no horário mais conveniente para você.",
  },
  {
    icon: SprayCan,
    number: "03",
    title: "Ar limpo e saudável",
    desc: "Em até 1 hora seu ar estará como novo.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-bold text-sm tracking-widest">SIMPLES E RÁPIDO</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            3 passos para ar limpo.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 border-2 border-secondary/30 flex items-center justify-center mb-4 relative z-10 bg-background">
                <step.icon className="w-7 h-7 text-secondary" />
              </div>
              <span className="text-accent font-extrabold text-sm">{step.number}</span>
              <h3 className="text-lg font-bold text-foreground mt-1">{step.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 max-w-[250px] mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-cta shadow-cta text-primary-foreground rounded-xl px-8 py-4 text-lg font-bold hover:scale-[1.03] transition-transform"
          >
            <MessageCircle className="w-5 h-5" fill="currentColor" />
            Começar Agora
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
