export default function AcrylicShelf() {
  return (
    <div className="relative h-3 w-11/12 shrink-0 rounded-sm border border-white/30 border-b-white/10 bg-linear-to-b from-white/20 via-sky-100/5 to-white/5 shadow-[0_10px_25px_rgba(15,23,42,0.15),inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-md sm:h-5 sm:w-11/12 sm:rounded-md lg:w-8/12">
      <div className="absolute top-0.75 right-1 left-1 h-px bg-linear-to-r from-transparent via-white/80 to-transparent" />
      <div className="absolute top-0 bottom-0 left-0 w-px bg-linear-to-b from-white/50 to-transparent" />
      <div className="absolute top-0 right-0 bottom-0 w-px bg-linear-to-b from-white/50 to-transparent" />
      <div className="absolute right-2 bottom-0.5 left-2 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
