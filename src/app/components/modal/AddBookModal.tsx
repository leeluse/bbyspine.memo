import { useModalStore } from "@/store/useModalStore";
import {
  ShelfCarousel,
  CommonBtn,
  CatalogBookList,
} from "@/app/components/index";

export default function AddBookModal() {
  return (
    <section className="glass-panel flex min-h-1/2 flex-col p-6">
      <AddBookModalHeader />
      <div className="flex h-full flex-1 flex-col justify-between">
        <ShelfCarousel>
          <CatalogBookList />
        </ShelfCarousel>
        <ButtonGroup />
      </div>
    </section>
  );
}

export function AddBookModalHeader() {
  return (
    <header className="h-1/3 rounded py-4 text-center">
      <p className="text-brand-stroke">✦</p>
      <small className="text-secondary-foreground mb-1 text-xs font-bold tracking-widest uppercase">
        book catalog
      </small>
      <h2 className="font-serif-brand text-brand-stroke text-[28px] font-bold italic">
        which book should join the shelf?
      </h2>
    </header>
  );
}

export function ButtonGroup() {
  const { closeModal } = useModalStore();
  return (
    <div className="my-3 inline-flex w-full items-center justify-center gap-2">
      <CommonBtn label="cancel" color="blue" onClick={closeModal} />
      <CommonBtn label="add to shelf" color="pink" onClick={() => {}} />
    </div>
  );
}
