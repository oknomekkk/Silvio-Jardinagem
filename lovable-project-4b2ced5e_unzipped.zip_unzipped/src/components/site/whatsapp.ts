/**
 * Central do WhatsApp: um número, mensagens pré-preenchidas diferentes
 * para cada serviço e seção do site.
 */

const NUMBER = "5517981225402";

export function waLink(message: string) {
  return `https://wa.me/${NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Mensagem padrão (orçamento genérico). */
export const MSG_DEFAULT =
  "Olá, Silvio! Gostaria de solicitar um orçamento para jardinagem.";

/** Uma mensagem por seção. */
export const MSG = {
  hero: MSG_DEFAULT,
  header: MSG_DEFAULT,
  servicos:
    "Olá, Silvio! Estou vendo as categorias de serviço e quero conversar sobre o meu jardim.",
  trabalhos:
    "Olá, Silvio! Vi os trabalhos no site e gostaria de um orçamento.",
  galeria:
    "Olá, Silvio! Vi as fotos dos trabalhos no site e quero um orçamento para o meu espaço.",
  atendimento:
    "Olá, Silvio! Gostaria de saber se o atendimento cobre a minha região.",
  processo:
    "Olá, Silvio! Quero entender como funciona o serviço e pedir um orçamento.",
  contato: MSG_DEFAULT,
  footer: MSG_DEFAULT,
  fab: "Olá, Silvio! Vim pelo site e gostaria de solicitar um orçamento.",
} as const;

/** Uma mensagem por categoria de serviço. */
export const MSG_SERVICOS = {
  manutencao:
    "Olá, Silvio! Gostaria de um orçamento para manutenção de jardins.",
  poda: "Olá, Silvio! Gostaria de um orçamento para poda.",
  limpeza:
    "Olá, Silvio! Gostaria de um orçamento para limpeza de áreas verdes.",
  plantio:
    "Olá, Silvio! Gostaria de um orçamento para plantio e cuidados com plantas.",
  organizacao:
    "Olá, Silvio! Gostaria de um orçamento para organização do meu espaço externo.",
  gerais:
    "Olá, Silvio! Gostaria de um orçamento para cuidados gerais com o jardim.",
} as const;
