'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Reveal } from '@/components/reveal'

export function LeadForm() {
  const [volume, setVolume] = useState([2500])
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const co2 = Math.round(volume[0] * 0.74 * 1.8)

  return (
    <section id="contacto" className="relative py-20 lg:py-28">
      <div
        className="absolute left-1/2 top-1/2 -z-10 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]"
        aria-hidden
      />
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-2xl sm:p-10">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Lleva EcoLoop a tu organización
              </h2>
              <p className="mx-auto mt-3 max-w-md text-pretty text-muted-foreground">
                Solicita tu presupuesto personalizado y la memoria técnica
                completa del sistema.
              </p>
            </div>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-primary/40 bg-primary/10 px-6 py-12 text-center">
                <CheckCircle2 className="size-12 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  ¡Solicitud recibida!
                </h3>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Nuestro equipo te enviará la memoria técnica y el presupuesto
                  en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="María González" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email corporativo</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="maria@empresa.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Nombre de tu empresa" required />
                </div>

                <div className="grid gap-3 rounded-2xl border border-border bg-secondary/40 p-5">
                  <div className="flex items-end justify-between">
                    <Label htmlFor="volume">Volumen de residuos mensual</Label>
                    <span className="font-mono text-lg font-bold text-primary">
                      {volume[0].toLocaleString('es')} kg
                    </span>
                  </div>
                  <Slider
                    id="volume"
                    min={500}
                    max={20000}
                    step={500}
                    value={volume}
                    onValueChange={(v) =>
                      setVolume(Array.isArray(v) ? [...v] : [v])
                    }
                  />
                  <p className="text-xs text-muted-foreground">
                    Impacto estimado:{' '}
                    <span className="font-semibold text-primary">
                      ~{co2.toLocaleString('es')} kg de CO₂
                    </span>{' '}
                    evitados al mes.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-2 w-full rounded-full bg-primary font-semibold text-primary-foreground shadow-[0_0_30px_-6px] shadow-primary/70 hover:bg-primary/90"
                >
                  <FileText className="size-4" />
                  Solicitar Presupuesto y Memoria Técnica
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
