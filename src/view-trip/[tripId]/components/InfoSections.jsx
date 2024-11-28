import { Button } from '@/components/ui/button';
import React from 'react'
import { IoIosSend } from "react-icons/io";
const InfoSections = ({trip}) => {

  
  return (
    <div >
        <img src='/banner.jpg' className=' h-[300px] w-full object-cover rounded-lg'/>

        <div className=' flex justify-between items-center'>
        <div className=' my-5 flex flex-col gap-2'>
        <h2 className=' font-bold text-2xl'>{trip?.userSelection?.location?.description}</h2>

        <div className=' flex gap-5'>
          <h2 className=' p-1 px-3  bg-gray-200 rounded-full text-gray-500 font-bold text-xs md:text-lg'>
            No of Days : {trip?.userSelection?.noOfDays}
          </h2>
          <h2 className=' p-1 px-3  bg-gray-200 rounded-full text-gray-500 font-bold text-xs md:text-lg'>
           Your Budget : {trip?.userSelection?.budget}
          </h2>
          <h2 className=' p-1 px-3  bg-gray-200 rounded-full text-gray-500 font-bold text-xs md:text-lg'>
            No of Traveller : {trip?.userSelection?.noOfPeoples}
          </h2>
        </div>
        </div>

        <Button><IoIosSend/></Button>

        </div>

        
        
    </div>
  )
}

export default InfoSections