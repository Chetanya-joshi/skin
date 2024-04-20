import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div style={{ backgroundColor:'#944E63', marginTop:'15px'}}>
        <h3 style={{ textAlign: 'center',color:'white',padding:'15px'}}>Our Consultant</h3>
    <div style={{ height: '300px', backgroundColor: '#944E63', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

      <div style={{ height: '250px', width: '250px', borderRadius: '50%', backgroundColor: 'white', overflow: 'hidden' }}>
        <Image src="/facewash.webp" width={250} height={250} objectFit="cover" />
      </div>
      <div style={{ height: '250px', width: '250px', borderRadius: '50%', backgroundColor: 'white', overflow: 'hidden' }}>
        <Image src="/toner.jpeg" width={250} height={250} objectFit="cover" />
      </div>     
      <div style={{ height: '250px', width: '250px', borderRadius: '50%', backgroundColor: 'white', overflow: 'hidden' }}>
        <Image src="/scrub.webp" width={250} height={250} objectFit="cover" />
      </div>      
      <div style={{ height: '250px', width: '250px', borderRadius: '50%', backgroundColor: 'white', overflow: 'hidden' }}>
        <Image src="/serum.webp" width={250} height={250} objectFit="cover" />
      </div>     
      <div style={{ height: '250px', width: '250px', borderRadius: '50%', backgroundColor: 'white', overflow: 'hidden' }}>
        <Image src="/sunscreen.jpg" width={250} height={250} objectFit="cover" />
      </div>    </div>
      </div>
  );
}
