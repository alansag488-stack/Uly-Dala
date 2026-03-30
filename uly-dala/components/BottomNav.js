export default function BottomNav({ active, onChange }) {
  const items = [
    {
      id: 'home',
      label: 'Главная',
      icon: (active) => (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Yurt icon */}
          <ellipse cx="20" cy="28" rx="14" ry="5" stroke={active ? '#1e2340' : '#555'} strokeWidth="2" fill="none"/>
          <path d="M6 28 Q7 18 20 14 Q33 18 34 28" stroke={active ? '#1e2340' : '#555'} strokeWidth="2" fill={active ? '#1e2340' : 'none'}/>
          <line x1="20" y1="10" x2="20" y2="14" stroke={active ? '#1e2340' : '#555'} strokeWidth="2"/>
          <rect x="16" y="26" width="8" height="7" rx="1" stroke={active ? '#1e2340' : '#555'} strokeWidth="1.5"/>
          <line x1="10" y1="24" x2="10" y2="28" stroke={active ? '#1e2340' : '#555'} strokeWidth="1.5"/>
          <line x1="30" y1="24" x2="30" y2="28" stroke={active ? '#1e2340' : '#555'} strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      id: 'map',
      label: 'Карта',
      icon: (active) => (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8 C14 8 10 13 10 18 C10 25 20 34 20 34 C20 34 30 25 30 18 C30 13 26 8 20 8Z" fill={active ? '#1e2340' : '#555'}/>
          <circle cx="20" cy="18" r="4" fill="white"/>
        </svg>
      )
    },
    {
      id: 'culture',
      label: 'Культура',
      icon: (active) => (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 28 L16 14 L20 8 L24 14 L32 28 Z" fill={active ? '#1e2340' : '#555'}/>
          <circle cx="20" cy="18" r="3" fill="white"/>
          <line x1="8" y1="28" x2="32" y2="28" stroke={active ? '#1e2340' : '#555'} strokeWidth="2"/>
          <ellipse cx="20" cy="28" rx="6" ry="3" fill={active ? '#1e2340' : '#555'}/>
        </svg>
      )
    },
    {
      id: 'schedule',
      label: 'Маршрут',
      icon: (active) => (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="10" width="24" height="22" rx="3" stroke={active ? '#1e2340' : '#555'} strokeWidth="2" fill={active ? '#f0e8d8' : 'none'}/>
          <line x1="8" y1="17" x2="32" y2="17" stroke={active ? '#1e2340' : '#555'} strokeWidth="1.5"/>
          <line x1="14" y1="10" x2="14" y2="6" stroke={active ? '#1e2340' : '#555'} strokeWidth="2"/>
          <line x1="26" y1="10" x2="26" y2="6" stroke={active ? '#1e2340' : '#555'} strokeWidth="2"/>
          <text x="20" y="27" textAnchor="middle" fontSize="9" fill={active ? '#1e2340' : '#555'} fontWeight="bold">29</text>
        </svg>
      )
    },
    {
      id: 'profile',
      label: 'Профиль',
      icon: (active) => (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Person with hat */}
          <circle cx="20" cy="16" r="7" fill={active ? '#1e2340' : '#555'}/>
          <path d="M8 34 C8 26 32 26 32 34" fill={active ? '#1e2340' : '#555'}/>
          <rect x="12" y="9" width="16" height="4" rx="2" fill={active ? '#555' : '#888'}/>
          <rect x="10" y="9" width="20" height="2" rx="1" fill={active ? '#888' : '#aaa'}/>
        </svg>
      )
    }
  ]

  return (
    <div className="bottom-nav">
      {items.map(item => (
        <button
          key={item.id}
          className={`nav-item ${active === item.id ? 'active' : ''}`}
          onClick={() => onChange(item.id)}
        >
          {item.icon(active === item.id)}
        </button>
      ))}
    </div>
  )
}
