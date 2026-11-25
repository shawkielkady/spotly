import { useState } from 'react'
import AdminSidebar from '../components/admin/AdminSidebar'
import AdminTopbar from '../components/admin/AdminTopbar'
import AdminOverview from '../components/admin/AdminOverview'
import AdminSpaces from '../components/admin/AdminSpaces'
import AdminBookings from '../components/admin/AdminBookings'
import AdminUsers from '../components/admin/AdminUsers'
import AdminSettings from '../components/admin/AdminSettings'

const TAB_TITLES = {
  overview: 'نظرة عامة على المنصة',
  spaces: 'إدارة المساحات التجارية',
  bookings: 'الحجوزات ومدفوعات إنستاباي',
  users: 'المستخدمين وملاك المساحات',
  settings: 'إعدادات المنصة',
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case 'spaces':
        return <AdminSpaces />
      case 'bookings':
        return <AdminBookings />
      case 'users':
        return <AdminUsers />
      case 'settings':
        return <AdminSettings />
      case 'overview':
      default:
        return <AdminOverview />
    }
  }

  return (
    <div className="min-h-screen flex bg-page/60">
      <AdminSidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 min-w-0 flex flex-col">
        <AdminTopbar
          title={TAB_TITLES[activeTab]}
          onOpenSidebar={() => setIsSidebarOpen(true)}
        />

        <main className="flex-1 p-4 sm:p-6 max-w-7xl w-full mx-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

