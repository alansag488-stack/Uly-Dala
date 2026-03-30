export default function KazakhOrnament({ dark = false }) {
  const color = dark ? '#1e2340' : '#c9a84c'
  return (
    <svg viewBox="0 0 300 30" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '30px' }}>
      <g fill={color} opacity="0.85">
        {/* Repeating geometric kazakh pattern */}
        {[0, 60, 120, 180, 240].map((x, i) => (
          <g key={i} transform={`translate(${x}, 0)`}>
            <polygon points="30,4 36,12 30,20 24,12" fill="none" stroke={color} strokeWidth="1.5" />
            <circle cx="30" cy="12" r="2.5" />
            <line x1="0" y1="12" x2="20" y2="12" stroke={color} strokeWidth="1" />
            <line x1="40" y1="12" x2="60" y2="12" stroke={color} strokeWidth="1" />
            <circle cx="10" cy="12" r="1.5" />
            <circle cx="50" cy="12" r="1.5" />
            <path d="M20 4 Q25 0 30 4" fill="none" stroke={color} strokeWidth="1" />
            <path d="M30 20 Q35 24 40 20" fill="none" stroke={color} strokeWidth="1" />
          </g>
        ))}
      </g>
    </svg>
  )
}
