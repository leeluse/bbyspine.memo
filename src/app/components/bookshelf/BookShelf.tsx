import AcrylicShelf from "./AcrylicShelf";
import BookSpineList from "../bookspine/BookSpineList";

export default function BookShelf() {
  return (
    <div className="py-20 flex flex-col items-center">
        <BookSpineList />
        <AcrylicShelf />
    </div>
  )
}

