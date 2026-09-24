import { MapPin, MessageSquare, Leaf } from "lucide-react";
import { StaggerGroup, StaggerItem } from "./motion-primitives";

const items = [
  {
    icon: MapPin,
    label: "ATENDIMENTO LOCAL",
    text: "Barretos e região",
  },
  {
    icon: MessageSquare,
    label: "ORÇAMENTO DIRETO",
    text: "Contato rápido pelo WhatsApp",
  },
  {
    icon: Leaf,
    label: "ATENÇÃO AO ESPAÇO",
    text: "Serviço orientado às necessidades de cada jardim",
  },
];

export function Credibility() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-6">
      <StaggerGroup className="grid gap-4 sm:grid-cols-3">
        {items.map(({ icon: Icon, label, text }) => (
          <StaggerItem key={label}>
            <div className="group h-full rounded-2xl border border-border bg-card/80 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-leaf/35 surface-soft hover:surface-lift">
              <Icon className="h-5 w-5 text-leaf transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
              <p className="mt-4 text-[0.62rem] font-semibold tracking-[0.24em] text-muted-foreground">
                {label}
              </p>
              <p className="mt-1.5 text-[0.95rem] leading-snug text-foreground">{text}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
