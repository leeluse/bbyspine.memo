import { Book } from '@/types/book';

interface BookSpineProps {
    spine: Book;
}

export default function BookSpine({ spine }: BookSpineProps) {
  return (
    <div className='bg-sky-400 h-80 sm:h-140 w-12 sm:w-20 border flex items-center justify-center p-2 text-center text-white font-bold text-xs select-none'>
        {spine.title}
    </div>
  )
}
