"use client";
import { Spine } from "@/types/book";
import Image from "next/image";

export default function CatalogBookItem({ id, title, theme }: Spine) {
  return (
    <div
      key={id}
      className="hover:shadow-primary/30 my-3 flex shrink-0 flex-col items-center gap-2 rounded-xl p-2.5 text-center duration-150 hover:-translate-y-1 hover:bg-white/35 hover:shadow-lg focus:ring-pink-400"
    >
      <div className="relative flex size-full h-35 w-15 flex-col">
        <Image
          className="rounded object-cover"
          fill
          src={`/images/spines/${theme}.webp`}
          alt={`${id}-${title}`}
          sizes="60px"
        />
      </div>
      <span className="text-secondary-foreground text-[9px] font-semibold tracking-wider">
        {title}
      </span>
    </div>
  );
}
