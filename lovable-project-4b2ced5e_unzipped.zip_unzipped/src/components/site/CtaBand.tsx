import { Reveal, WHATSAPP_URL } from "./motion-primitives";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function CtaBand() {
  return (
    <section id="contato" className="px-5 py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] ink-panel px-6 py-14 text-center sm:px-14 sm:py-20 surface-lift">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full glow-field animate-drift"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full glow-field animate-drift"
          style={{ animationDelay: "-8s" }}
        />
        <Reveal>
          <h2 className="mx-auto max-w-lg text-[1.8rem] font-semibold leading-[1.15] tracking-[-0.015em] text-balance-tight sm:text-[2.5rem]">
            Seu jardim precisa de atenção?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-md text-[1rem] leading-relaxed text-ink-foreground/70">
            Converse diretamente pelo WhatsApp e explique o que você precisa.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-[0.95rem] font-semibold text-accent-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-18px_oklch(0.72_0.14_148)] active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
            Falar com Silvio
          </a>
        </Reveal>
      </div>
    </section>
  );
}
