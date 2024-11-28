import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import Createtrip from '@/create-trip/Createtrip'
import { useGoogleLogin } from '@react-oauth/google'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Hero = () => {

  const user=localStorage.getItem('user');
  const [openDialogue,setOpenDialogue]=useState(false);
  

  const login=useGoogleLogin({
    onSuccess:(coderesp)=>GenerateUserProfile(coderesp),
    
    onError:(error)=>console.log(error)
  }
  )

  async function GenerateUserProfile(tokenInfo)
  {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,{
        headers:{
            Authorization:`Bearer ${tokenInfo?.access_token}`,
            Accept:'Application/json'
        }
    }).then((resp)=>{
        console.log(resp);
        localStorage.setItem('user',JSON.stringify(resp.data));
        setOpenDialogue(false);
        window.location.reload();
        
    })
  } 

  return (
    <div className=' flex flex-col items-center mx-56 gap-9'>
        <h2 className=' font-extrabold text-[40px] text-center mt-16'>
            <span className='text-[#f56551]'>Discover Your Next Adventure with AI</span> Personalized Itenaries at Your Fringertips</h2>

        <p className=' text-xl text-gray-500 text-center'>your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget</p>

        {/* <Link to={'/create-trip'}> */}

        {user?
        <Link to={'/create-trip'}>
          <Button>Good to go</Button>
        </Link>:
        <div>
        <Button onClick={()=>setOpenDialogue(true)}>Get Started, It's Free</Button>
        <Dialog open={openDialogue}>
        
        <DialogContent> 
            <DialogHeader>
            
            <DialogDescription>
                <img src='/logo.svg'/>
                <h2 className=' font-bold text-lg mt-7'>Sign In With Google</h2>
                <p>Sign in to the App with Google authentication securely</p>

                <Button onClick={login}
                 className=" w-full mt-5 flex gap-4 items-center">
                    <FcGoogle/>
                    Sign In With Google
                </Button>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
        </div>
        
}
        
    </div>
  )
}

export default Hero