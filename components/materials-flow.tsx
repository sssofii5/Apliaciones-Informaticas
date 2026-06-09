import { Reveal } from '@/components/reveal'

const materials = [
  {
    name: 'Plásticos',
    pct: '25%',
    color: 'var(--plastic)',
    desc: 'PET, HDPE y polímeros mixtos identificados por densidad.',
  },
  {
    name: 'Papel',
    pct: '25%',
    color: 'var(--paper)',
    desc: 'Cartón y celulosa separados por textura y fibra.',
  },
  {
    name: 'Vidrio',
    pct: '25%',
    color: 'var(--glass)',
    desc: 'Clasificación por opacidad y reflectividad espectral.',
  },
  {
    name: 'E-Waste',
    pct: '25%',
    color: 'var(--ewaste)',
    desc: 'Componentes electrónicos aislados para tratamiento seguro.',
  },
]

export function MaterialsFlow() {
  return (
    <section id="modelos" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Flujos de material
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Separación automática por categorías
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((m, i) => (
            <Reveal key={m.name} delay={i * 90}>
              <article
                className="group relative h-full overflow-hidden rounded-2xl border bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{ borderColor: `color-mix(in oklch, ${m.color} 35%, transparent)` }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: m.color }}
                  aria-hidden
                />
                <div
                  className="absolute -right-10 -top-10 size-28 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                  style={{ background: m.color }}
                  aria-hidden
                />
                <p
                  className="font-mono text-4xl font-bold"
                  style={{ color: m.color }}
                >
                  {m.pct}
                </p>
                <h3 className="mt-3 text-lg font-bold text-foreground">
                  {m.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.desc}
                </p>
                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full"
                    style={{ width: m.pct, background: m.color }}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
