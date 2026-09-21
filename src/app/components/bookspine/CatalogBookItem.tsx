"use client"
import { Spine } from "@/types/book";
import Image from "next/image";

export default function CatalogBookItem({ id, theme }: Spine) {
    return (
        <div
            key={id} className="shrink-0 text-center flex flex-col  items-center gap-2 p-2.5 my-3 hover:bg-white/35 rounded-xl 
        hover:-translate-y-1 duration-150 hover:shadow-accent-pink focus:ring-pink-400">
            <div className="relative w-15 h-35 size-full flex flex-col">
                <Image
                    className="object-cover rounded"
                    fill
                    src={`/images/spines/${theme}.webp`}
                    alt={`${id} book spine`}
                />
            </div>
            <span className="text-catalog-title-text font-semibold text-[9px] tracking-wider">archive vol. 0{id}</span>
        </div>

    )
}
