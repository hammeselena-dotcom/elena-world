export default function ProjectsPage() {
  const projects = [
    {
      title: "Meine Website",
      description: "Mein erstes Next.js-Projekt auf GitHub Pages.",
      link: "https://hammeselena-dotcom.github.io/elena-world/",
      tag: "Web"
    },
    { title: "AI Workshop", description: "Ein Beispielprojekt zu KI-Themen.", link: "#", tag: "AI" },
    { title: "Design System", description: "Wiederverwendbare UI-Komponenten.", link: "#", tag: "UI" },
  ];

  return (
    <div className="py-10 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-black">Projekte</h1>
        <p className="opacity-70">Eine Auswahl meiner aktuellen Arbeiten</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer"
             className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <div className="flex items-start justify-between">
                <h2 className="card-title">{p.title}</h2>
                <span className="badge badge-primary">{p.tag}</span>
              </div>
              <p className="opacity-80">{p.description}</p>
              <div className="card-actions justify-end">
                <span className="btn btn-link">Mehr erfahren →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
