import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./motion-primitives";
import { MSG, waLink } from "./whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

const steps = [
  { n: "01", title: "CONVERSE", text: "Explique o que seu espaço precisa." },
  { n: "02", title: "AVALIE", text: "Entenda a melhor forma de atendimento." },
  { n: "03", title: "AGENDE", text: "Combine o serviço pelo WhatsApp." },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-xl">
          <p className="text-[0.62rem] font-semibold tracking-[0.26em] text-muted-foreground">
            COMO FUNCIONA
          </p>
          <h2 className="mt-4 text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.015em] sm:text-[2.6rem]">
            Atendimento direto e orientação clara.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-14">
          <motion.span
            aria-hidden
            style={{ scaleX: scale }}
            className="absolute left-0 top-6 hidden h-px w-full origin-left bg-gradient-to-r from-leaf/50 via-leaf/30 to-transparent sm:block"
          />
          <motion.span
            aria-hidden
            style={{ scaleY: scale }}
            className="absolute left-6 top-0 h-full w-px origin-top bg-gradient-to-b from-leaf/50 to-transparent sm:hidden"
          />

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.15 }}
                className="relative pl-16 sm:pl-0"
              >
                <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold text-leaf sm:relative sm:mb-5 sm:flex">
                  {s.n}
                </span>
                <h3 className="text-[0.72rem] font-semibold tracking-[0.24em] text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xs text-[0.98rem] leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12">
            <a
              href={waLink(MSG.processo)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-leaf/30 bg-card px-6 py-3.5 text-[0.9rem] font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-leaf/60 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4.5 w-4.5 text-leaf transition-transform duration-200 group-hover:scale-110" />
              Começar uma conversa
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
