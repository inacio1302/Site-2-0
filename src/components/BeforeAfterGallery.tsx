import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

/**
 * GALERIA ANTES E DEPOIS
 * Para trocar as imagens: substitua os arquivos em src/assets/
 *   - before-after-1.jpg
 *   - before-after-2.jpg
 *   - before-after-3.jpg
 * As imagens ideais são comparações lado a lado (antes | depois).
 */

const gallery = [
  { src: beforeAfter1, alt: "Antes e depois - Filtro do ar condicionado", caption: "Filtro higienizado" },
  { src: beforeAfter2, alt: "Antes e depois - Aparelho split", caption: "Split completo" },
  { src: beforeAfter3, alt: "Antes e depois - Turbina do ar condicionado", caption: "Turbina limpa" },
];

const BeforeAfterGallery = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-secondary font-bold text-sm tracking-widest">RESULTADOS REAIS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            Veja a diferença com seus próprios olhos.
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Confira o resultado do nosso trabalho. Cada higienização faz uma diferença enorme na qualidade do ar.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden shadow-card border border-border bg-background"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-destructive text-destructive-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                  ANTES
                </span>
                <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                  DEPOIS
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA after seeing results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Seu ar condicionado pode estar assim por dentro. Agende já a higienização!
          </p>
          <a
            href={getWhatsAppLink("Olá! Vi as fotos do antes e depois e quero agendar uma higienização! 🧊")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-cta shadow-cta text-primary-foreground rounded-xl px-8 py-4 text-lg font-bold hover:scale-[1.02] transition-transform"
          >
            <MessageCircle className="w-5 h-5" fill="currentColor" />
            Quero Meu Ar Assim Também
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
