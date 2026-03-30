import { useState } from 'react'

const figures = [
  {
    id: 1,
    name: 'Абай Кунанбаев',
    desc: '(10 тамыз 1845 — 6 шілде 1904) — ұстаз, ақын, ағартушы, жазба қазақ әдебиетінің, қазақ әдеби тілінің негізін қалаушы.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Abai_Kunanbayev.jpg/200px-Abai_Kunanbayev.jpg'
  },
  {
    id: 2,
    name: 'Шокан Уалиханов',
    desc: '(1835-1865) — первый казахский учёный и просветитель, историк, этнограф, фольклорист, путешественник.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Chokan_Valikhanov.jpg/200px-Chokan_Valikhanov.jpg'
  },
  {
    id: 3,
    name: 'Ыбырай Алтынсарин',
    desc: '(1841-1889) — қазақтың аса көрнекті ағартушы-педагогы, жазушы, этнограф, фольклоршы, қоғам қайраткері.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ibray_Altynsarin.jpg/200px-Ibray_Altynsarin.jpg'
  },
  {
    id: 4,
    name: 'Кенесары Касымов',
    desc: '(1802-1847) — мемлекет қайраткері, әскери қолбасшы, казахского халқының 1837-1847 жылдардағы ұлт-азаттық қозғалысының кесемі.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kenesary_Kasymov.jpg/200px-Kenesary_Kasymov.jpg'
  }
]

const holidays = [
  {
    id: 1,
    name: 'Наурыз мейрамы',
    desc: 'Казахский Новый год — праздник весны и обновления природы. Отмечается 21-23 марта.',
    img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=200&q=80'
  },
  {
    id: 2,
    name: 'Курбан айт',
    desc: 'Мусульманский праздник жертвоприношения. Один из главных религиозных праздников.',
    img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=200&q=80'
  }
]

const traditions = [
  {
    id: 1,
    name: 'Той',
    desc: 'Праздник — свадьба, рождение ребёнка, юбилей. Сопровождается угощениями, музыкой и танцами.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=200&q=80'
  },
  {
    id: 2,
    name: 'Юрта',
    desc: 'Традиционный переносной дом казахских кочевников. Символ казахской культуры.',
    img: 'https://images.unsplash.com/photo-1579033462043-0f11a7862f7d?w=200&q=80'
  }
]

export default function CulturePage() {
  const [tab, setTab] = useState('Деятели')
  const tabs = ['Праздники', 'Деятели', 'Традиции']

  const data = tab === 'Деятели' ? figures : tab === 'Праздники' ? holidays : traditions

  return (
    <>
      <div className="tabs" style={{ marginBottom: 16 }}>
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
      {data.map(item => (
        <div key={item.id} className="culture-card">
          <img src={item.img} alt={item.name} onError={e => { e.target.src = 'https://via.placeholder.com/70x70/8a7a5a/fff?text=?' }} />
          <div className="info">
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}
