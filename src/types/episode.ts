export type CoverTheme =
  | "terracotta"
  | "olive"
  | "navy"
  | "plum"
  | "amber"
  | "teal";

export interface Episode {
  id: string;
  number: number;
  title: string;
  summary: string;
  publishedAt: string;
  durationMinutes: number;
  coverTheme: CoverTheme;
}
