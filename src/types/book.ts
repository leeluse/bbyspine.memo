export type BookSize = "xs" | "sm" | "md" | "lg";

export interface Spine {
  id: string;
  title: string;
  theme: number;
}

export interface Book extends Spine {
  size: BookSize;
  rating?: number;
}
