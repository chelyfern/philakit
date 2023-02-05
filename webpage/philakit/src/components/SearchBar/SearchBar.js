import React, { useState } from "react";
import './styles.css'

export default function SearchBar() {
    const [keyword, setKeyword] = useState("")
    const [posts, setPosts] = useState([])

    const handleChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value)
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            console.log(keyword)
            handleSubmit();
        }
    }

    const handleSubmit = async (e) => {
        
    }

    return (
        <div>
            <input 
                type="search"
                id="search-bar"
                placeholder="search (region, cause, etc.)"
                onChange={handleChange}
                onKeyUp={handleKeyPress}
                value={keyword}
            />
        </div>
    )
}