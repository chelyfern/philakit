import React, { Link } from "react";
import './myb.css'

export default function MyFeed() {
    return (
        <div>
            <div className="post">
                <h1>POST TITLE</h1>
                <p>Short description of post</p>
                <p>Timestamp</p>
                <button className="trash"></button>
            </div>
        </div>
    )
}