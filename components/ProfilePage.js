export default function ProfilePage({ onLogin }) {
  return (
    <div style={{ padding: '30px 16px', textAlign: 'center' }}>
      <div style={{
        width: 80, height: 80, borderRadius: '50%',
        background: '#8b9bd4', margin: '0 auto 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 36
      }}>👤</div>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, marginBottom: 8 }}>Гость</h2>
      <p style={{ color: '#8a8fa8', fontSize: 14, marginBottom: 24 }}>Войдите, чтобы сохранять туры</p>
      <button
        onClick={onLogin}
        style={{
          background: '#c9a84c',
          color: 'white',
          border: 'none',
          borderRadius: 12,
          padding: '12px 32px',
          fontSize: 15,
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: 'Nunito, sans-serif'
        }}
      >
        Войти / Регистрация
      </button>
    </div>
  )
}
