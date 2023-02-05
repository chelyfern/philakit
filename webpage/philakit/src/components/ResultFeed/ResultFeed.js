import React from "react";
import './resultfeed.css'
import { Res } from "../../components";
import axios from '../../axios'

export default function ResultFeed() {
    return (
        <div>
            <div id="results-container">
                <Res/>

            </div>
        </div>
    )
}