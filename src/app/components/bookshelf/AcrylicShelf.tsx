export default function AcrylicShelf() {
    return (
        <div className="relative w-11/12 sm:w-2/3 h-5 rounded-md border border-white/30 border-b-white/10 bg-linear-to-b from-white/20 via-sky-100/5 to-white/5 backdrop-blur-md shadow-[0_10px_25px_rgba(15,23,42,0.15),inset_0_1px_1px_rgba(255,255,255,0.4)]">
            <div className="absolute top-0.75 left-1 right-1 h-px bg-linear-to-r from-transparent via-white/80 to-transparent" />
            <div className="absolute top-0 bottom-0 left-0 w-px bg-linear-to-b from-white/50 to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-px bg-linear-to-b from-white/50 to-transparent" />
            <div className="absolute bottom-0.5 left-2 right-2 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
        </div>
    )
}
