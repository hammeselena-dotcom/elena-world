export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6">
      <div className="alert alert-info">
        <span>Hi 👋 Ich bin Elena — Web, Design & KI machen mir Spaß.</span>
      </div>
      <h1 className="text-3xl font-black">Über mich</h1>
      <p className="opacity-85">
        Diese Seite habe ich mit <b>Next.js</b>, <b>Tailwind CSS</b> und <b>daisyUI</b> gebaut.
        Ziel: Eine kleine, feine Präsenz im Web, die ich kontinuierlich erweitere.
      </p>
      <div className="stats shadow bg-base-100">
        <div className="stat">
          <div className="stat-title">Tech</div>
          <div className="stat-value text-primary">Next.js</div>
          <div className="stat-desc">App Router & Static Export</div>
        </div>
        <div className="stat">
          <div className="stat-title">Design</div>
          <div className="stat-value text-secondary">daisyUI</div>
          <div className="stat-desc">Komponenten & Themes</div>
        </div>
      </div>
    </div>
  );
}
