import React from 'react'
import './Productnext.css'
import Image from 'next/image'
import Sunscream from '../Products/Sunscream/Sunscream'
import Facewash from '../Products/Facewash/page'
import Header from '../../../Header/Header'
import Footer from '../Footer/page'
import Navbar from '../../../NavBar/NavBar'
import Ourlatest from '../../../Ourlatest/page'

export default function page() {
  return (
    <>
     {/* <Header>
        
        </Header> */}
        <Navbar></Navbar>
    <div>

     <div className='banner-1'>
        <img src='/banner1.jpg' className='imagediv'></img>
     </div>
    
     {/* <Sunscream></Sunscream>
     <Facewash></Facewash> */}
     <Ourlatest></Ourlatest>
     <Ourlatest></Ourlatest>
     <Ourlatest></Ourlatest>


     <Footer></Footer>
    </div>
    </>
  )
}
