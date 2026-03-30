export default function ToursPage() {
  const popularTours = [
    {
      id: 1,
      title: 'Алматы, Капчагай',
      price: '230 000 тенге',
      img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80'
    },
    {
      id: 2,
      title: 'Алматы, Чарын',
      price: '130 000 тенге',
      img: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=300&q=80'
    }
  ]

  const hotTours = [
    {
      id: 3,
      title: 'Туркестан, Мавзолей Х.А. Яссауи',
      price: '170 000 тенге',
      img: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&q=80'
    },
    {
      id: 4,
      title: 'Алматы, Колсай',
      price: '150 000 тенге',
      img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&q=80'
    }
  ]

  return (
    <>
      <p className="section-title">Популярные</p>
      <div className="cards-grid">
        {popularTours.map(tour => (
          <div key={tour.id} className="tour-card">
            <img src={tour.img} alt={tour.title} />
            <div className="card-info">
              <div className="ornament-line"></div>
              <h4>{tour.title}</h4>
              <p className="price">{tour.price}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="section-title">Горячие туры</p>
      <div className="cards-grid">
        {hotTours.map(tour => (
          <div key={tour.id} className="tour-card">
            <img src={tour.img} alt={tour.title} />
            <div className="card-info">
              <div className="ornament-line"></div>
              <h4>{tour.title}</h4>
              <p className="price">{tour.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
