import React, { Link } from "react";
import './styles.css'
import { SearchBar, Discover } from "../../components";

export default function HomePage() {
    return (
        <div id="homepage-container">

            <SearchBar id="search-bar"/>

            <a href="#discover-container" id="surprise-me-link">surprise me!</a>

            <div id="discover-container">
                <Discover id="discover-section"/>
            </div>

        </div>
    )
}