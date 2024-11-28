import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfoSections from './components/InfoSections';
import Hotels from './components/Hotels';
import PlacesToVisit from './components/PlacesToVisit';
import Footer from './components/Footer';


const Mytrips = () => {

  const {tripId}=useParams();
  const [trip,setTrip]=useState([]);

  useEffect(()=>{

    tripId && GetTripData();

  },[tripId])

  async function GetTripData()
  {
    const docRef= doc(db,'AI-Trips',tripId);
    const docSnap=await getDoc(docRef);

    if(docSnap.exists())
    {
      console.log("Document data:",docSnap.data())
      setTrip(docSnap.data());
    }
    else{
      console.log("no such doc");
    }
  }

    return (
    <div className=' p-10 md:px-20 lg:px-44 xl:px-56'>
      

      <InfoSections trip={trip}/>
        
      
      <Hotels trip={trip}></Hotels>

      
      <PlacesToVisit trip={trip}/>

      {/* footer */}
      <Footer></Footer>
    </div>
  )
}
export default Mytrips