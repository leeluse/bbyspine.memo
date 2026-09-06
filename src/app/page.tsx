import { Header, BookShelf, Modal } from "@/app/components";

export default function Home() {
  return (
    <main className="bg-bookshelf min-h-screen flex flex-col">
      <Header />
      <BookShelf />
      <Modal />
    </main>
  )
}
