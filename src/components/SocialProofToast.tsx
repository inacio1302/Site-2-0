import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MapPin, Check } from "lucide-react";

const notifications = [
  { name: "Maria", location: "Mooca", time: "há 12 min" },
  { name: "Carlos", location: "Vila Mariana", time: "há 25 min" },
  { name: "Juliana", location: "Tatuapé", time: "há 38 min" },
  { name: "Roberto", location: "Pinheiros", time: "há 1 hora" },
  { name: "Ana", location: "Itaquera", time: "há 1 hora" },
];

const SocialProofToast = () => {
  const [current, setCurrent] = useState(-1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showNext = () => {
      setCurrent((prev) => (prev + 1) % notifications.length);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    };

    const initialDelay = setTimeout(showNext, 5000);
    const interval = setInterval(showNext, 12000);
    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  const notification = current >= 0 ? notifications[current] : null;

  return (
    <AnimatePresence>
      {visible && notification && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-24 left-4 z-40 bg-card border border-border rounded-xl shadow-lg p-4 max-w-[280px]"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-secondary/15 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-secondary" />
            </div>
            <div>
              <p className="text-foreground text-sm font-semibold">
                {notification.name} agendou uma higienização
              </p>
              <p className="text-muted-foreground text-xs flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3" />
                {notification.location} • {notification.time}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofToast;
