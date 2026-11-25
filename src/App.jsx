import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './shared components/Header'
import HomePage from './pages/HomePage'
import SpacesPage from './pages/SpacesPage'
import SpaceDetailsPage from './pages/SpaceDetailsPage'
import CheckoutPage from './pages/CheckoutPage'
import About from './pages/About'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Orders from './pages/Orders'
import AdminPage from './pages/AdminPage'

function App() {
  const { pathname } = useLocation()
  const isAdminRoute = pathname.startsWith('/admin')

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdminRoute && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/spaces" element={<SpacesPage />} />
          <Route path="/spaces/:id" element={<SpaceDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/how-it-works" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Orders />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
