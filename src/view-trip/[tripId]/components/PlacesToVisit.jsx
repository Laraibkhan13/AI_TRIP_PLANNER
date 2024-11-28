import React from 'react'
import PlaceCard from './PlaceCard'

const PlacesToVisit = ({trip}) => {
  
  return (
    <div className=' mt-8'>
      <h2 className=' font-bold text-xl'>Places To Visit</h2>

      <div>
        {/* {
          
          Object.keys(trip?.tripData?.itinerary).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})).map((day,dayIndex)=>(
            <div key={dayIndex}>
              <h2>{day.toUpperCase()}</h2>

            </div>
          ))
        } */}

{/* <div>
  {Object.keys(trip?.tripData?.itinerary || {}).map((day, dayIndex) => (
    <div key={dayIndex}>
      <h2>{day.toUpperCase()}</h2>
    </div>
  ))}
</div> */}

<div className=' mt-4'>
  {Object.keys(trip?.tripData?.itinerary || {})
    .sort((a, b) => a.localeCompare(b)) // Sort keys in ascending order
    .map((day, dayIndex) => (
      <div key={dayIndex}>
        <h2 className=' font-medium text-lg'>{day.toUpperCase()}</h2>
        <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2  gap-5'>
        {trip.tripData.itinerary[day].map((place, placeIndex) => (
          <div key={placeIndex}>
            <div className=' my-3 '>
              <PlaceCard place={place} trip={trip}></PlaceCard>
            </div>
            {/* <h3>{place.placeName}</h3>
            <p>{place.placeDetails}</p> */}
          </div>
        ))}
        </div>
      </div>
    ))}
</div>


      </div>
      
      
    </div>

  )
}

export default PlacesToVisit