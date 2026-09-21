import { ReactNode } from "react";

export default function ShelfCarousel({ children }: { children: ReactNode }) {
  return (
    <div className="from-surface to-surface-muted border-border max-w-xl rounded-[20px] border bg-linear-to-b">
      {children}
    </div>
  );
}
