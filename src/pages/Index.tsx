import { Button } from '@/components/ui/button'

export default function IndexPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="rounded-full border border-zinc-300 px-3 py-1 text-xs uppercase tracking-wide text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
        LKLabs Studios
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
        Project bootstrap is ready
      </h1>
      <p className="max-w-2xl text-sm text-zinc-600 sm:text-base dark:text-zinc-300">
        Tailwind, Vitest, Supabase wiring, and shadcn-style UI primitives are set up so you
        can start shipping feature code immediately.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button>Primary Action</Button>
        <Button variant="outline">Secondary Action</Button>
      </div>
    </main>
  )
}
