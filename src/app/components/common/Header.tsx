"use client";

import { useModalStore } from "@/store/useModalStore";
import CommonBtn from "../button/CommonBtn";
import PlusIcon from "../icons/PlusIcon";

export default function Header() {
  const { openModal } = useModalStore();

  function handleOpenModal() {
    openModal("addBook");
  }

  return (
    <header className="flex h-fit flex-col items-end justify-between gap-5 p-5 sm:flex-row sm:items-center sm:gap-0">
      <Logo />
      <CommonBtn
        label="add book"
        color="blue"
        icon={<PlusIcon />}
        onClick={handleOpenModal}
      />
    </header>
  );
}

export function Logo() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="title-shadow font-serif-brand text-[46px] leading-none font-bold tracking-[-0.5px] text-brand-title italic">
        bbyspine.memo
      </h1>
      <p className="desc-shadow mt-2 max-w-130 text-[13px] font-semibold">
        your tiny archive. every book is a place to collect images, scraps and
        things you don&apos;t want to forget.
      </p>
    </div>
  );
}
