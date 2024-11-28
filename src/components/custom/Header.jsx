import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '../ui/button'
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { googleLogout, useGoogleLogin } from '@react-oauth/google';


const Header = () => {
  
  const users=JSON.parse(localStorage.getItem('user'));
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

  useEffect(()=>{
    console.log(users);
  },[])
  return (
    <div className=' p-3 shadow-sm flex justify-between items-center px-5 '>

        <a href='/'>
        <img src='/logo.svg' 
        alt="TRIPS"/>
        </a>
        

        <div>
        {users?
        <div className=' flex gap-3'>
        <p className=' mt-2'>👋 {users?.name.split(" ")[0]}</p>

        
        <a href='/create-trip'>
        <Button variant="outline" className=" rounded-full text-black">+ Create Trip </Button>
        </a>
        <a href='/my-trips'>
        <Button variant="outline" className=" rounded-full text-black">My Trips</Button>
        </a>
        <Popover>
          <PopoverTrigger className=' bg-white'>👤</PopoverTrigger>
          <PopoverContent>
            <h2 className=" cursor-pointer" onClick={()=>{
              googleLogout();
              localStorage.clear();
              window.location.reload();
            }}>Logout</h2>
          </PopoverContent>
        </Popover>

      </div>
          
          :
          <Button onClick={()=>setOpenDialogue(true)}>SignIn</Button>
          
          
          
        }
        </div>
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
  )
}

export default Header

