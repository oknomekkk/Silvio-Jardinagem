import { ClipboardList, Eye, HeartHandshake, Sparkles } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./motion-primitives";

const blocks = [
  { icon: ClipboardList, title: "Organização", text: "Trabalho conduzido com método." },
  { icon: Eye, title: "Atenção", text: "Observação do que o espaço pede." },
  { icon: HeartHandshake, title: "Cuidado", text: "Trato adequado para cada planta." },
  { icon: Sparkles, title: "Apresentação", text: "Resultado limpo e bem acabado." },
];

export function Details() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-xl">
          <h2 className="text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.015em] sm:text-[2.6rem]">
            Cuidado visível nos detalhes.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map(({ icon: Icon, title, text }) => (
            <StaggerItem key={title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-leaf/35 surface-soft hover:surface-lift">
                <span className="absolute inset-x-6 top-0 h-px w-0 bg-leaf/60 transition-all duration-500 group-hover:w-[calc(100%-3rem)]" />
                <Icon className="h-5 w-5 text-leaf transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                <h3 className="mt-5 text-base font-medium text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
