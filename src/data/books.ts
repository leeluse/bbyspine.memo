import { Book, BookSize } from "@/types/book";
import { SPINES } from "./spines";

export const MOCK_BOOKS: Book[] = [
  {
    id: "1",
    title: "archive vol. 07",
    rating: 1,
    size: "lg",
    theme: SPINES[0].theme,
  },
  {
    id: "2",
    title: "striped archive",
    rating: 2,
    size: "sm",
    theme: SPINES[1].theme,
  },
  {
    id: "3",
    title: "bbyspine",
    rating: 3,
    size: "sm",
    theme: SPINES[2].theme,
  },
  {
    id: "4",
    title: "palm textile archive",
    rating: 4,
    size: "xs",
    theme: SPINES[3].theme,
  },
  {
    id: "5",
    title: "neon type archive",
    rating: 5,
    size: "md",
    theme: SPINES[4].theme,
  },
  {
    id: "6",
    title: "halftone archive",
    rating: 6,
    size: "lg",
    theme: SPINES[5].theme,
  },
  {
    id: "7",
    title: "bby archive",
    rating: 7,
    size: "xs",
    theme: SPINES[6].theme,
  },
  {
    id: "8",
    title: "blue branch archive",
    rating: 8,
    size: "md",
    theme: SPINES[7].theme,
  },
  {
    id: "9",
    title: "palm beach archive",
    rating: 9,
    size: "lg",
    theme: SPINES[8].theme,
  },
  {
    id: "10",
    title: "palm mountain archive",
    rating: 10,
    size: "md",
    theme: SPINES[9].theme,
  },
];

export const BOOK_SIZES: Record<BookSize, { h: string; w: string }> = {
  xs: { h: "h-52 sm:h-60 lg:h-72", w: "w-7.5 sm:w-9 lg:w-12" },
  sm: { h: "h-60 sm:h-68 lg:h-80", w: "w-6 sm:w-7.5 lg:w-9.5" },
  md: { h: "h-68 sm:h-76 lg:h-88", w: "w-7 sm:w-8.5 lg:w-10" },
  lg: { h: "h-76 sm:h-84 lg:h-96", w: "w-8 sm:w-9 lg:w-12" },
};
