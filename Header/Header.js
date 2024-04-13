import React from 'react'
import Image from 'next/image';

import './Header.css';  
import banner from '../public/cosmetic3.png';
export default function Header() {
  return (
    <div>
        <div className="banner">
            <Image src={banner} style={{width:'100vw' , height:'40vw'}}/>
        </div>
    </div>
  )
}
