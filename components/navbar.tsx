'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { EcoLoopLogo } from '@/components/eco-loop-logo'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Modelos', href: '#modelos' },
  { label: 'ROI Comercial', href: '#roi' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <EcoLoopLogo className="size-7 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Eco<span className="text-primary">Loop</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'h-9 rounded-full bg-primary px-5 font-semibold text-primary-foreground shadow-[0_0_24px_-4px] shadow-primary/60 hover:bg-primary/90',
            )}
          >
            Agendar Demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/70 bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants({ variant: 'default' }),
              'mt-3 h-9 w-full rounded-full bg-primary font-semibold text-primary-foreground',
            )}
          >
            Agendar Demo
          </a>
        </div>
      )}
    </header>
  )
}
