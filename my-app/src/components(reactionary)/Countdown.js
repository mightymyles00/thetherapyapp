import React, { useEffect, useState } from "react"



const Countdown = ({initialTime}) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
    
        if (isRunning && timeLeft > 0) {
            intervalId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 0);
        } else if (timeLeft === 0) {
            console.log('stop running')
            setIsRunning(false);
        }
    
        return () => clearInterval(intervalId);
    }, [isRunning, timeLeft]);
    
    const startTimer = () => {
        if (!isRunning) {
          setTimeLeft(3000)  
          setIsRunning(true);
        }
      };

    const stopTimer = () => {
        if(isRunning) {
            setIsRunning(false)
            alert(timeLeft)
        }
    }


    return (
        <div>
            <button id="ActionButton" onClick={startTimer} disabled={isRunning}>
            Start
            </button>
            <button id="ActionButton" onClick={stopTimer}> Stop </button>
            <div>time: {timeLeft}</div>

 
        </div>
    )
    





}


export default Countdown;