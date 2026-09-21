import CatalogBookItem from "./CatalogBookItem";
import { SPINES } from "@/data/spines";

export default function CatalogBookList() {
  return (
    <div className="m-5 flex scrollbar-none gap-4 overflow-x-auto">
      {SPINES.map(({ id, title, theme }) => (
        <CatalogBookItem key={id} id={id} title={title} theme={theme} />
      ))}
    </div>
  );
}
