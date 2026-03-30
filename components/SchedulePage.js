import { useState } from 'react'

export default function SchedulePage() {
  const [tab, setTab] = useState('Билеты')
  const tabs = ['Билеты', 'Отели', 'Машины']

  return (
    <>
      <div className="tabs" style={{ marginBottom: 20 }}>
        {tabs.map(t => (
          <button
            key={t}
            className={`tab-btn ${tab === t ? 'active' : ''}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div style={{ padding: '20px 16px', color: '#8a8fa8', textAlign: 'center', marginTop: 30 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>
          {tab === 'Билеты' ? '🎫' : tab === 'Отели' ? '🏨' : '🚗'}
        </div>
        <p style={{ fontSize: 15 }}>Раздел «{tab}» в разработке</p>
        <p style={{ fontSize: 13, marginTop: 8 }}>Скоро здесь появятся предложения</p>
      </div>
    </>
  )
}
