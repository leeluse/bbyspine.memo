import CatalogBookItem from "./CatalogBookItem";
import { SPINES } from "@/data/spines"

export default function CatalogBookList() {
    return (
        <div className="flex gap-4 overflow-x-auto m-5 scrollbar-none">
            {SPINES.map((spine) => (
                <CatalogBookItem
                    key={spine.id}
                    id={spine.id}
                    theme={spine.theme} />
            ))}
        </div>
    )
}
