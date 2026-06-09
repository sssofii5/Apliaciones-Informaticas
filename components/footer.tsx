import { EcoLoopLogo } from '@/components/eco-loop-logo'

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center lg:flex-row lg:px-8 lg:text-left">
        <div className="flex items-center gap-2.5">
          <EcoLoopLogo className="size-6 text-primary" />
          <span className="font-bold tracking-tight text-foreground">
            Eco<span className="text-primary">Loop</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          Reciclaje corporativo autónomo, impulsado por IA y robótica.
        </p>
        <p className="text-xs text-muted-foreground">
          {'© '}
          {new Date().getFullYear()} EcoLoop. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
