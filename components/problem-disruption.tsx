import { CheckCircle2, XCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const problems = [
  'El error humano arruina hasta el 30% de los lotes reciclables.',
  'Contaminación cruzada que deriva en multas corporativas.',
  'Procesos lentos, costosos y sin trazabilidad auditable.',
  'Imposible reportar métricas RSE confiables en tiempo real.',
]

const solutions = [
  'Sensores ópticos con IA clasifican con precisión matemática.',
  'Separación perfecta y consistente, sin intervención humana.',
  'Trazabilidad total: cada gramo registrado y auditable.',
  'Reportes de sustentabilidad exportables al instante.',
]

export function ProblemDisruption() {
  return (
    <section id="impacto" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            El punto de quiebre
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            La separación manual está obsoleta. La autonomía es inevitable.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-border bg-secondary/40 p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-destructive/15 text-destructive">
                  <XCircle className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-destructive">
                    El statu quo ineficiente
                  </p>
                  <h3 className="text-xl font-bold text-foreground">
                    El Error Actual: Separación Manual
                  </h3>
                </div>
              </div>
              <ul className="mt-6 space-y-4">
                {problems.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <XCircle className="mt-0.5 size-4 shrink-0 text-destructive/70" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="relative h-full overflow-hidden rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/15 via-card to-card p-8 shadow-[0_0_40px_-12px] shadow-primary/40">
              <div
                className="absolute -right-12 -top-12 size-40 rounded-full bg-primary/20 blur-3xl"
                aria-hidden
              />
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <CheckCircle2 className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    La disrupción de EcoLoop
                  </p>
                  <h3 className="text-xl font-bold text-foreground">
                    Clasificación Autónoma por IA
                  </h3>
                </div>
              </div>
              <ul className="mt-6 space-y-4">
                {solutions.map((s) => (
                  <li key={s} className="flex gap-3 text-sm text-foreground/90">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
