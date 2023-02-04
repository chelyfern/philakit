import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './final_toolkit_design.png'
import prof from './User 2.svg'

export default function Navbar() {
    return (
        <div>
            <a href="tbd">
                <img className="prof" src={prof} alt="profile" />
            </a>
            <Link exact="true" to="/" className="link">home</Link>
            <Link exact="true" to="/map" className="link">map</Link>
            <Link exact="true" to="/blog" className="link">blog</Link>
            <img className="logoimg" src={logo} alt="logo" />
            <Link className="logo" to="/">philakit</Link>
        </div>
    )
}

