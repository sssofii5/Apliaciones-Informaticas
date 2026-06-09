import { ArrowRight, Play, Zap } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { HeroDashboard } from '@/components/hero-dashboard'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="grid-bg absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 -z-10 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Zap className="size-3.5" />
            Ganador de Innovación Tecnológica 2026
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            EcoLoop: Inteligencia Artificial que Transforma Residuos en{' '}
            <span className="text-primary text-glow">
              Recursos Circulares
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            EcoLoop fusiona visión artificial de última generación y
            micro-robótica industrial para detectar, clasificar y transformar
            los residuos de tu organización en eco-ladrillos utilizables. Sin
            errores humanos, sin separación manual. Una solución circular de
            punta a punta que automatiza la sustentabilidad y reduce tu huella
            de carbono en tiempo real.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#roi"
              className={cn(
                buttonVariants({ variant: 'default', size: 'lg' }),
                'rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-[0_0_30px_-6px] shadow-primary/70 transition-transform hover:scale-[1.02] hover:bg-primary/90',
              )}
            >
              Simular Retorno de Inversión
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#tecnologia"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'rounded-full border-border bg-transparent px-6 font-semibold text-foreground hover:bg-secondary',
              )}
            >
              <Play className="size-4" />
              Ver Hardware en Acción
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            {[
              { v: '99.4%', l: 'Precisión IA' },
              { v: '4', l: 'Flujos de material' },
              { v: '24/7', l: 'Operación autónoma' },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-mono text-2xl font-bold text-foreground">
                  {s.v}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150}>
          <HeroDashboard />
        </Reveal>
      </div>
    </section>
  )
}
