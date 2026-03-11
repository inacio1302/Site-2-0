import { motion } from "framer-motion";
import { SprayCan, Wrench, Snowflake, Thermometer, Building2, FileText, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const services = [
  {
    icon: SprayCan,
    title: "Higienização completa",
    desc: "Limpeza de filtro, serpentina, bandeja e turbina. Eliminação de fungos, bactérias e odores.",
    tag: "Mais pedido",
    highlight: true,
  },
  {
    icon: Wrench,
    title: "Manutenção preventiva",
    desc: "Revisão geral, reaperto de conexões, verificação de dreno e inspeção de componentes.",
    tag: "Ideal para empresas",
  },
  {
    icon: Snowflake,
    title: "Instalação de splits",
    desc: "Instalações novas ou remanejamento seguindo boas práticas dos fabricantes.",
    tag: "Planejamento de pontos",
  },
  {
    icon: Thermometer,
    title: "Avaliação de gás",
    desc: "Verificação de funcionamento, orientação sobre recarga e possíveis vazamentos.",
    tag: "Diagnóstico rápido",
  },
  {
    icon: Building2,
    title: "Contratos empresariais",
    desc: "Planos de manutenção programada para escritórios, lojas e pequenos negócios.",
    tag: "Plano sob medida",
  },
  {
    icon: FileText,
    title: "Relatório de serviço",
    desc: "Checklist completo ao final com tudo que foi verificado e orientações de uso.",
    tag: "Transparência total",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-secondary font-bold text-sm tracking-widest">NOSSOS SERVIÇOS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            Tudo o que seu ar condicionado precisa.
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Atendimento residencial e comercial com foco em segurança, transparência e resultado.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-xl p-6 shadow-card border transition-all hover:shadow-lg ${
                service.highlight
                  ? "bg-secondary/5 border-secondary/30 ring-1 ring-secondary/20"
                  : "bg-card border-border hover:border-secondary/30"
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{service.desc}</p>
              <span className={`inline-block mt-3 text-xs font-semibold rounded-full px-3 py-1 ${
                service.highlight
                  ? "text-secondary-foreground bg-secondary"
                  : "text-secondary bg-secondary/10"
              }`}>
                {service.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href={getWhatsAppLink("Olá! Gostaria de saber mais sobre os serviços da JICLIMATIZAÇÃO!")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-cta shadow-cta text-primary-foreground rounded-xl px-8 py-4 text-lg font-bold hover:scale-[1.03] transition-transform"
          >
            <MessageCircle className="w-5 h-5" fill="currentColor" />
            Solicitar Serviço pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
