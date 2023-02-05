import React from "react";
import './search.css'
import { ResultFeed, SearchBar } from "../../components";

export default function SearchPage() {
    return (
        <div>
            
            <div  id="search-page-container">
                <SearchBar/>
            </div>
            <div id="result-feed-container">
                <ResultFeed/>
            </div>
            
        </div>
    )
}