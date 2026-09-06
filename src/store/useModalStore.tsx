import { create } from "zustand"

interface State {
    activeModal: "addBook" | null
}

interface Action {
    openModal: (modal: "addBook") => void,
    closeModal: () => void,
}

export const useModalStore = create<State & Action>((set) => ({
    activeModal: null,
    openModal: (modal) => set({ activeModal: modal }),
    closeModal: () => set({ activeModal: null })
}))