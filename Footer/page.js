import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css'


export default function Page() {
  const iconStyle = {
    width: '25px', // Adjust as needed
    height: '25px', // Adjust as needed
    color: 'white'
  };
  const font1 = {
    fontSize: '1rem'
  };

  return (
    <div>
      <div style={{ width: '100%', height: '250px', backgroundColor: '#944E63', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ height: '150px', width: '80%', margin: 'auto' }}>
          <div style={{ width: '50%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: 'auto', height: '100px' }}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" style={iconStyle} />
            <FontAwesomeIcon icon={faFacebook} size="2x" style={iconStyle} />
            <FontAwesomeIcon icon={faYoutube} size="2x" style={iconStyle} />
            <FontAwesomeIcon icon={faTwitter} size="2x" style={iconStyle} />
            <FontAwesomeIcon icon={faInstagram} size="2x" style={iconStyle} />
          </div>
          <div  className='paradiv'style={{ width: '70%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: 'auto', color: 'white' }}>
            <p >Home</p>
            <p >About</p>
            <p >Privacy</p>
            <p >Contact</p>
            <p >Blogs</p>
          </div>
        </div>
        <div style={{ width: '100%', height: '50px', textAlign: 'center', color: '#944E63', backgroundColor: '#FFE7E7' }}><p className='my-2' style={{ margin: 'auto' }}>CopyRight@2024|SkinCare, All Rights Reserved</p></div>
      </div>
    </div>
  );
}
