import SpacesHeader from '../components/spaces/SpacesHeader'
import SpacesFilter from '../components/spaces/SpacesFilter'
import SpacesGrid from '../components/spaces/SpacesGrid'

export default function SpacesPage() {
  return (
    <div className="w-full min-h-screen bg-page/60 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SpacesHeader />

        <div className="grid grid-cols-1 lg:grid-cols-[290px_1fr] gap-6 items-start">
          <SpacesFilter />
          <SpacesGrid />
        </div>
      </div>
    </div>
  )
}
