"use client"

import { useModalStore } from "@/store/useModalStore"
import { AddBookModal } from "@/app/components"

export default function Modal() {
    const { activeModal } = useModalStore();

    return (
        <>
            {activeModal &&
                <div className="absolute inset-0 bg-gray-950/50 z-999 flex items-center justify-center">
                    {activeModal === 'addBook' && <AddBookModal />}
                </div>}
        </>
    )
}
