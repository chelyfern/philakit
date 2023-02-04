import React from "react";
import { Link } from 'react-router-dom'
import './profile.css'

export default function ProfilePage() {
    return (
        <div>
            <h1>Profile Page!</h1>
            <Link exact="true" to="/login" className="link">Login/Sign up!</Link>
        </div>
    )
}