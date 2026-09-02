import { MOCK_BOOKS } from '@/data/books';
import BookSpine from './BookSpine';

export default function BookSpineList() {
  return (
    <div className="flex items-end justify-center gap-1.5 sm:gap-2 px-4 max-w-full z-10 -mb-1">
      {MOCK_BOOKS.map(({id, theme, title, size}) => {
        return (
          <BookSpine key={id} id={id} theme={theme} title={title} size={size} />
        )
      })}
    </div>
  );
}

