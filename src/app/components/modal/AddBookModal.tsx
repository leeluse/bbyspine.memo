"use client";
import { useModalStore } from "@/store/useModalStore";
import {
  ShelfCarousel,
  CommonBtn,
  CatalogBookList,
} from "@/app/components/index";
import { MODAL_COPY } from "@/constants/copy";
import { useState } from "react";

export default function AddBookModal() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section className="glass-panel flex min-h-1/2 flex-col p-6">
      <AddBookModalHeader />
      <div className="flex h-full flex-1 flex-col justify-between">
        <ShelfCarousel>
          <CatalogBookList selected={selected} setSelected={setSelected} />
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
        {MODAL_COPY.BADGE}
      </small>
      <h2 className="font-serif-brand text-brand-stroke text-[28px] font-bold italic">
        {MODAL_COPY.HEADING}
      </h2>
    </header>
  );
}

export function ButtonGroup() {
  const { closeModal } = useModalStore();
  return (
    <div className="inline-flex w-full items-center justify-center gap-2 pt-7 pb-3">
      <CommonBtn
        label={MODAL_COPY.BUTTON_CANCEL}
        color="blue"
        onClick={closeModal}
      />
      <CommonBtn
        label={MODAL_COPY.BUTTON_ADD}
        color="pink"
        onClick={() => {}}
      />
    </div>
  );
}
