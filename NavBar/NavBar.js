import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk , faSignIn , faCartFlatbed } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import logo from '../public/logo.png'
import 'bootstrap/dist/css/bootstrap.css';
export default function NavBar() {
    return (
        <div>
            <div className="title">
                <marquee behavior="alternate" >
                    <ul>

                        <li>Shop for Rs.999 and Get 15% Off. </li>
                        <li>Shop for Rs.1499 and Get 25% Off.</li>

                    </ul>
                </marquee>
            </div>

            <div className="navbar">
                <div className="leftside d-flex">
                    <div className="logo">
                        <p>SkinCare</p>

                    </div>
                    <div className="searchbar">
                        <div className="box">
                            <FontAwesomeIcon icon={faSearch} width={14} style={{ color: '#944E63' }} />
                            <input type="text" placeholder="What are you looking for?" />
                        </div>
                        <button className="btn btn-primary" style={{
                            background: '#944E63', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' , outline:'none' , border:'none'
                        }}>Search</button>
                    </div>
                </div>

                <div className="rightside d-flex align-items-center">
                    <div className="d-flex align-items-center icon">
                        <FontAwesomeIcon icon={faMailBulk} width={20} style={{ color: '#944E63' }} />
                        <p>Support</p>
                    </div>

                    <div className="d-flex align-items-center icon">
                        <FontAwesomeIcon icon={faSignIn} width={20} style={{ color: '#944E63' }} />
                        <p>Login</p>
                    </div>

                    <div className="d-flex align-items-center icon">
                        <FontAwesomeIcon icon={faCartFlatbed} width={20} style={{ color: '#944E63' }} />
                        <p>cart</p>
                    </div>

                </div>
            </div>


            <div className="navname">
                <ul>
                    <li>Home</li>
                    <span>|</span>
                    <li>About</li>
                    <span>|</span>

                    <li>Privacy</li>
                    <span>|</span>

                    <li>Contact</li>
                    <span>|</span>

                    <li>blog</li>
                </ul>
            </div>
        </div>
    )
}
