import { Quest } from "../types/domain";

// Dados locais: os componentes não precisam conhecer uma API para funcionar.
export const quests: Quest[] = [
  {
    id: "goblin-das-props",
    title: "Derrote o Goblin das Props",
    description:
      "Crie um componente React Native que receba dados por props tipadas com TypeScript.",
    difficulty: "Média",
    dueDate: "15 ago",
    reward: { xp: 100, coins: 20 },
  },
  {
    id: "ogro-do-estado",
    title: "Derrote o Ogro do Estado",
    description:
      "Crie um componente React Native que utilize o hook useState para gerenciar o estado interno do componente.",
    difficulty: "Média",
    dueDate: "22 ago",
    reward: { xp: 100, coins: 20 },
  },
  {
    id: "guardiao-das-rotas",
    title: "Supere o Guardião das Rotas",
    description:
      "Abra uma nova tela e envie o identificador da missão pela rota.",
    difficulty: "Difícil",
    reward: { xp: 150, coins: 35 },
  },
];
