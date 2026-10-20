import { CharacterProfile } from "../types/domain";

export const characterProfile: CharacterProfile = {
  completedQuests: 8,
  titles: [
    { id: "primeira-missao", label: "Primeira Missão", tone: "purple" },
    { id: "sequencia-5", label: "Sequência de 5", tone: "pink" },
    { id: "cacadora-de-bugs", label: "Caçadora de Bugs", tone: "green" },
  ],
  equipment: [
    {
      id: "manto-typescript",
      name: "Manto do TypeScript",
      slot: "Costas",
      rarity: "Raro",
      emoji: "🧥",
    },
    {
      id: "coroa-commits",
      name: "Coroa de Commits",
      slot: "Cabeça",
      rarity: "Comum",
      emoji: "👑",
    },
  ],
};
