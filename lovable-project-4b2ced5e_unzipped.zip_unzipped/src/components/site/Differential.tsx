import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./motion-primitives";

const cards = [
  { w: "CUIDADO", cls: "left-0 top-2" },
  { w: "MANUTENÇÃO", cls: "right-2 top-20" },
  { w: "DETALHES", cls: "left-8 top-44" },
  { w: "APRESENTAÇÃO", cls: "right-6 top-64" },
];

export function Differential() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <p className="text-[0.62rem] font-semibold tracking-[0.26em] text-muted-foreground">
            DIFERENCIAL
          </p>
          <h2 className="mt-4 max-w-md text-[1.75rem] font-semibold leading-[1.18] tracking-[-0.015em] text-balance-tight sm:text-[2.4rem]">
            Um espaço bem cuidado muda a percepção de todo o ambiente.
          </h2>
          <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-muted-foreground">
            Serviço local, contato simples. Cada espaço apresenta necessidades diferentes.
          </p>
        </Reveal>

        <div className="relative h-[340px] sm:h-[380px]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-6 rounded-[40%] bg-moss/10 blur-3xl animate-drift"
          />
          {cards.map((c, i) => (
            <motion.div
              key={c.w}
              style={{ y: i % 2 === 0 ? y1 : y2 }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -18 : 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`absolute ${c.cls}`}
            >
              <div
                className="rounded-2xl border border-border bg-card/80 px-5 py-4 text-[0.72rem] font-semibold tracking-[0.2em] text-foreground backdrop-blur animate-float surface-soft transition-shadow duration-300 hover:surface-lift"
                style={{ animationDelay: `${-i * 1.7}s` }}
              >
                {c.w}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
