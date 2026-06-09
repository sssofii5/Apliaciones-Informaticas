import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ProblemDisruption } from '@/components/problem-disruption'
import { TechGrid } from '@/components/tech-grid'
import { MaterialsFlow } from '@/components/materials-flow'
import { Commercial } from '@/components/commercial'
import { LeadForm } from '@/components/lead-form'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProblemDisruption />
      <TechGrid />
      <MaterialsFlow />
      <Commercial />
      <LeadForm />
      <Footer />
    </main>
  )
}
