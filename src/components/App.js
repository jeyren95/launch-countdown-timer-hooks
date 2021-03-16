import React, {useState, useEffect} from "react";

import Countdown from "./Countdown";
import Footer from "./Footer";
import Title from "./Title";

import "./App.css";

const App = () => {
    //Set the initial state of the remaining time to 14 days in seconds
    const [remainingTime, setRemainingTime] = useState(14*24*60*60)

    //When the component mounts, start the timer and re-render everytime remainingTime updates 
    //useEffect hooks second argument - [] means useEffect invoked once, [state] means useEffect invoked once and everytime the state changes, nothing means useEffect invoked after every re-render
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (remainingTime > 0) {
                setRemainingTime(remainingTime - 1)
            } 
        }, 1000);
        //this cleanup function is stored when the component first renders
        // then as the component is re-rendered, the cleanup function is then invoked, removing the timer 
        // the first argument is then invoked, calling the timeout again
        return () => {
            clearTimeout(timeoutId)
        }
        }, [remainingTime])


    return (
        <div>
            <div className="countdown-timer">
                <Title />
                <div className="row">
                    <Countdown label="DAYS" countdown={Math.floor(remainingTime/(60*60*24))} />
                    <Countdown label="HOURS" countdown={Math.floor((remainingTime/(60*60)) % 24)} />
                    <Countdown label="MINUTES" countdown={Math.floor((remainingTime/60) % 60)} />
                    <Countdown label="SECONDS" countdown={Math.floor(remainingTime % 60)} />
                </div>
            </div>
            <Footer />
           
        </div>
    )
}

export default App