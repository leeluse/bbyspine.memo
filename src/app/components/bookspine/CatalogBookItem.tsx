import { ICatalogBookItem } from "@/types/book";
import Image from "next/image";

const SELECTED_STYLE =
  "aria-selected:-translate-y-2.5 aria-selected:bg-white/50 aria-selected:ring-1 aria-selected:ring-primary aria-selected:shadow-lg aria-selected:shadow-primary/20";

export default function CatalogBookItem({
  id,
  title,
  theme,
  isSelected,
  onClick,
}: ICatalogBookItem) {
  return (
    <div
      key={id}
      onClick={onClick}
      aria-selected={isSelected}
      className={`my-3 flex shrink-0 cursor-pointer flex-col items-center gap-2 rounded-xl p-2.5 text-center duration-150 hover:-translate-y-1 hover:bg-white/35 hover:shadow-lg ${SELECTED_STYLE}`}
    >
      <div className="relative flex size-full h-35 w-15 flex-col">
        <Image
          className="rounded object-cover select-none"
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
