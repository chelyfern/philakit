import React, { Link } from "react";
import {  signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import './styles.css'
import { SearchBar, Discover, Res } from "../../components";

const HomePage = () => {
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <div id="homepage-container">

            <SearchBar id="search-bar"/>

            <a href="#discover-container" id="surprise-me-link">surprise me!</a>

            <div id="discover-container">
                <Discover id="discover-section"/>
            </div>

            <div>
                <button onClick={handleLogout}>
                    Logout
                </button>

            </div>
            <Res/>

        </div>
    )
}

export default HomePage