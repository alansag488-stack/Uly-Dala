import { useState } from 'react'
import Head from 'next/head'
import BottomNav from '../components/BottomNav'
import { LoginModal, RegisterModal, CityModal } from '../components/Modals'
import ToursPage from '../components/ToursPage'
import MyRoutePage from '../components/MyRoutePage'
import CruisesPage from '../components/CruisesPage'
import MapPage from '../components/MapPage'
import CulturePage from '../components/CulturePage'
import SchedulePage from '../components/SchedulePage'
import ProfilePage from '../components/ProfilePage'

export default function Home() {
  const [activeNav, setActiveNav] = useState('home')
  const [homeTabs, setHomeTabs] = useState({ active: 'Туры' })
  const [modal, setModal] = useState(null) // 'login' | 'register' | 'city'
  const [city, setCity] = useState('Астана')

  const homeTabsList = ['Туры', 'Мой маршрут', 'Круизы']

  const renderContent = () => {
    if (activeNav === 'home') {
      if (homeTabs.active === 'Туры') return <ToursPage />
      if (homeTabs.active === 'Мой маршрут') return <MyRoutePage />
      if (homeTabs.active === 'Круизы') return <CruisesPage />
    }
    if (activeNav === 'map') return <MapPage />
    if (activeNav === 'culture') return <CulturePage />
    if (activeNav === 'schedule') return <SchedulePage />
    if (activeNav === 'profile') return <ProfilePage onLogin={() => setModal('login')} />
    return null
  }

  const getSearchPlaceholder = () => {
    if (activeNav === 'culture') return 'Поиск по культуре'
    if (activeNav === 'schedule') return 'Поиск билетов'
    return 'Поиск|'
  }

  return (
    <>
      <Head>
        <title>Uly Dala — Туризм Казахстана</title>
        <meta name="description" content="Откройте красоту Казахстана" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px 0' }}>
        <div className="app-wrapper">
          {/* Top Bar */}
          <div className="top-bar">
            <button className="menu-btn">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <span
              className="city"
              style={{ cursor: 'pointer' }}
              onClick={() => setModal('city')}
            >
              {city}
            </span>
          </div>

          {/* Search Bar */}
          <div className="search-bar">
            <span className="search-icon">🌐</span>
            <input type="text" placeholder={getSearchPlaceholder()} />
            <span className="search-icon">🔍</span>
          </div>

          {/* Tabs for Home */}
          {activeNav === 'home' && (
            <div className="tabs">
              {homeTabsList.map(t => (
                <button
                  key={t}
                  className={`tab-btn ${homeTabs.active === t ? 'active' : ''}`}
                  onClick={() => setHomeTabs({ active: t })}
                >
                  {t}
                </button>
              ))}
            </div>
          )}

          {/* Page Content */}
          <div className="page-content">
            {renderContent()}
          </div>

          {/* Bottom Nav */}
          <BottomNav active={activeNav} onChange={setActiveNav} />

          {/* Modals */}
          {modal === 'login' && (
            <LoginModal
              onClose={() => setModal(null)}
              onSwitchToRegister={() => setModal('register')}
            />
          )}
          {modal === 'register' && (
            <RegisterModal onClose={() => setModal(null)} />
          )}
          {modal === 'city' && (
            <CityModal onClose={() => setModal(null)} />
          )}
        </div>
      </main>
    </>
  )
}
