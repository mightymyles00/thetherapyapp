import './components(reactionary)/Reactionary.css';
import {BrowserRouter, Routes, Route, createBrowserRouter} from 'react-router-dom'
import { useState, useRef, useEffect } from 'react';

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
    const highRef = useRef(null);
    const midRef = useRef(null);
    const lowRef = useRef(null);
    const [input, setInput] = useState('')
    const [image, setImage] = useState(netural)


    const MAX_COUNTER_METER = 3
    const [counterMeter, setCounterMeter] = useState(0)

    const MAX_BOSS_HEALTH = 3
    const [bossHealth, setBossHealth] = useState(MAX_BOSS_HEALTH)
    const [charDamage, setCharDamage] = useState (0)


    


    const handleDodgeHigh = () => {
        //console.log("JUMP")
        if(counterMeter !== (MAX_COUNTER_METER - 1))
          blinkButton('HighButton')
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

    useEffect(() => {


    }  ,[]);

    const handleHighBlock = () => {
      setInput("high")
      //setImage(low)

    };


    function blinkButton(actionButton) {
        let ref = null;

        if (actionButton === "HighButton") ref = highRef
        if (actionButton === "MidButton") ref = midRef
        if (actionButton === "LowButton") ref = lowRef

        let count = 0;
        let buttonClicked = false
        const totalBlinks = 5;
        const blinkInterval = 100;  // time in milliseconds (500ms = 0.5s)
        
        const interval = setInterval(() => {
          if(count % 2 === 0) {
            ref.current.classList.add('ButtonFlash');
            beep.play();
          } else
            ref.current.classList.remove('ButtonFlash');

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
    
    const handleClick = (e) => {
        blinkButton("HighButton")
        //hit.play()
        //setCounterMeter(counterMeter + 1)
        //console.log(counterMeter)


    }
    
    const handleCounterAttack = (e) => {
        hit.play()
        setBossHealth(bossHealth - 1)
        setCounterMeter(0)
        ActionWindowPicture(counter)


    }



    function ActionButtons() {
        return (
            <>
                <button id='ActionButton' className='HighButton' ref={highRef} 
                onClick={handleHighBlock}
                //onClick={setImage(high)}
 
                > HIGH! </button>
                <button id='ActionButton' className='MidButton' ref={midRef} 
                onClick={handleDodgeHigh} 
                //onClick={setImage(mid)}
                > MID! </button>
                <button id='ActionButton' className='LowButton' ref={lowRef} 
                //onClick={setImage(netural)}
                > LOW! </button>
            </>
        );
    } 
    
    function TheCounterButton() {
        return (
            <>
            <button className='CounterButton' onClick={handleCounterAttack()} > COUNTER! </button>
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
            { counterMeter === MAX_COUNTER_METER ?
                <TheCounterButton /> : <ActionButtons />
            }

          </div>
        </tr>
        </table> 
        
        

      </Container>
      
  </div>

)};

export default Reactionary;


