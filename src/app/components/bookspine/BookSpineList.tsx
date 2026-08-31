import { MOCK_BOOKS } from '@/data/books'
import BookSpine from './BookSpine'

export default function BookSpineList() {
  return (
        <div className=" flex justify-center items-center h-80 sm:h-140 w-12 sm:w-20">
            {MOCK_BOOKS.map((book) => (
                <BookSpine key={book.rating} spine={{...book}} />
            ))}
        </div>
    )
}
