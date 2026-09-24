import { motion } from "motion/react";
import { Reveal } from "./motion-primitives";
import { MSG, waLink } from "./whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";
import jardimPiscina from "@/assets/jardim-piscina.jpg.asset.json";
import patio from "@/assets/patio-jardim.jpg.asset.json";
import cicas from "@/assets/cicas-podadas.jpg.asset.json";
import canteiro from "@/assets/canteiro-pedras.jpg.asset.json";
import cerca from "@/assets/cerca-viva.jpg.asset.json";
import gramado from "@/assets/gramado-piscina.jpg.asset.json";

/** Galeria final completa — composição dinâmica, não uma grade genérica. */
const photos = [
  { src: patio.url, alt: "Pátio com piso intertravado e canteiros tratados", cls: "sm:col-span-2 aspect-[16/10]" },
  { src: cicas.url, alt: "Cicas podadas em fileira com arbustos esféricos", cls: "aspect-[4/5]" },
  { src: canteiro.url, alt: "Canteiro paisagístico com pedras e casca ornamentais", cls: "aspect-[4/5] sm:mt-10" },
  { src: gramado.url, alt: "Gramado aparado ao lado da piscina", cls: "aspect-[4/5]" },
  { src: cerca.url, alt: "Cerca viva alta formada ao redor do jardim", cls: "aspect-[4/5] sm:-mt-10" },
  { src: jardimPiscina.url, alt: "Visão geral do jardim com caminho de pedras e piscina", cls: "sm:col-span-2 aspect-[16/10]" },
];

export function Portfolio() {
  return (
    <section id="galeria" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-xl">
          <p className="text-[0.62rem] font-semibold tracking-[0.26em] text-muted-foreground">
            REGISTROS
          </p>
          <h2 className="mt-4 text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.015em] sm:text-[2.6rem]">
            Espaços bem cuidados falam por si.
          </h2>
          <p className="mt-4 text-[0.95rem] text-muted-foreground">
            Serviços realizados em jardins e áreas externas de Barretos e região.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {photos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.75, delay: (i % 3) * 0.12 }}
              className={`group relative overflow-hidden rounded-[26px] border border-border surface-lift ${p.cls}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={1280}
                height={854}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 text-center">
          <a
            href={waLink(MSG.galeria)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-leaf/30 bg-card px-6 py-3.5 text-[0.9rem] font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-leaf/60 active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4.5 w-4.5 text-leaf transition-transform duration-200 group-hover:scale-110" />
            Quero esse cuidado no meu espaço
          </a>
        </Reveal>
      </div>
    </section>
  );
}
