import { ScanEye, Bot, Boxes, FileBarChart } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const cards = [
  {
    icon: ScanEye,
    title: 'Sensores Ópticos con IA',
    desc: 'Reconocimiento instantáneo de formas, color y densidad de polímeros con visión por computadora entrenada en millones de muestras.',
    tag: 'Visión',
  },
  {
    icon: Bot,
    title: 'Brazo Robótico de Alta Velocidad',
    desc: 'Separación física de precisión milimétrica que opera de forma continua, sin fatiga ni margen de error humano.',
    tag: 'Robótica',
  },
  {
    icon: Boxes,
    title: 'Módulos de Almacenamiento Inteligente',
    desc: 'Contenedores optimizados y monitoreados para Plástico, Papel, Vidrio y E-waste, con alertas de capacidad en tiempo real.',
    tag: 'Hardware',
  },
  {
    icon: FileBarChart,
    title: 'Software de Reportes RSE',
    desc: 'Exportación de datos listos para auditorías de sustentabilidad, con métricas de CO₂ evitado y trazabilidad completa.',
    tag: 'Software',
  },
]

export function TechGrid() {
  return (
    <section id="tecnologia" className="relative py-20 lg:py-28">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            La innovación central
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cuatro sistemas que trabajan como uno solo.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Cada componente de EcoLoop fue diseñado para eliminar la
            intervención manual y maximizar la pureza del material recuperado.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_-10px] hover:shadow-primary/40">
                <span className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <card.icon className="size-6" />
                </span>
                <span className="mt-5 inline-block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {card.tag}
                </span>
                <h3 className="mt-1 text-lg font-bold leading-snug text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.desc}
                </p>
                <span className="mt-5 block font-mono text-xs text-primary/60">
                  0{i + 1}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
