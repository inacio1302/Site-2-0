const UrgencyBar = () => {
  return (
    <div className="bg-urgency overflow-hidden">
      <div className="animate-marquee whitespace-nowrap py-2.5 flex gap-12">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-accent-foreground font-semibold text-sm inline-flex items-center gap-2">
            🔥 Últimas vagas do dia • Higienização completa R$250 • Atendimento em até 24h • ⚡ Resposta em 5 min no WhatsApp
            &nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default UrgencyBar;
