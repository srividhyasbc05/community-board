import Event from './Event'
import places from "./places";
import'./CardGrid.css'
const Grid = (props) => {
  return (
    <div className="card-grid">
      {places.map((place) => (
    <Event
      key={place.id}
      type={place.type}
      event={place.name}
      src= {place.src}
      area={place.borough}
      time={place.hours}
      address={place.address}
    />
  ))}

      
    </div>
  )
}

export default Grid