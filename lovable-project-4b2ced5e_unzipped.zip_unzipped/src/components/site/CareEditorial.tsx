import { motion } from "motion/react";
import { AnimatedLine, Reveal } from "./motion-primitives";

const words = ["Cuidado", "Manutenção", "Organização", "Apresentação"];

export function CareEditorial() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-10 h-72 w-72 rounded-full bg-moss/10 blur-3xl animate-drift"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="text-[0.62rem] font-semibold tracking-[0.26em] text-muted-foreground">
              O SERVIÇO COMEÇA PELO CUIDADO
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.015em] text-balance-tight sm:text-[2.6rem]">
              Cada espaço exige um cuidado diferente.
            </h2>
          </Reveal>
          <AnimatedLine className="my-7 max-w-xs" />
          <Reveal delay={0.16}>
            <p className="max-w-lg text-[1rem] leading-relaxed text-muted-foreground sm:text-[1.08rem]">
              Jardins residenciais, áreas externas e espaços que precisam de manutenção
              merecem atenção aos detalhes, organização e cuidado no dia a dia.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 self-center">
          {words.map((w, i) => (
            <motion.div
              key={w}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              className={`rounded-2xl border border-border/80 bg-card/70 px-4 py-6 text-center text-sm font-medium tracking-wide text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:text-leaf surface-soft ${
                i % 2 === 1 ? "translate-y-4" : ""
              }`}
            >
              {w}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
