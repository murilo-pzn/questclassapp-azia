import { Benefit } from "../types/domain";

export const benefits: Benefit[] = [
  {
    id: "visao-do-oraculo",
    title: "Visão do Oráculo",
    description: "Veja uma dica da missão atual.",
    cost: 30,
    emoji: "🔮",
    color: "#8BE9FD",
  },
  {
    id: "escudo-contra-bugs",
    title: "Escudo contra Bugs",
    description: "Uma chance extra de reenvio na missão.",
    cost: 50,
    emoji: "🛡️",
    color: "#BD93F9",
  },
  {
    id: "pocao-do-tempo",
    title: "Poção do Tempo",
    description: "+24h de prazo extra para entregar.",
    cost: 40,
    emoji: "⏳",
    color: "#FFB86C",
  },
  {
    id: "segunda-chance",
    title: "Segunda Chance",
    description: "Refaça uma missão que foi reprovada.",
    cost: 60,
    emoji: "🍃",
    color: "#50FA7B",
  },
  {
    id: "conselho-do-mestre",
    title: "Conselho do Mestre",
    description: "Feedback detalhado antecipado do seu código.",
    cost: 80,
    emoji: "📜",
    color: "#FF79C6",
  },
];
