import AboutHero from '../components/about/AboutHero'
import AboutSteps from '../components/about/AboutSteps'
import DashboardPreviewSec from '../components/about/DashboardPreviewSec'
import AboutFeaturesSec from '../components/about/AboutFeaturesSec'
import AboutFaqSec from '../components/about/AboutFaqSec'
import AboutCtaSec from '../components/about/AboutCtaSec'

export default function About() {
  return (
    <div className="w-full">
      <AboutHero />
      <AboutSteps />
      <DashboardPreviewSec />
      <AboutFeaturesSec />
      <AboutFaqSec />
      <AboutCtaSec />
    </div>
  )
}
