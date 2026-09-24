import { motion } from "motion/react";
import { Flower2, Scissors, Sprout, Trees, Brush, ShieldCheck } from "lucide-react";
import { Reveal } from "./motion-primitives";
import { MSG_SERVICOS, waLink } from "./whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Categorias editáveis — cada uma abre o WhatsApp com mensagem própria. */
const categories = [
  { key: "manutencao", label: "Manutenção de jardins", icon: Trees, pos: "lg:col-start-3 lg:row-start-1", size: "lg" },
  { key: "poda", label: "Poda", icon: Scissors, pos: "lg:col-start-1 lg:row-start-2", size: "md" },
  { key: "limpeza", label: "Limpeza de áreas verdes", icon: Brush, pos: "lg:col-start-5 lg:row-start-2", size: "md" },
  { key: "plantio", label: "Plantio e cuidados", icon: Sprout, pos: "lg:col-start-2 lg:row-start-3", size: "lg" },
  { key: "organizacao", label: "Organização do espaço", icon: Flower2, pos: "lg:col-start-4 lg:row-start-4", size: "md" },
  { key: "gerais", label: "Cuidados gerais", icon: ShieldCheck, pos: "lg:col-start-2 lg:row-start-5", size: "md" },
];

export function Categories() {
  return (
    <section id="servicos" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 mx-auto h-96 w-96 rounded-full glow-field animate-drift"
      />

      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-xl">
          <p className="text-[0.62rem] font-semibold tracking-[0.26em] text-muted-foreground">
            CATEGORIAS DE SERVIÇO
          </p>
          <h2 className="mt-4 text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.015em] sm:text-[2.6rem]">
            Cuidado pensado para o espaço.
          </h2>
          <p className="mt-4 text-[0.95rem] text-muted-foreground">
            Toque em um serviço para já conversar pelo WhatsApp sobre ele.
          </p>
        </Reveal>

        <div className="relative mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-16 lg:grid-cols-5 lg:grid-rows-5 lg:gap-6">
          {categories.map(({ key, label, icon: Icon, pos, size }, i) => (
            <motion.a
              key={label}
              href={waLink(MSG_SERVICOS[key as keyof typeof MSG_SERVICOS])}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Solicitar orçamento de ${label} pelo WhatsApp`}
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
              whileHover={{ scale: 1.045, y: -6 }}
              whileTap={{ scale: 0.99 }}
              className={`${pos} animate-float`}
              style={{ animationDelay: `${-i * 1.4}s` }}
            >
              <div
                className={`group relative flex aspect-square w-full flex-col items-center justify-center gap-2.5 rounded-full p-4 text-center glass-card transition-shadow duration-300 surface-soft hover:surface-lift ${
                  size === "lg" ? "lg:scale-110" : ""
                }`}
              >
                <Icon className="h-5 w-5 text-leaf transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-6 sm:h-6 sm:w-6" />
                <span className="px-1 text-[0.72rem] font-medium leading-tight text-foreground transition-colors group-hover:text-leaf sm:text-[0.8rem]">
                  {label}
                </span>
                <WhatsAppIcon className="absolute bottom-4 h-3.5 w-3.5 text-leaf opacity-0 transition-all duration-300 group-hover:opacity-100 sm:bottom-5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
