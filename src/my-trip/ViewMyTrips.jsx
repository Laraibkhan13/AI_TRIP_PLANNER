import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import USerTripCard from './components/USerTripCard';
import Footer from '@/view-trip/[tripId]/components/Footer';

const ViewMyTrips = () => {

    const[useTrip,setuserTrip]=useState([]);

    const navigation=useNavigation();

    useEffect(()=>{
        GetUserTrips();
    },[])

    async function GetUserTrips()
    {
        const user=JSON.parse(localStorage.getItem('user'));
        
        if(!user)
        {
            navigation('/');
            return;
        }
        setuserTrip([]);
        const q = query(collection(db, "AI-Trips"), where('userEmail', "==", user?.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        
        setuserTrip(prevVal=>[...prevVal,doc.data()]);
        });


    }
  return (
    <div className=' sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
        <h2 className=' font-bold text-3xl'>My Trips</h2>

        <div className=' grid grid-cols-2 md:grid-cols-3 gap-5 mt-4'>
            {useTrip.map((trip,index)=>(
                <USerTripCard key={index} trip={trip}></USerTripCard>
            ))}
        </div>
        <Footer></Footer>
    </div>
  )
}

export default ViewMyTrips