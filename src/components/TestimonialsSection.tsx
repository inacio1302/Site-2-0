import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const testimonials = [
  {
    name: "Camila R.",
    location: "Vila Mariana, SP",
    text: "Excelente serviço! O técnico foi super pontual e profissional. Meu ar parou de fazer barulho e o cheiro sumiu completamente.",
    rating: 5,
  },
  {
    name: "Roberto S.",
    location: "Mooca, SP",
    text: "Contratei para meu escritório, 4 aparelhos. Preço justo e serviço impecável. Já agendei a próxima manutenção.",
    rating: 5,
  },
  {
    name: "Ana Paula M.",
    location: "Tatuapé, SP",
    text: "Atendimento humanizado, explicou tudo o que estava fazendo. Recomendo demais! Nota 10.",
    rating: 5,
  },
  {
    name: "Marcos L.",
    location: "Pinheiros, SP",
    text: "Rápido, limpo e eficiente. O ar ficou gelando muito mais. Economia na conta de luz já no primeiro mês!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-secondary font-bold text-sm tracking-widest">DEPOIMENTOS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            Clientes reais, resultados reais.
          </h2>
          <p className="text-muted-foreground mt-2">
            Veja por que mais de 300 clientes confiam na JICLIMATIZAÇÃO.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-secondary/30 hover:shadow-lg transition-all"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-accent" fill="currentColor" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed">"{t.text}"</p>
              <div className="mt-4 pt-3 border-t border-border">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA after testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-foreground font-semibold mb-3">
            Junte-se a mais de 300 clientes satisfeitos
          </p>
          <a
            href={getWhatsAppLink("Olá! Vi os depoimentos e quero agendar uma higienização! 🧊")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-cta shadow-cta text-primary-foreground rounded-xl px-8 py-4 text-lg font-bold hover:scale-[1.03] transition-transform"
          >
            <MessageCircle className="w-5 h-5" fill="currentColor" />
            Quero o Mesmo Resultado
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
