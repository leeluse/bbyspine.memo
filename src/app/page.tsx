import { Header, BookShelf, Modal } from "@/app/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-bookshelf">
      <Header />
      <BookShelf />
      <Modal />
    </main>
  );
}
