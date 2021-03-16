import React from "react";

import "./Countdown.css";

const Countdown = ({label, countdown}) => {

    return (
        <div className="col-3 countdown">
            <div className="timer">
                <h1>{countdown < 10 ? `0${countdown}` : countdown}</h1>
            </div>
            <h4>{label}</h4>
        </div> 
    )
}

export default Countdown