export default function CruisesPage() {
  const cruises = [
    {
      id: 1,
      title: 'Легенды Кавказа',
      price: '1 380 000 тенге',
      img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&q=80'
    },
    {
      id: 2,
      title: 'Каспийское море',
      price: '4 800 000 тенге',
      img: 'https://images.unsplash.com/photo-1504376379689-8d54347b26c6?w=400&q=80'
    }
  ]

  return (
    <>
      {cruises.map(cruise => (
        <div key={cruise.id} className="cruise-card">
          <div className="ornament-border"></div>
          <span className="ornament-left">❧</span>
          <span className="ornament-right">❧</span>
          <div className="cruise-inner">
            <h3>{cruise.title}</h3>
            <img src={cruise.img} alt={cruise.title} />
            <p className="price">{cruise.price}</p>
          </div>
        </div>
      ))}
    </>
  )
}
