import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowDown, MapPin, MessageSquare, Sparkles } from "lucide-react";
import { useRef } from "react";
import heroImage from "@/assets/jardim-piscina.jpg.asset.json";
import { WHATSAPP_URL } from "./motion-primitives";
import { WhatsAppIcon } from "./WhatsAppIcon";

const ease = [0.22, 0.61, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section id="inicio" ref={ref} className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full glow-field animate-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full glow-field animate-drift"
        style={{ animationDelay: "-6s" }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-[0.7rem] font-medium tracking-[0.16em] text-muted-foreground backdrop-blur"
          >
            <MapPin className="h-3.5 w-3.5 text-leaf" />
            BARRETOS E REGIÃO
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.08, ease }}
            className="mt-6 text-[2.05rem] font-semibold leading-[1.1] tracking-[-0.02em] text-balance-tight sm:text-5xl lg:text-[3.4rem]"
          >
            Jardinagem profissional para manter seu espaço{" "}
            <span className="relative inline-block text-leaf">
              bem cuidado
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.9, ease }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-accent/70"
              />
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground sm:text-lg"
          >
            Manutenção e cuidados para jardins em Barretos e região, com atendimento
            direto e orçamento pelo WhatsApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-4 text-[0.95rem] font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_45px_-18px_oklch(0.36_0.072_156)] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
              Solicitar orçamento no WhatsApp
            </a>
            <a
              href="#trabalhos"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-4 text-[0.95rem] font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-leaf/40 active:scale-[0.98]"
            >
              Ver trabalhos
              <ArrowDown className="h-4 w-4 text-leaf transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center gap-4"
          >
            <span className="h-10 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
            <div>
              <p className="text-[0.62rem] font-semibold tracking-[0.26em] text-muted-foreground">
                ATENDIMENTO LOCAL
              </p>
              <p className="mt-1 text-sm text-foreground">Barretos e região</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(12% 0 12% 0 round 28px)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0 0% 0 round 28px)" }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[28px] surface-lift">
            <motion.img
              src={heroImage.url}
              alt="Jardim residencial cuidado por Silvio: gramado aparado, palmeiras e área de piscina"
              width={1280}
              height={854}
              initial={reduce ? { opacity: 1 } : { scale: 1.12, filter: "blur(14px)", opacity: 0.6 }}
              animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.15, ease }}
              style={reduce ? {} : { y: parallaxY }}
              className="h-[380px] w-full scale-[1.03] object-cover sm:h-[520px] lg:h-[580px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease }}
            className="absolute -left-2 top-8 rounded-2xl px-4 py-2.5 text-xs font-medium text-ink-foreground glass-dark animate-float sm:left-[-18px]"
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-accent" /> Barretos • SP
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95, ease }}
            style={{ animationDelay: "-2.5s" }}
            className="absolute -right-2 top-1/3 rounded-2xl px-4 py-2.5 text-xs font-medium text-ink-foreground glass-dark animate-float sm:right-[-18px]"
          >
            <span className="flex items-center gap-2">
              <MessageSquare className="h-3.5 w-3.5 text-accent" /> Orçamento direto
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease }}
            style={{ animationDelay: "-4.5s" }}
            className="absolute bottom-6 left-6 rounded-2xl px-4 py-2.5 text-xs font-medium text-ink-foreground glass-dark animate-float"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Atendimento local
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
