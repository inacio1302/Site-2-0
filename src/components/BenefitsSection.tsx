import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const benefits = [
  "Eliminação de fungos, bactérias e ácaros",
  "Redução de ruídos e melhora na eficiência",
  "Economia de até 20% na conta de energia",
  "Vida útil prolongada do equipamento",
  "Prevenção de vazamentos e entupimentos",
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-bold text-sm tracking-widest">POR QUE HIGIENIZAR?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 leading-tight">
              Ar limpo, saúde e economia de energia.
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              A JICLIMATIZAÇÃO segue boas práticas e utiliza produtos adequados para cada tipo de equipamento.
            </p>

            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 bg-secondary/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-secondary" />
                  </span>
                  <span className="text-foreground text-sm font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href={getWhatsAppLink("Olá! Quero higienizar meu ar condicionado para economizar energia! 🧊")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-cta shadow-cta text-primary-foreground rounded-xl px-6 py-3.5 text-base font-bold hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="w-5 h-5" fill="currentColor" />
              Agendar Higienização
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-promo rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-primary-foreground mb-6">Plano de cuidado contínuo</h3>
            <p className="text-primary-foreground/70 text-sm mb-8">
              Planos de visitas programadas com lembrete automático para manter seu ar sempre em dia.
            </p>

            {[
              { value: "6 em 6", label: "Higienização recomendada para uso residencial." },
              { value: "3 em 3", label: "Intervalo ideal para ambientes comerciais." },
              { value: "+20%", label: "Economia média em energia com aparelho limpo." },
            ].map((stat) => (
              <div key={stat.value} className="mb-5">
                <span className="text-accent text-2xl font-extrabold">{stat.value}</span>
                <p className="text-primary-foreground/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
