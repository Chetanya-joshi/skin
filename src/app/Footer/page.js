'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare, faLinkedin, faTumblrSquare, faPinterest } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { faMapMarkerAlt, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    const router = useRouter();

    // State to hold the product data
    const [productData, setProductData] = useState(null);

    // useEffect hook to watch for changes in router.query
    useEffect(() => {
        // Get the query string from the URL
        const queryString = window.location.search;
        console.log(queryString,'o')
        const urlParams = new URLSearchParams(queryString);

        // Check if the 'product' query parameter is present
        if (urlParams.has('product')) {
            // Get the value of the 'product' query parameter
            const productValue = urlParams.get('product');
            try {
                // Parse the product data and update the state
                const parsedData = JSON.parse(productValue);
                setProductData(parsedData);
                console.log('Parsed product data:', parsedData);
            } catch (error) {
                console.error('Error parsing product data:', error);
            }
        }
    }, []);
    
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-item1">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={90}
                        height={90}
                    />
                    <ul className="contact-info">
                        <div style={{ display: 'flex', margin: '5px' }}> <FontAwesomeIcon className='social-icon2' icon={faMapMarkerAlt} />  <li>29 High Street London SE92 8Q United Kingdom</li></div>
                        <div style={{ display: 'flex', margin: '5px' }}> <FontAwesomeIcon className='social-icon2' icon={faPhoneVolume} />   <li>02805698322</li></div>
                        <div style={{ display: 'flex', margin: '5px' }}> <FontAwesomeIcon className='social-icon2' icon={faEnvelope} />  <li>support@getatrip.co.uk</li></div>
                    </ul>
                    <h2>FOLLOW US</h2>
                    <div className="social-icon d-flex">
                        <FontAwesomeIcon className='social-icon1' icon={faFacebook} />
                        <FontAwesomeIcon className='social-icon1' icon={faInstagramSquare} />
                        <FontAwesomeIcon className='social-icon1' icon={faLinkedin} />
                        <FontAwesomeIcon className='social-icon1' icon={faTumblrSquare} />
                        <FontAwesomeIcon className='social-icon1' icon={faPinterest} />
                    </div>
                </div>
                <div className="footer-item">
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="#"></a></li>
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
