import { MingHeader, MingFooter } from '@/components/layout'
import { ImperialDecree, CourtNews, CitizenFeedback } from '@/components/home'

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory">
      <MingHeader />
      
      <main>
        <ImperialDecree />
        <CourtNews />
        <CitizenFeedback />
      </main>
      
      <MingFooter />
    </div>
  )
}
