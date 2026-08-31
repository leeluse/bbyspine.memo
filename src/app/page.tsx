import { Header, BookShelf } from "@/app/components";

export default function Home() {
  return (
    <main className="bg-bookshelf min-h-screen">
      <Header />
      <BookShelf />
    </main>
  )
}
