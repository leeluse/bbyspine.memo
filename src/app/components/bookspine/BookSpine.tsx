import Image from "next/image";
import { Book } from "@/types/book";
import { BOOK_SIZES } from "@/data/books";

export default function BookSpine({ id, title, size, theme }: Book) {
  return (
    <div
      className={`relative ${BOOK_SIZES[size].h} ${BOOK_SIZES[size].w} cursor-pointer overflow-hidden rounded-xs shadow-lg duration-100 hover:-translate-y-3`}
      title={title}
    >
      <Image
        src={`/images/spines/${theme}.webp`}
        alt={`${id} book spine`}
        fill
        sizes="(max-width: 640px) 5vw, 10vw"
        className="object-cover pb-1 select-none"
      />
    </div>
  );
}
