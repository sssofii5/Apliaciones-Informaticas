import { TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const clients = [
  'NOVATEK',
  'GreenForge',
  'Helix Corp',
  'Vanta Labs',
  'Orbital',
  'Cumbre',
]

export function Commercial() {
  return (
    <section id="roi" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/15 via-card to-card px-6 py-12 text-center sm:px-12 lg:py-16">
            <div
              className="absolute left-1/2 top-0 size-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
              aria-hidden
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <TrendingUp className="size-3.5" /> Activo circular
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              No es un gasto, es un{' '}
              <span className="text-primary text-glow">activo circular.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-muted-foreground lg:text-lg">
              Transformamos los residuos de tu empresa en recursos tangibles:
              eco-ladrillos certificados, créditos de carbono y reportes RSE que
              elevan el valor de tu marca.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Organizaciones que ya confían en nuestra tecnología
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((c) => (
              <span
                key={c}
                className="text-center text-lg font-bold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
