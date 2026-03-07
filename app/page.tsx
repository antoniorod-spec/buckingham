import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { EducationLevels } from "@/components/education-levels"
import { WhyBuckingham } from "@/components/why-buckingham"
import { BilingualSection } from "@/components/bilingual-section"
import { SchoolLifeGallery } from "@/components/school-life-gallery"
import { Testimonials } from "@/components/testimonials"
import { HistoryTimeline } from "@/components/history-timeline"
import { AdmissionsForm } from "@/components/admissions-form"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <EducationLevels />
        <WhyBuckingham />
        <BilingualSection />
        <SchoolLifeGallery />
        <Testimonials />
        <HistoryTimeline />
        <AdmissionsForm />
      </main>
      <Footer />
    </div>
  )
}
