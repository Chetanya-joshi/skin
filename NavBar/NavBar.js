import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { fa } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import logo from '../public/logo.png'
export default function NavBar() {
  return (
    <div>
        <div className="navbar">
            <div className="leftside">
            <Image src={logo} width={90}/>
                <p className="skincare">SkinCare</p>
            </div>
            <div className="centerside">
                <ul className="elm"> 
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="rightside">
                <div className="loginbtn">
                <FontAwesomeIcon icon={faRightFromBracket} width={20} className="icons"/>
                    <p>Login</p>
                </div>
            </div>
        </div>
    </div>
  )
}
