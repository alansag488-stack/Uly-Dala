import KazakhOrnament from './KazakhOrnament'

export function LoginModal({ onClose, onSwitchToRegister }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-blue" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-ornament"><KazakhOrnament dark={false} /></div>
        <div className="modal-body">
          <label>почта</label>
          <input className="modal-input" type="email" />
          <label>пароль</label>
          <input className="modal-input" type="password" />
          <button className="modal-btn" onClick={onClose}>продолжить</button>
          <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.7)', cursor: 'pointer', marginTop: 6 }}
             onClick={onSwitchToRegister}>
            Нет аккаунта? Зарегистрироваться
          </p>
        </div>
        <div className="modal-ornament"><KazakhOrnament dark={false} /></div>
      </div>
    </div>
  )
}

export function RegisterModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-beige" onClick={e => e.stopPropagation()}>
        <button className="modal-close" style={{ color: '#333' }} onClick={onClose}>✕</button>
        <div className="modal-ornament" style={{ background: '#c4a882' }}><KazakhOrnament dark={true} /></div>
        <div className="modal-body">
          <label>почта</label>
          <input className="modal-input" type="email" />
          <label>номер телефона</label>
          <input className="modal-input" type="tel" />
          <label>пароль</label>
          <input className="modal-input" type="password" />
          <button className="modal-btn" style={{ background: '#8a7a5a', color: 'white' }} onClick={onClose}>продолжить</button>
        </div>
        <div className="modal-ornament" style={{ background: '#c4a882' }}><KazakhOrnament dark={true} /></div>
      </div>
    </div>
  )
}

export function CityModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-blue" onClick={e => e.stopPropagation()} style={{ padding: 0 }}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-ornament"><KazakhOrnament dark={false} /></div>
        <div className="modal-body" style={{ textAlign: 'center' }}>
          <label style={{ display: 'block', marginBottom: 12, fontSize: 16 }}>Ваш город</label>
          <input className="city-modal-input" type="text" autoFocus />
        </div>
        <div className="modal-ornament"><KazakhOrnament dark={false} /></div>
      </div>
    </div>
  )
}
