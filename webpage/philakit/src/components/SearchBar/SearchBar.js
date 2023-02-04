import React, { useState } from "react";
import './styles.css'

export default function SearchBar() {
    const [keyword, setKeyword] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value)
    }

    return (
        <div>
            <input 
                type="text"
                id="search-bar"
                placeholder="search (region, cause, etc.)"
                onChange={handleChange}
                value={keyword}
            />
        </div>
    )
}