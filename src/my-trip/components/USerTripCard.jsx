import React from 'react'
import { Link } from 'react-router-dom'

const USerTripCard = ({trip}) => {
  return (
    <Link to={'/view-trip/'+trip?.id}>
    <div> 
        <img src='/download.jpeg' className=' object-cover rounded-xl'/>
        <h2 className=' font-bold text-lg mt-2 text-black'>{trip?.userSelection?.location?.description}</h2>
        <h2 className=' text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days with {trip?.userSelection?.budget} Budget</h2>
    </div>
    </Link>
  )
}

export default USerTripCard