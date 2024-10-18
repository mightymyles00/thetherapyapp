import './components(reactionary)/Reactionary.css';
import {BrowserRouter, Routes, Route, createBrowserRouter} from 'react-router-dom'
import { useState, useRef, useEffect } from 'react';
import Countdown from './components(reactionary)/Countdown.js';


import beepSound from './components(reactionary)/beep.wav'
import hitSound from './components(reactionary)/hit.mp3'
import hurtSound from './components(reactionary)/hurt.wav'
import swingSound from './components(reactionary)/swing.wav'


import counter from './components(reactionary)/images/counter.jpg'
import high from './components(reactionary)/images/high.jpg'
import low from './components(reactionary)/images/low.jpg'
import mid from './components(reactionary)/images/mid.jpg'
import netural from './components(reactionary)/images/netural.jpg'



import Card from 'react-bootstrap/Card'
//import CardBody from 'react-bootstrap/CardBody'
//import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Timer from './Timer.js';

const dodgeWindow = 3000; // 3 secs
const beep = new Audio(beepSound)
const hit = new Audio(hitSound)
const swing = new Audio(swingSound)
const hurt = new Audio(hurtSound)


const actionImages = [
  {"state":"counter",
    "src":counter
  },
  {"state": "high",
    "src":high 
  },
  {"state":"low",
    "src":low
  },
  {"state": "mid",
    "src":mid
  },
  {"state": "netural",
    "src": netural
  }
]





setInterval(function() {
    
}, 2000);

