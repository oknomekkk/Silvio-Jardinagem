import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { MSG, waLink } from "./whatsapp";
import gramado from "@/assets/gramado-piscina.jpg.asset.json";

/**
 * Foto em largura total usada como transição cinematográfica entre seções,
 * com parallax muito discreto.
 */
export function PhotoBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative py-6 sm:py-10">
      <motion.div
        initial={{ opacity: 0, clipPath: "inset(14% 0 14% 0 round 32px)" }}
        whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0 round 32px)" }}
        viewport={{ once: true, margin: "-14%" }}
        transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative mx-auto h-[54vh] max-w-6xl overflow-hidden rounded-[32px] sm:h-[64vh] surface-lift"
      >
        <motion.img
          src={gramado.url}
          alt="Gramado aparado ao lado de piscina com jardim projetado"
          loading="lazy"
          width={1280}
          height={854}
          style={reduce ? {} : { y }}
          className="absolute inset-0 h-[116%] w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
          <span className="rounded-2xl px-4 py-2.5 text-xs font-medium text-ink-foreground glass-dark">
            Gramado e áreas verdes • Barretos e região
          </span>
          <a
            href={waLink(MSG.galeria)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-3 text-[0.85rem] font-semibold text-accent-foreground transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Quero o meu assim
          </a>
        </div>
      </motion.div>
    </section>
  );
}
