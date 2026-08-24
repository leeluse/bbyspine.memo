export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100 p-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Next.js Setup Complete
        </h1>
        <p className="text-slate-400 text-sm">
          Tailwind CSS, Zustand, and TanStack Query are ready. Start building your app by editing <code className="bg-slate-900 px-1.5 py-0.5 rounded text-indigo-400">src/app/page.tsx</code>.
        </p>
      </div>
    </main>
  )
}
