import Hero from '../components/home/Hero'
import CategoriesSection from '../components/home/CategoriesSection'
import RecommednedSec from '../components/home/RecommednedSec'
import StepsSec from '../components/home/StepsSec'
import BenefitsSec from '../components/home/BenefitsSec'
import AdSec from '../components/home/AdSec'

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <CategoriesSection />
      <RecommednedSec />
      <StepsSec />
      <BenefitsSec />
      <AdSec />
    </div>
  )
}
