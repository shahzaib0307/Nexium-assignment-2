import DemoComponent from '@/components/DemoComponent'

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-indigo-100 via-blue-50 to-purple-100 py-6 px-3">
      <section className="w-full flex flex-col items-center">
        <div className="w-full max-w-3xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-5xl font-semibold text-slate-800 tracking-tight">AI Blog Summarizer</h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600">Try out the summary and Urdu translation features</p>
          </div>

          <DemoComponent />

          <div className="mt-14 text-center text-sm text-slate-500">
            <p>Note: This is a limited demo. Connect your environment & database to enable full blog scraping support.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
