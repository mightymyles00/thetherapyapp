import React, { useState, useRef, useEffect } from "react";
 
const Timer = ({running}) => {
    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    //const Ref = useRef(null);
 
    // The state for our timer
    const [time, setTime] = useState(0);
    //const [running, setRunning] = useState(true)
    
    const getTime = () => {
        const time = Date.parse
    }

    const timer = useRef()

    useEffect(() => {
        if(running) {
            timer.current = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        }
        return () => clearInterval(timer.current)


    }, [running])
    return (
    <div id="timer">
        {(time)}
    </div>
    );
};
 
export default Timer;