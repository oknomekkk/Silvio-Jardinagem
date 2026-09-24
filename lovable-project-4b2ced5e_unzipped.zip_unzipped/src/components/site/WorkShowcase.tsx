import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./motion-primitives";
import { MSG, waLink } from "./whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";
import cicas from "@/assets/cicas-podadas.jpg.asset.json";
import canteiro from "@/assets/canteiro-pedras.jpg.asset.json";
import cerca from "@/assets/cerca-viva.jpg.asset.json";

/** Seção intermediária com composição editorial assimétrica — #trabalhos */
export function WorkShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const ySide = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section id="trabalhos" ref={ref} className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:pt-10">
            <Reveal className="max-w-md">
              <p className="text-[0.62rem] font-semibold tracking-[0.26em] text-muted-foreground">
                TRABALHOS REALIZADOS
              </p>
              <h2 className="mt-4 text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.015em] text-balance-tight sm:text-[2.6rem]">
                O trabalho fala por si.
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                Alguns registros de serviços realizados em Barretos e região.
              </p>
              <a
                href={waLink(MSG.trabalhos)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-[0.9rem] font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_oklch(0.36_0.072_156)] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4.5 w-4.5 transition-transform duration-200 group-hover:scale-110" />
                Quero um serviço assim
              </a>
            </Reveal>
          </div>

          <div className="relative">
            <motion.div
              style={reduce ? {} : { y: yMain }}
              initial={{ opacity: 0, clipPath: "inset(10% 6% 10% 6% round 28px)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0 round 28px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative overflow-hidden rounded-[28px] surface-lift"
            >
              <img
                src={cicas.url}
                alt="Cicas e arbustos podados em jardim residencial"
                loading="lazy"
                width={1280}
                height={854}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </motion.div>

            <div className="mt-5 grid grid-cols-2 gap-5">
              <motion.div
                style={reduce ? {} : { y: ySide }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 0.61, 0.36, 1] }}
                className="overflow-hidden rounded-[24px] surface-lift sm:translate-y-6"
              >
                <img
                  src={canteiro.url}
                  alt="Canteiro com pedras, casca de árvore e iluminação embutida"
                  loading="lazy"
                  width={1280}
                  height={854}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </motion.div>
              <motion.div
                style={reduce ? {} : { y: yMain }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
                className="overflow-hidden rounded-[24px] surface-lift"
              >
                <img
                  src={cerca.url}
                  alt="Cerca viva alta com palmeiras e palmeiras-cicas ao fundo"
                  loading="lazy"
                  width={1280}
                  height={854}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
