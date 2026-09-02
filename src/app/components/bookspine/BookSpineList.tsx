import { MOCK_BOOKS } from '@/data/books';
import BookSpine from './BookSpine';

export default function BookSpineList() {
  return (
    <div className="flex items-end justify-center gap-1.5 sm:gap-2 px-4 max-w-full z-10 -mb-1">
      {MOCK_BOOKS.map((book) => (
        <BookSpine key={book.id} spine={book} />
      ))}
    </div>
  );
}

