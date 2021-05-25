import React from 'react'
import '../styles/intro.scss'

function Intro() {
    return (
        <div className="intro-container">
            <div className="glitch" data-text="LuisRojas" style={{textAlign:"center"}}>LuisRojas</div>
            {/* <div className="glow" style={{textAlign:"center", position: 'absolute', left:'50%'}}>LuisRoj</div> */}
            <p className="subtitle" style={{textAlign:"center"}}>Connecting People, <br /> One Line Of Code At A Time</p>
            {/* <div className="scanlines"></div> */}
        </div>
    )
}

export default Intro