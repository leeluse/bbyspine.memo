import AcrylicShelf from "./AcrylicShelf";
import BookSpineList from "../bookspine/BookSpineList";

export default function BookShelf() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <BookSpineList />
      <AcrylicShelf />
    </div>
  );
}
