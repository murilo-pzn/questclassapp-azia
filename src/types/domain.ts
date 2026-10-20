export type Role = "player" | "master";

export type Reward = {
  xp: number;
  coins: number;
};

export type Quest = {
  id: string;
  title: string;
  description: string;
  difficulty: "Fácil" | "Média" | "Difícil";
  dueDate?: string;
  reward: Reward;
};

export type Player = {
  name: string;
  characterClass: string;
  role: Role;
  level: number;
  xp: number;
  nextLevelXp: number;
  coins: number;
  streak: number;
};

export type Boss = {
  name: string;
  remainingHealth: number;
  classContribution: number;
};

// Item da Taverna (consumível que o jogador resgata com moedas).
export type Benefit = {
  id: string;
  title: string;
  description: string;
  cost: number;
  emoji: string;
  color: string;
};

// Título desbloqueado pelo personagem. "tone" escolhe a cor do selo.
export type TitleTone = "purple" | "pink" | "green";

export type CharacterTitle = {
  id: string;
  label: string;
  tone: TitleTone;
};

export type Equipment = {
  id: string;
  name: string;
  slot: string;
  rarity: "Comum" | "Raro" | "Épico";
  emoji: string;
};

export type CharacterProfile = {
  completedQuests: number;
  titles: CharacterTitle[];
  equipment: Equipment[];
};
