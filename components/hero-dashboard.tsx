'use client'

import { useEffect, useState } from 'react'
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts'
import { Activity, Cpu, Recycle, Leaf } from 'lucide-react'

const data = [
  { t: '08h', v: 42 },
  { t: '10h', v: 55 },
  { t: '12h', v: 61 },
  { t: '14h', v: 58 },
  { t: '16h', v: 70 },
  { t: '18h', v: 74 },
  { t: '20h', v: 82 },
]

function useCountUp(target: number, decimals = 0) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const duration = 1400
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target])
  return value.toFixed(decimals)
}

function Stat({
  icon: Icon,
  label,
  value,
  unit,
  accent,
}: {
  icon: typeof Activity
  label: string
  value: string
  unit: string
  accent: string
}) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="size-3.5" style={{ color: accent }} />
        <span className="text-[11px] uppercase tracking-wider">{label}</span>
      </div>
      <p className="mt-2 font-mono text-2xl font-semibold text-foreground">
        {value}
        <span className="ml-1 text-sm font-normal text-muted-foreground">
          {unit}
        </span>
      </p>
    </div>
  )
}

export function HeroDashboard() {
  const total = useCountUp(12.5, 1)
  const rate = useCountUp(74, 0)
  const co2 = useCountUp(5.7, 1)

  return (
    <div className="relative">
      <div
        className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary shadow-[0_0_8px] shadow-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              EcoLoop OS · Unidad #A-204
            </span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
            <Cpu className="size-3" /> En vivo
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 p-5">
          <Stat
            icon={Recycle}
            label="Procesado"
            value={total}
            unit="kg"
            accent="oklch(0.86 0.27 145)"
          />
          <Stat
            icon={Activity}
            label="Tasa"
            value={rate}
            unit="%"
            accent="oklch(0.7 0.18 245)"
          />
          <Stat
            icon={Leaf}
            label="CO₂ evitado"
            value={co2}
            unit="kg"
            accent="oklch(0.82 0.16 90)"
          />
        </div>

        <div className="px-3 pb-5">
          <div className="mb-2 flex items-center justify-between px-2">
            <span className="text-xs font-medium text-foreground">
              Eficiencia del algoritmo de IA
            </span>
            <span className="font-mono text-xs text-primary">+18.4%</span>
          </div>
          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 8, right: 8, left: 8, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="oklch(0.86 0.27 145)"
                      stopOpacity={0.5}
                    />
                    <stop
                      offset="100%"
                      stopColor="oklch(0.86 0.27 145)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="t"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: 'oklch(0.68 0.02 256)', fontSize: 11 }}
                />
                <Tooltip
                  cursor={{ stroke: 'oklch(0.86 0.27 145 / 0.3)' }}
                  contentStyle={{
                    background: 'oklch(0.2 0.02 264)',
                    border: '1px solid oklch(0.3 0.02 264)',
                    borderRadius: 8,
                    fontSize: 12,
                    color: 'oklch(0.97 0.01 240)',
                  }}
                  labelStyle={{ color: 'oklch(0.68 0.02 256)' }}
                />
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke="oklch(0.86 0.27 145)"
                  strokeWidth={2.5}
                  fill="url(#grad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
