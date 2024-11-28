import LocationAutocomplete from '@/components/custom/LocationAutocomplete'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AI_PROMPT, SelectBudgetOptions, selectTravelersList } from '@/constants/options'
import { chatSession } from '@/service/AIModal'
import { db } from '@/service/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useNavigate, useNavigation } from 'react-router-dom'

const Createtrip = () => {

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [formData,setformData]=useState([]);
    const[openDialogue,setOpenDialogue]=useState(false);
    
    const[Loading,setLoading]=useState(false);
    const navigate=useNavigate();
    

    function handleInputChange(name,value)
    {
        if(name=="noOfDays" && value>5)
        {
            console.log("Please enter Trip-Days less than 5");
            return;
        }
        setformData({
            ...formData,
            [name]:value
        })
    }

    useEffect(()=>{ 
        console.log(formData)
    },[formData])

    async  function GenerateTrip()
    {
        const user=localStorage.getItem('user');

        if(!user)
        {
            
            return;
        }
        if(formData?.noOfDays>5)
        {
            return;
        }

        setLoading(true)
        console.log(formData)

        

        const FINAL_PROMPT=AI_PROMPT
        .replace('{location}',formData?.location?.description)
        .replace('{totalDays}',formData?.noOfDays)
        .replace('{traveler}',formData?.noOfpeoples)
        .replace('{budget}',formData?.budget)
        .replace('{totalDays}',formData?.noOfDays)

        console.log(FINAL_PROMPT)

        const result=await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result?.response?.text())
        setLoading(false);
        setTripdata(result?.response?.text())
        
    }

    async function setTripdata(TripData)
    {
        setLoading(true)
        const user=JSON.parse(localStorage.getItem('user'));
        const docId=Date.now().toString();
        await setDoc(doc(db, 'AI-Trips', docId), {
            userSelection:formData,
            tripData:JSON.parse(TripData),
            userEmail: user?.email,
            id:docId

          });
          setLoading(false);
          navigate('/view-trip/'+docId)
          
          
    }

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    handleInputChange("location",location)
    // console.log('Selected Location:', location); // Contains description and place_id

  };


  return (
    <div className=' sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
        <h2 className=' font-bold text-3xl'>Tell us yor travel preferences</h2>
        <p className=' mt-3 text-gray-500 text-xl'>Just provide some basic information and our trip planner will generate a customized itinerary based on your preferences</p>

        <div className=' mt-20 flex flex-col gap-9 '>
            <h2 className='text-xl my-3 font-medium'>Enter the destination of your choice</h2>
            
            
            <LocationAutocomplete onChange={(e)=>{
                handleInputChange('location',e.target.value)
            }} onSelectLocation={handleSelectLocation} />
            {selectedLocation && (
            <div>
            </div>
        
            )}
        </div>
        <div>
       
        <h2 className='text-xl my-3 font-medium'>How many days are you Planning your trip?</h2>
        <Input placeholder={'Ex.3'} type="number"
        onChange={(e)=>{handleInputChange('noOfDays',e.target.value)}}/>

        </div>

        <div>
        <h2 className='text-xl my-3 font-medium'>What is Your Budget?</h2>
            <div className=' grid grid-cols-3 gap-5 mt-5 '>
                {SelectBudgetOptions.map((items,index)=>(
                    <div key={index}
                    onClick={()=>{
                        handleInputChange('budget',items.title)
                    }}
                    className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
                    ${formData?.budget==items.title&&'shadow-lg border-black'}`}>
                        <h2 className=' text-4xl'>{items.icon}</h2>
                        <h2 className=' font-bold text-lg'>{items.title}</h2>
                        <h2>{items.desc}</h2>
                    </div>
                ))}
            </div>
        </div>


        <div>
        <h2 className='text-xl my-3 font-medium'>Who do you plan on travelling with on your next adventure?</h2>
            <div className=' grid grid-cols-3 gap-5 mt-5 '>
                {selectTravelersList.map((items,index)=>(
                    <div key={index}
                    onClick={()=>handleInputChange('noOfpeoples',items.title)}
                    className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
                    ${formData?.noOfpeoples==items.title&&'shadow-lg border-black'}`}>
                        <h2 className=' text-4xl'>{items.icon}</h2>
                        <h2 className=' font-bold text-lg'>{items.title}</h2>
                        <h2>{items.desc}</h2>
                    </div>
                ))}
            </div>
        </div>

        <div className=' my-10 justify-end flex'>
            <Button 
            disabled={Loading}
            onClick={GenerateTrip}>
                {
                Loading?<AiOutlineLoading3Quarters 
                className=' h-7 w-7 animate-spin'/>:'Generate Trip'
                }</Button>
        </div>

    </div>
  )
}

export default Createtrip