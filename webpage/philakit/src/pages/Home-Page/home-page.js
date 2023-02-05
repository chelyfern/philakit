import React, { Link } from "react";
import './styles.css'
import { SearchBar, Discover } from "../../components";

export default function HomePage() {
    return (
        <div>

            <div  id="search-container">
                <SearchBar/>
            </div>

            <a href="#discover-container" id="surprise-me-link">surprise me!</a>

            <div id="discover-container">
                {/* <Discover id="discover-section"/> */}
            </div>

        </div>
    )
}