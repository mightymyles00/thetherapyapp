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
import damaged from './components(reactionary)/images/hurt.jpg'



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
    const initialTime = 600;
    const [startGame, setStartGame] = useState(false);

    // Block window
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    
    const [input, setInput] = useState('');
    const [attack, setAttack] = useState('')
    const BossAttacks = ["High", 'Mid', "Low"]
    const Buttons = ["High", 'Mid', "Low"]


    const highRef = useRef(null);
    const midRef = useRef(null);
    const lowRef = useRef(null);
    const [image, setImage] = useState(netural);
    const [buttonPressed, setButtonPressed] = useState(false)

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
        if(startGame && !buttonPressed && !showCounterButton) {

          setInterval(() => {
            console.log("set attack")
            prepareAttack(initialTime, BossAttacks[getRandomInterval(0,3)])
          }, 7000)
        }
        
      }, [startGame, buttonPressed]);
    
    const prepareAttack = (time,attack) => {
      if (!isRunning) {
        console.log(attack)
        setAttack(attack)
        setTimeLeft(time)
        setIsRunning(true);
        //blinkButton(attack)
        //whichAttack(attack)
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

    const actionButtonPressed = (e, attack) => {
      if(isRunning) {
        //ActionWindowPicture(attack)
        setIsRunning(false)
        setInput(attack)
        console.log(attack)
        setButtonPressed(true)
        //setTimeLeft(0)
      }
      else {
        console.log("not yet")
      }
      
      //if attackNum = 1
    }

    useEffect(() => {
      let intervalId;
      
      if (!showCounterButton && startGame) {
      if (isRunning && timeLeft > 0) {
        let ref = null;

        if (attack === "High") {ref = highRef}
        if (attack === "Mid") {ref = midRef}
        if (attack === "Low") {ref = lowRef}
        intervalId = setInterval(() => {
              setTimeLeft((prevTime) => prevTime - 1);
              if(timeLeft % 5 === 0)
              {
                ref.current.classList.remove('ButtonFlashB');
                ref.current.classList.add('ButtonFlashA');
                beep.play();
              }
              else
              {
                ref.current.classList.remove('ButtonFlashA');
                ref.current.classList.add('ButtonFlashB');
              }

              /*if(buttonPressed === true)
              {
                console.log('button pressed!')
                clearInterval()
                setButtonPressed(false)
                
              }*/

          }, 0);
      }
      if (timeLeft === 0 || !(input === '')) {
          console.log('stop running')
          if(attack === input)
          {

            console.log("block confirmed")
            swing.play()
            setCounterMeter((prevCounter) => prevCounter + 1)
            ActionWindowPicture(attack)

          }
          else if(!(attack === 'null'))
          {
            console.log("player hit")
            hurt.play()
            ActionWindowPicture("Damaged")

            setCharDamage((prevDamage) => prevDamage + 1)
            
          }
          setIsRunning(false);
          setInput('')
          setAttack('null')
      }
  
      return () => clearInterval(intervalId);

    }


    },  [isRunning, timeLeft, buttonPressed]);


        
    const handleCounterAttack = (e) => {
        hit.play()
        setBossHealth(bossHealth - 1)
        setCounterMeter(0)
        ActionWindowPicture("Counter")


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
                    actionButtonPressed(e, "High")
                    }}
                > HIGH! </button>
                <button id='ActionButton' className='Mid' ref={midRef} 
                onClick={(e) => {
                    actionButtonPressed(e, "Mid")
                    }}
                > MID! </button>
                <button id='ActionButton' className='Low' ref={lowRef} 
                onClick={(e) => {
                    actionButtonPressed(e, "Low")
                    }}
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
      if(pic === "High") {setImage(high)}
      else if (pic ==="Mid") {setImage(mid)}
      else if (pic === "Low") {setImage(low)}
      else if (pic === "Counter") {setImage(counter)}
      else if (pic === "Damaged") {
        setImage(damaged)

        }

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
            <div>Character Damage: {charDamage}</div>
            <div>Boss Health: {bossHealth}</div>

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


