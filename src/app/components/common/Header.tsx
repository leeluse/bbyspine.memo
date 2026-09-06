"use client"

import { useModalStore } from "@/store/useModalStore";
import CommonBtn from "../button/CommonBtn";
import PlusIcon from "../icons/PlusIcon";

export default function Header() {
    const { openModal } = useModalStore()

    function handleOpenModal() {
        openModal('addBook')
    }

    return (
        <header className="h-fit p-5 flex flex-col gap-5 justify-between items-end sm:items-center sm:flex-row sm:gap-0">
            <Logo />
            <CommonBtn
                label="add book"
                color="blue"
                icon={<PlusIcon />}
                onClick={handleOpenModal}
            />
        </header>
    )
}


export function Logo() {
    return (
        <div className="flex flex-col gap-2 ">
            <h1 className="font-serif-brand italic font-bold text-[46px] leading-none text-brand-title title-shadow tracking-[-0.5px]">
                bbyspine.memo</h1>
            <p className="mt-2 max-w-130 font-semibold desc-shadow text-[13px] ">
                your tiny archive. every book is a place to collect images, scraps and things you don&apos;t want to forget.
            </p>
        </div>
    )
}