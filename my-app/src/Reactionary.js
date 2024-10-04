import './components(reactionary)/Reactionary.css';
import {BrowserRouter, Routes, Route, createBrowserRouter} from 'react-router-dom'
import { useState, useRef, useEffect } from 'react';




import Card from 'react-bootstrap/Card'
//import CardBody from 'react-bootstrap/CardBody'
//import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Timer from './Timer.js';

const dodgeWindow = 3000; // 3 secs







setInterval(function() {
    
}, 2000);

function Reactionary() {
    const highRef = useRef(null);
    const midRef = useRef(null);
    const lowRef = useRef(null);



    const DodgeHigh = () => {
        console.log("JUMP")
        blinkButton('high')
    }


    function blinkButton(actionButton) {
        let ref = null;

        if (actionButton === "HighButton") ref = highRef
        if (actionButton === "MidButton") ref = midRef
        if (actionButton === "LowButton") ref = lowRef

        let count = 0;
        const totalBlinks = 5;
        const blinkInterval = 100;  // time in milliseconds (500ms = 0.5s)
        
        const interval = setInterval(() => {
          if(count % 2 === 0)
            ref.current.classList.add('ButtonFlash');
          else
            ref.current.classList.remove('ButtonFlash');

          count++;
          console.log(count)
          
          // Stop blinking after 3 blinks (6 changes: visible -> hidden -> visible)
          if (count === totalBlinks * 2) {
            clearInterval(interval);
            ref.current.classList.remove('ButtonFlash'); // Ensure it's visible after blinking
          }
          //ref.current.classList.remove('ButtonFlash');

        }, blinkInterval);
      }
    
    const handleClick =(e) => {
        blinkButton("HighButton")

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
          <div className='ActionWindow'></div>
        </tr>
        <tr>
            <br></br>
          <div className='Button Window'>
            <button id='ActionButton' className='HighButton' ref={highRef}> HIGH! </button>
            <button id='ActionButton' className='MidButton' ref={midRef} onClick={handleClick}> MID! </button>
            <button id='ActionButton' className='LowButton' ref={lowRef}> LOW! </button>

          </div>
        </tr>
        </table> 
        
        

      </Container>
      
  </div>

)};

export default Reactionary;


