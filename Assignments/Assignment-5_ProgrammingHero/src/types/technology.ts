export type BadgeType =
  | "Popular"
  | "Flexible"
  | "Fast"
  | "Essential"
  | "Top SQL"
  | "Type-Safe"
  | "Modern"
  | "Powerful"
  | "Containers";

export interface TechnologiesType {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: BadgeType;
}