function Reactionary() {  
    const initialTime = 300;
    const [startGame, setStartGame] = useState(false);

    // Block window
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    
    const [attack, setAttack] = useState('')
    const BossAttacks = ["High", 'Mid', "Low"]
    const Buttons = ["High", 'Mid', "Low"]


    const highRef = useRef(null);
    const midRef = useRef(null);
    const lowRef = useRef(null);
    const [input, setInput] = useState('');
    const [image, setImage] = useState(netural);


    const [blockWindow, setBlockWindow] = useState('') 


    const MAX_COUNTER_METER = 3;
    const [counterMeter, setCounterMeter] = useState(0);
    const [showCounterButton, setShowCounterButton] = useState(false);

    const MAX_BOSS_HEALTH = 3;
    const [bossHealth, setBossHealth] = useState(MAX_BOSS_HEALTH);
    const [charDamage, setCharDamage] = useState(0);


    const StartTheGame = () => {
      if(startGame === false)
      {
        console.log('start the game')
        setStartGame(true)
      }
    } 

    function getRandomInterval(min,max)
    {
      return Math.floor(min + Math.random() * max)
    }
    useEffect(() =>
      {
        if(startGame) {

          setInterval(() => {
            console.log("set attack")
            prepareAttack(initialTime, BossAttacks[getRandomInterval(0,3)])
          }, 5000)
        }
        
      }, [startGame]);
    
    const prepareAttack = (time,attack) => {
      if (!isRunning) {
        console.log(attack)
        setAttack(attack)
        setTimeLeft(time)
        setIsRunning(true);
        //blinkButton(attack)

        whichAttack(attack)
      }
    }

    useEffect(() => { 



    })

    const blockAttack = ({attack}) => {
      let ref = null;

      if(isRunning) { 
        if (attack === "High") {ref = highRef}
        if (attack === "Mid") {ref = midRef}
        if (attack === "Low") {ref = lowRef}


      }
        
    }

    const whichAttack = (attackNum) => {
      //if attackNum = 1

    }

    useEffect(() => {
      let intervalId;
      
    
      if (isRunning && timeLeft > 0) {
        let ref = null;

        if (attack === "High") {ref = highRef}
        if (attack === "Mid") {ref = midRef}
        if (attack === "Low") {ref = lowRef}
          intervalId = setInterval(() => {
              setTimeLeft((prevTime) => prevTime - 1);
              if(timeLeft % 2 === 0)
              {
                ref.current.classList.add('ButtonFlash');
                beep.play();
              }
              else
              {
                ref.current.classList.remove('ButtonFlash');
              }

          }, 0);
      } else if (timeLeft === 0 || attack === input) {
          console.log('stop running')
          if(attack === input)
          {
            console.log("block confirmed")
          }
          setIsRunning(false);
      }
  
      return () => clearInterval(intervalId);




    },  [isRunning, timeLeft]);

    const handleDodgeHigh = () => {
        //console.log("JUMP")
        if(counterMeter !== (MAX_COUNTER_METER - 1))
        {
          ///blinkButton('HighButton')
        }
        if (input === "high")
        {
          console.log("block confirmed")
          setCounterMeter(counterMeter + 1);
          ActionWindowPicture(mid)
          swing.play()
        }
        else
        {
          setCharDamage(charDamage + 1)
          console.log("player hit")
          ActionWindowPicture(mid)
          hurt.play()
        }
        setInput('')
        console.log(counterMeter)

    }


    const handleHighBlock = () => {
      setInput("high")
      //setImage(low)

    };


    const blinkButton = (actionButton) => {
        let ref = null;

        if (actionButton === "High") {ref = highRef}
        if (actionButton === "Mid") {ref = midRef}
        if (actionButton === "Low") {ref = lowRef}

        let count = 0;
        let buttonClicked = false
        const totalBlinks = 5;
        const blinkInterval = 100;  // time in milliseconds (500ms = 0.5s)
        
        const interval = setInterval(() => {
          if(count % 2 === 0) {
            ref.current.classList.add('ButtonFlash');
            beep.play();
          } else {
            ref.current.classList.remove('ButtonFlash');
          }
          count++;
          //console.log(count)
          
          // Stop blinking after 3 blinks (6 changes: visible -> hidden -> visible)
          if (count === totalBlinks * 2) {
            clearInterval(interval);
            ref.current.classList.remove('ButtonFlash'); // Ensure it's visible after blinking
          }
          /*if(input === "high")
          {
            hit.play()
            console.log("hit confirmed")
            clearInterval(interval);
            buttonClicked = true
            setInput('')
          }*/

          
          //ref.current.classList.remove('ButtonFlash');

        }, blinkInterval);
      }
        
    const handleCounterAttack = (e) => {
        hit.play()
        setBossHealth(bossHealth - 1)
        setCounterMeter(0)
        ActionWindowPicture(counter)


    }

    useEffect(() => {
      if (counterMeter === MAX_COUNTER_METER) 
        {setShowCounterButton(true)}
      else {setShowCounterButton(false)}
    }, [counterMeter,showCounterButton])



    const ActionButtons = () => {
        return (
            <>
                <button id='ActionButton' className='High' ref={highRef} 
                onClick={(e) => {
                  if(isRunning) 
                    {setInput('High')} 
                  else 
                    {setInput('')} }}
                //onClick={setImage(high)}
 
                > HIGH! </button>
                <button id='ActionButton' className='Mid' ref={midRef} 
                onClick={(e) => {
                  if(isRunning) 
                    {setInput('Mid')} 
                  else 
                    {setInput('')} }}
                //onClick={setImage(mid)}
                > MID! </button>
                <button id='ActionButton' className='Low' ref={lowRef} 
                onClick={(e) => {
                  if(isRunning) 
                    {setInput('Low')} 
                  else 
                    {setInput('')} }}
                > LOW! </button>
            </>
        );
    } 
    
    const TheCounterButton = () => {
        return (
            <>
            <button className='CounterButton' 
            onClick={handleCounterAttack}
            > COUNTER! </button>
            </>
        );
    } 

    function ActionWindowPicture(pic)
    {
      setImage(pic)
      setTimeout(() => {
        setImage(netural)
      }, 1500);



    }








    return (
    <div className="App">
      <Container className='container'>

        <table>
          <tr>
            <div><button id='ActionButton' onClick={StartTheGame} disabled={startGame}> Start </button> </div>
            {/* <Countdown initialTime={dodgeWindow}> </Countdown> */}
            <Card className='headerText'>
                <Card.Body>
                    <p>Dont get hit twice.</p>
                </Card.Body>
            </Card>
          </tr>
        <tr>
          <div className='ActionWindow'>
            <img className='ActionImage' src={image} alt={image} />

            
          </div>
        </tr>
        <tr>
            <div className='CounterMeter'>
                <div className='CounterMeterFill' style={{width : `${counterMeter/MAX_COUNTER_METER * 100}%`}}>
                    {" "}
                </div> 
            </div>
        </tr>
        <tr>
          <div className='Button Window'>
            { (showCounterButton) ?
                <TheCounterButton /> : <ActionButtons />
            }

            <div>{timeLeft}</div>
          </div>
        </tr>
        </table> 
        
        

      </Container>
      
  </div>

)};

export default Reactionary;


