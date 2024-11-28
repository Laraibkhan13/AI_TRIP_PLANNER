// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Createtrip from './create-trip/Createtrip'
import Header from './components/custom/Header'


import { GoogleOAuthProvider } from '@react-oauth/google'
import Mytrips from './view-trip/[tripId]/Mytrips'
import ViewMyTrips from './my-trip/ViewMyTrips'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<Createtrip/>
    
  },
  {
    path:'/view-trip/:tripId',
    element: <Mytrips/>
  },
  {
    path:'/my-trips',
    element:<ViewMyTrips/>
  }
  
  
])

createRoot(document.getElementById('root')).render(
  
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header/>
    <RouterProvider router={router}></RouterProvider>  
    </GoogleOAuthProvider>
 
)
