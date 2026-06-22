import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PwaUpdater } from '@/components/layout/PwaUpdater'

export default function App() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        <Outlet />
      </main>
      <Footer />
      <PwaUpdater />
      <ScrollRestoration />
    </div>
  )
}
