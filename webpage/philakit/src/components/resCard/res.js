import React from "react";
import './res.css'
import blob from './blob.jpg'

export default function Res() {
    return (
        <div>
            <div className="card">
                <img className="myPic" src={blob} alt="org"/>
                <h1 id="result-title">ORG TITLE</h1>
                {/* <p align="center">learn more</p> */}
                <a href="/" id="res-learn-more">
                    learn more
                </a>
            </div>
        </div>
    )
}