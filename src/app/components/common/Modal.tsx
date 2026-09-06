"use client"

import { useModalStore } from "@/store/useModalStore"
import { AddBookModal } from "@/app/components"
import { useEffect } from "react";

export default function Modal() {
    const { activeModal, closeModal } = useModalStore();




    return (
        <>
            {activeModal &&
                <div
                    onClick={closeModal}
                    className="absolute inset-0 bg-gray-950/50 z-999 flex items-center justify-center">
                    <div onClick={(e) => e.stopPropagation()}>
                        {activeModal === 'addBook' && <AddBookModal />}
                    </div>
                </div>}
        </>
    )
}
