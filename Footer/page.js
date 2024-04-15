import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare, faLinkedin, faTumblrSquare, faPinterest } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { faMapMarkerAlt, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';



function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-item1">
                <Image
    
    src="/logo.png" // Adjust the path to match the correct location of your image
    alt="Logo"
    width={90} // Adjust the width based on your design requirements
    height={90} // Adjust the height based on your design requirements
/>
                    <ul className="contact-info">
                    <div style={{display:'flex',margin:'5px'}}> <FontAwesomeIcon className='social-icon2' icon={faMapMarkerAlt} />  <li>29 High Street London SE92 8Q United Kingdom</li></div>
                     <div style={{display:'flex',margin:'5px'}}> <FontAwesomeIcon  className='social-icon2'icon={faPhoneVolume} />   <li>02805698322</li></div>
                       <div style={{display:'flex',margin:'5px'}}> <FontAwesomeIcon  className='social-icon2'icon={faEnvelope} />  <li>support@getatrip.co.uk</li></div>
                       </ul>
                    <h2>FOLLOW US</h2>
                    <div className="social-icon d-flex"> 
  <FontAwesomeIcon className='social-icon1' icon={faFacebook} />
    <FontAwesomeIcon className='social-icon1' icon={faInstagramSquare} />
    <FontAwesomeIcon className='social-icon1' icon={faLinkedin} />
    <FontAwesomeIcon className='social-icon1' icon={faTumblrSquare} />
    <FontAwesomeIcon  className ='social-icon1'icon={faPinterest} />
</div>

                    {/* <div className="self-payments">
                        <h3>Pay With Confidence</h3>
                        <img src="payment/paymentoption.png" alt="Payment Options" />
                        <br />
                        <button className="btn-payment">PAY ONLINE</button>
                    </div> */}
                </div>
                <div className="footer-item">
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Disclaimer</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Airlines Contact</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Affiliate Policy</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h3>Popular Destinations</h3>
                    <ul>
                        <li><a href="#">Dubai Flights</a></li>
                        <li><a href="#">Las Vegas Flights</a></li>
                        <li><a href="#">Dallas Flights</a></li>
                        <li><a href="#">Brisbane Flights</a></li>
                        <li><a href="#">Bangkok Flights</a></li>
                        <li><a href="#">Toronto Flights</a></li>
                        <li><a href="#">Kingston Flights</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h3>Holiday Packages</h3>
                    <ul>
                        <li><a href="#">Beach Holidays</a></li>
                        <li><a href="#">Luxury Holidays</a></li>
                        <li><a href="#">Wedding Holidays</a></li>
                        <li><a href="#">Honeymoon</a></li>
                        <li><a href="#">Wildlife Holidays</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2024 eazygoflight. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
