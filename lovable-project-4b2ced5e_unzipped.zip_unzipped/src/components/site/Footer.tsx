import { AnimatedLine, Reveal } from "./motion-primitives";
import { MSG, waLink } from "./whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-28 pt-6 sm:pb-16">
      <AnimatedLine className="mb-10" />
      <Reveal>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-base font-semibold tracking-[0.18em] text-foreground">
              SILVIO CARVALHAES
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Jardinagem — Barretos e região
            </p>
            <a
              href={waLink(MSG.footer)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-foreground transition-colors hover:text-leaf"
            >
              WhatsApp: +55 17 98122-5402
            </a>
          </div>

          <a
            href={waLink(MSG.footer)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Solicitar orçamento
          </a>
        </div>
      </Reveal>
      <p className="mt-10 text-xs text-muted-foreground">
        Atendimento mediante disponibilidade.
      </p>
    </footer>
  );
}
