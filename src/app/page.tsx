import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="aurora rounded-box mt-8">
        <div className="hero min-h-[60vh] bg-base-100/60">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-black leading-tight">
                Willkommen in <span className="text-primary">Elena’s World</span> 🌍
              </h1>
              <p className="py-6 opacity-80 text-lg">
                Eine persönliche Website mit <b>Next.js</b>, <b>Tailwind</b> & <b>daisyUI</b>.
                Projekte, Ideen und Experimente – schön und schnell.
              </p>
              <div className="join">
                <Link href="/projects" className="btn btn-primary join-item">Projekte ansehen</Link>
                <Link href="/about" className="btn btn-outline join-item">Über mich</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">🚀 Performance</h2>
            <p>Next.js + Turbopack sorgen für ultraschnelle Seiten.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">🎨 Design</h2>
            <p>Tailwind & daisyUI liefern ein modernes, konsistentes UI-Kit.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">🔒 Sicher & statisch</h2>
            <p>Statisch exportiert – perfekt für GitHub Pages Hosting.</p>
          </div>
        </div>
      </section>

      {/* MINI-CTA */}
      <section className="rounded-box bg-base-200 p-8 text-center">
        <h3 className="text-2xl font-bold mb-2">Lust auf mehr?</h3>
        <p className="opacity-80 mb-4">Schau dir meine aktuellen Projekte an oder lies mehr über mich.</p>
        <div className="join">
          <Link href="/projects" className="btn btn-secondary join-item">Zu den Projekten</Link>
          <Link href="/about" className="btn btn-outline join-item">Mehr über mich</Link>
        </div>
      </section>
    </div>
  );
}
