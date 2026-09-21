import { ReactNode } from "react";

export default function ShelfCarousel({ children }: { children: ReactNode }) {
  return <div className="glass-panel max-w-xl">{children}</div>;
}
