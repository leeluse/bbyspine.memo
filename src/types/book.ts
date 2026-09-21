export type BookSize = "xs" | "sm" | "md" | "lg";

export const BOOK_SIZES: Record<BookSize, { h: string; w: string }> = {
  xs: { h: "h-52 sm:h-60 lg:h-72", w: "w-7.5 sm:w-9 lg:w-12" },
  sm: { h: "h-60 sm:h-68 lg:h-80", w: "w-6 sm:w-7.5 lg:w-9.5" },
  md: { h: "h-68 sm:h-76 lg:h-88", w: "w-7 sm:w-8.5 lg:w-10" },
  lg: { h: "h-76 sm:h-84 lg:h-96", w: "w-8 sm:w-9 lg:w-12" },
};

export interface Spine {
  id: string;
  title: string;
  theme: number;
}

export interface Book extends Spine {
  size: BookSize;
  rating?: number;
}
