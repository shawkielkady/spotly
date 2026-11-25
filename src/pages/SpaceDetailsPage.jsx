import SpaceGallery from '../components/space details/SpaceGallery'
import SpaceDetailsInfo from '../components/space details/SpaceDetailsInfo'
import SpaceBookingCard from '../components/space details/SpaceBookingCard'

export default function SpaceDetailsPage() {
  return (
    <div className="w-full min-h-screen bg-page/60 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SpaceGallery />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
          <SpaceDetailsInfo />
          <SpaceBookingCard />
        </div>
      </div>
    </div>
  )
}

