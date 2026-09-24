import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Reveal } from "./motion-primitives";
import { MSG, waLink } from "./whatsapp";

export function ServiceArea() {
  return (
    <section id="atendimento" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <p className="text-[0.62rem] font-semibold tracking-[0.26em] text-muted-foreground">
            ÁREA DE ATENDIMENTO
          </p>
          <h2 className="mt-4 text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.015em] sm:text-[2.6rem]">
            Barretos e região
          </h2>
          <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-muted-foreground">
            Atendimento voltado para Barretos e cidades da região.
          </p>
          <p className="mt-3 text-sm text-foreground">
            Consulte disponibilidade para sua localidade.
          </p>
          <a
            href={waLink(MSG.atendimento)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-card px-5 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-leaf/60 active:scale-[0.98]"
          >
            Consultar atendimento
          </a>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square w-full overflow-hidden rounded-[32px] border border-border bg-card/60 backdrop-blur surface-soft"
        >
          <div aria-hidden className="absolute inset-0 glow-field" />
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
            {[...Array(7)].map((_, i) => (
              <motion.circle
                key={i}
                cx="200"
                cy="200"
                r={30 + i * 24}
                fill="none"
                stroke="oklch(0.46 0.1 152)"
                strokeOpacity={0.16}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: i * 0.12 }}
              />
            ))}
            {[
              [120, 140],
              [280, 160],
              [150, 280],
              [265, 275],
              [200, 105],
            ].map(([cx, cy], i) => (
              <motion.circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="4"
                fill="oklch(0.6 0.09 145)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.14 }}
              />
            ))}
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground animate-breathe">
              <MapPin className="h-5 w-5" />
            </span>
            <p className="mt-3 text-[0.68rem] font-semibold tracking-[0.24em] text-foreground">
              BARRETOS • SP
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
