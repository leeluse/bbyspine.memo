"use client";

import { useModalStore } from "@/store/useModalStore";
import CommonBtn from "../button/CommonBtn";
import PlusIcon from "../icons/PlusIcon";
import { BRAND_COPY } from "@/constants/copy";

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
      <h1 className="title-shadow font-serif-brand text-brand-title text-[46px] leading-none font-bold tracking-[-0.5px] italic">
        {BRAND_COPY.TITLE}
      </h1>
      <p className="desc-shadow text-brand-desc mt-2 max-w-130 text-[13px] font-semibold">
        {BRAND_COPY.DESCRIPTION}
      </p>
    </div>
  );
}
