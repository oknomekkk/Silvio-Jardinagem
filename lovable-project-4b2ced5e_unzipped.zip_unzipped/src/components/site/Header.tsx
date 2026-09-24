import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Images, Menu, X } from "lucide-react";
import { MSG, waLink } from "./whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/80 py-2 backdrop-blur-xl surface-soft"
          : "py-4"
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5"
      >
        <a href="#inicio" className="group flex flex-col leading-none">
          <span className="text-[0.95rem] font-semibold tracking-[0.18em] text-foreground sm:text-base">
            SILVIO CARVALHAES
          </span>
          <span className="mt-1 text-[0.58rem] font-medium tracking-[0.28em] text-muted-foreground sm:text-[0.62rem]">
            JARDINAGEM • BARRETOS E REGIÃO
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-leaf transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={waLink(MSG.header)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_oklch(0.36_0.072_156)] active:scale-[0.98] sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Solicitar orçamento
          </a>
          <a
            href={waLink(MSG.header)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-200 active:scale-95 sm:hidden"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="#trabalhos"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-4 text-[0.8rem] font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-leaf/50 active:scale-95 lg:hidden"
          >
            <Images className="h-4 w-4 text-leaf" />
            Ver trabalhos
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="mx-5 mt-3 overflow-hidden rounded-2xl border border-border bg-card/95 p-2 backdrop-blur-xl surface-lift lg:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.25 }}
                className="block rounded-xl px-4 py-3 text-sm text-foreground transition-colors hover:bg-secondary"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
