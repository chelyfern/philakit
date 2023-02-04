import React from "react";
import './map.css'
import Iframe from 'react-iframe'

export default function MapPage() {
    return (
        <div>
            <Iframe src="https://www.ncei.noaa.gov/maps/hazards/" className="mapBox" title="disaster map"></Iframe>
        </div>
    )
}