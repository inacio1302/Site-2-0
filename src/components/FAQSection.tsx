import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Quanto tempo demora a higienização?",
    a: "Em média, 40 a 60 minutos por aparelho. O tempo pode variar dependendo do estado do equipamento.",
  },
  {
    q: "Preciso desligar o ar antes do técnico chegar?",
    a: "Sim, recomendamos desligar pelo menos 30 minutos antes para que o aparelho esteja em temperatura ambiente.",
  },
  {
    q: "A higienização faz sujeira na parede ou no chão?",
    a: "Não. Utilizamos plástico coletor e proteção completa. Todo o processo é limpo e seguro.",
  },
  {
    q: "Com que frequência devo higienizar?",
    a: "Para residências, a cada 6 meses. Para comércios com grande circulação, a cada 3 meses.",
  },
  {
    q: "Vocês atendem em qual região?",
    a: "Atendemos em toda São Paulo capital e região metropolitana.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-secondary font-bold text-sm tracking-widest">DÚVIDAS FREQUENTES</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            Perguntas comuns dos nossos clientes.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-foreground font-semibold text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
