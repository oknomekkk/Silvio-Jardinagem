import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Credibility } from "@/components/site/Credibility";
import { CareEditorial } from "@/components/site/CareEditorial";
import { Categories } from "@/components/site/Categories";
import { PhotoBreak } from "@/components/site/PhotoBreak";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Details } from "@/components/site/Details";
import { Differential } from "@/components/site/Differential";
import { ServiceArea } from "@/components/site/ServiceArea";
import { WorkShowcase } from "@/components/site/WorkShowcase";
import { Portfolio } from "@/components/site/Portfolio";
import { CtaBand } from "@/components/site/CtaBand";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const title = "Silvio Carvalhaes | Jardinagem em Barretos e Região";
const description =
  "Serviços de jardinagem em Barretos e região. Atendimento direto com Silvio Carvalhaes e orçamento pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Credibility />
        <CareEditorial />
        <Categories />
        <PhotoBreak />
        <HowItWorks />
        <Details />
        <Differential />
        <ServiceArea />
        <WorkShowcase />
        <Portfolio />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
