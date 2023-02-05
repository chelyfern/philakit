import React from "react";
import './res.css'
import blob from './blob.jpg'

export default function Res() {
    return (
        <div>
            <div className="post">
                <img className="myPic" src={blob} alt="org"/>
                <h1>ORG TITLE</h1>
                <p align="center">learn more</p>
            </div>
        </div>
    )
}