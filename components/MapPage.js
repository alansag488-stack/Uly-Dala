export default function MapPage() {
  return (
    <>
      <div className="map-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Kazakhstan_tourist_map.jpg/1200px-Kazakhstan_tourist_map.jpg"
          alt="Карта Казахстана"
          style={{ objectPosition: 'center' }}
        />
        <div className="map-zoom">
          <button>−</button>
          <button>+</button>
        </div>
      </div>
    </>
  )
}
