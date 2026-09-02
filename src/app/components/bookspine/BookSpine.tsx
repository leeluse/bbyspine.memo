import Image from 'next/image';
import { BookSpineProps } from '@/types/book';

export default function BookSpine({ spine }: BookSpineProps) {
  const SIZE = { h: 'h-64 lg:h-80', w: 'w-6 sm:w-8 md:w-10 lg:w-12' };

  return (
    <div
      className={`relative ${SIZE.h} ${SIZE.w} rounded-xs overflow-hidden cursor-pointer shadow-lg duration-100 hover:-translate-y-3`}
      title={spine.title}
    >
      <Image 
        src={`/images/spines/${spine.theme}.webp`} 
        alt={spine.title} 
        fill 
        className='object-cover select-none pb-1'/>
    </div>
  );
}

