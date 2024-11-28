import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

const PlaceCard = ({place,trip}) => {

  

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.placeName} target='_blank'>
    <div className=' border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img src='/download.jpeg'
        className=' h-[130px] w-[130px] rounded-xl'/> 

        <div>
            <h2 className=' text-black font-bold text-lg'>{place.placeName}</h2>
            <p className=' text-sm text-gray-500'>{place.placeDetails}</p>
            <h2 className=' mt-2 text-black text-sm'>🕙 {place?.timeToVisit}</h2>
            <p className=' text-black mt-2 text-sm'>
            🎟️ {" "}
              {typeof place.ticketPricing === "string"
                ? place.ticketPricing // Render directly if "Free"
                : `${place.ticketPricing.currency} ${place.ticketPricing.amount}`} {/* Render price and currency */}
            </p>
        </div>
    </div>
    </Link>
  )
}

export default PlaceCard