import React from 'react'
import  '/src/commonStyle.css'
import Nabar from '../assets/page/Navbar'
import { Outlet } from 'react-router-dom'
import ScrollArrow from '../component/ScrollArrow'

function MainLayout() {
  
 
  return (
    <>
         <div className='flex relative flex-col min-h-screen'>
                 <Nabar/>
              
              <div className='flex-1'>
                 <Outlet/>
              </div>   
             <div className='z-50'>
             <ScrollArrow/>
             </div>
         </div>
    </>
  )
}

export default MainLayout



