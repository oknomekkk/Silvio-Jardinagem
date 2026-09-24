import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MSG, waLink } from "./whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    const timer = window.setTimeout(() => setShow(true), 6000);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink(MSG.fab)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar orçamento pelo WhatsApp"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.35 }}
          className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground transition-all duration-300 animate-breathe hover:w-auto hover:px-5 active:scale-95 sm:h-13"
        >
          <WhatsAppIcon className="h-6 w-6 shrink-0" />
          <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:ml-2.5 group-hover:max-w-[180px] group-hover:opacity-100">
            Solicitar orçamento
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
