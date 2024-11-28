import React from 'react'
import { Link } from 'react-router-dom'

const Hotels = ({trip}) => {
  return (
    <div>
        <h2 className=' font-bold text-xl mt-5'>Recommended Hotels</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5' >
            {trip?.tripData?.hotels?.map((hotel,index)=>(

                <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotelName+","+hotel?.hotelAddress} target='_blank'>
                <div className=' hover:scale-105 transition-all cursor-pointer border rounded-xl p-4' key={index}>
                    <img src="/HotelImage.webp" className='rounded-lg'/>
                    <div className=' flex flex-col gap-2 '>
                        <h2 className=' font-medium text-black mt-5'>{hotel?.hotelName}</h2>
                        <h2 className=' text-xs text-gray-500'>{hotel?.hotelAddress}</h2>
                        <h2 className=' text-sm text-black'>💵 {hotel?.priceRange.currency} {hotel?.priceRange.min} - {hotel?.priceRange.max}</h2>
                        <h2 className=' text-sm text-gray-500'>⭐ {hotel?.rating}</h2>
                    </div>
                </div>
                </Link>
                
            ))}

        </div>
    </div>
  )
}

export default Hotels