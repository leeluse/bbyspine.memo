import { MOCK_BOOKS } from "@/data/books";
import BookSpine from "./BookSpine";

export default function BookSpineList() {
  return (
    <div className="z-10 -mb-1 flex max-w-full items-end justify-center gap-1.5 px-4 sm:gap-2">
      {MOCK_BOOKS.map(({ id, theme, title, size }) => {
        return (
          <BookSpine key={id} id={id} theme={theme} title={title} size={size} />
        );
      })}
    </div>
  );
}
