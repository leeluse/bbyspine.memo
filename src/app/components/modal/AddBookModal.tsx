import { useModalStore } from "@/store/useModalStore";
import { ShelfCarousel, CommonBtn } from "../index";

export default function AddBookModal() {
    return (
        <section className="modal min-w-2xl min-h-1/2 p-3 flex flex-col">
            <header className="bg-linear-to-b from-white/40 to-white/10 rounded-[28px_28px_50%_50%] pt-4 pb-10 text-center h-1/3">
                <p className="text-brand-stroke">✦</p>
                <small className="font-bold text-btn-blue mb-1 tracking-widest uppercase text-xs">book catalog</small>
                <h2 className="text-brand-stroke  font-bold text-[28px] font-serif-brand italic ">which book should join the shelf?</h2>
            </header>
            <div className="flex-1 h-full flex flex-col justify-between">
                <ShelfCarousel />
                <ButtonGroup />
            </div>
        </section>
    )
}


export function ButtonGroup() {
    const { closeModal } = useModalStore()

    return (
        <div className="w-full gap-2 inline-flex items-center justify-center my-3">
            <CommonBtn
                label="cancel"
                color="blue"
                onClick={closeModal}
            />
            <CommonBtn
                label="add to shelf"
                color="pink"
                onClick={() => { }}
            />
        </div>
    )
}