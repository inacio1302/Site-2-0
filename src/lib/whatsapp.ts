const WHATSAPP_NUMBER = "5511949104621";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vi o site da JICLIMATIZAÇÃO e gostaria de agendar uma higienização do meu ar condicionado. 🧊"
);

export const getWhatsAppLink = (customMessage?: string) => {
  const msg = customMessage ? encodeURIComponent(customMessage) : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
};

export const WHATSAPP_PROMO_MESSAGE = encodeURIComponent(
  "Olá! Quero aproveitar a PROMOÇÃO de higienização Split até 12.000 BTUs por R$250! 🔥"
);

export const getWhatsAppPromoLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PROMO_MESSAGE}`;
