import './App.css';
import {BrowserRouter, Routes, Route, createBrowserRouter} from 'react-router-dom'
import ActivitesPage from './Activities.js';
import React, { useEffect, useState} from 'react'
import ReferenceImage from './components(puzzle)/image.png'
import './components(puzzle)/Puzzle.css'




import Card from 'react-bootstrap/Card'
//import CardBody from 'react-bootstrap/CardBody'
//import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'



const Puzzle = () => {
    const [positions, setPositions] = useState([...Array(16).keys()]);
    const [solved, setSolved] = useState(false);
    const [correct, setCorrect] = useState([...Array(16).keys()])
    const [started, setStarted] = useState(false);
    const [firstPass, setFirstPass] = useState(false)

    // Handling the start of a drag event
    const handleDragStart = (e,position) => {
        e.dataTransfer.setData("text/plain", position)
    };
    

    const handleDrop = (e, position) => {
        e.preventDefault();
        const originalPosition = e.dataTransfer.getData('text');
        console.log(originalPosition)
        setPositions((prevPositions) => {
            const newPos = [...prevPositions];
            [newPos[originalPosition], newPos[position]] = [
                newPos[position],
                newPos[originalPosition]
                
            ];

            return newPos
        });



        
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleStart = (e) => {
        e.preventDefault();
        if(started === false) {
            setStarted(true)

    }



    }

    function isSolved() {
        setSolved(JSON.stringify(positions) === JSON.stringify(correct))
        console.log(positions)
        console.log(solved)
        if (solved && started)
        {
            alert("Puzzle finished");
        }

    
    }


    // Activates at the start of the game
    useEffect(() => {
        //Shuffle the positions
        if(started === true)
        {
            setPositions((prevPositions) => {
                const newPos = [...prevPositions];
                newPos.sort(() => Math.random() - 0.5);
                return newPos;
                });
        }
    }, [started]);

    // Checks if the puzzle is completed        
    useEffect((e) => {
        if(started === true)
        {
            isSolved()
        }

    }, [positions]);


    return (
    <>
    <Container className='container'>
    <table>
        <tr>
            <Card className='headerText'>
                <Card.Body>
                    <p>Finish this puzzle under 100 seconds</p>
                </Card.Body>
            </Card>
        </tr>
        <tr>
    <table>
        <button style={{height: "40px", alignContent: 'center'}} onClick={handleStart}> "Start" </button>
    </table>
      </tr>
      <br></br>
    
    <tr>
        {/* Main container */}
    <Card className="PuzzleBoard">
        <div className='reference-image'>
            <img src={ReferenceImage} alt="ReferenceImage" />    
        </div>
        <div className="ThePuzzle">
            {positions.map((pos, index) => {
                const x = (pos % 4) * 100;
                const y = Math.floor(pos/4)*100;
                return (
                    <div
                    id={pos}
                    key={index}
                    className="puzzle-piece"
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragOver={handleDragOver}
                    style={{
                        backgroundImage: `url('${ReferenceImage}')`,
                        backgroundPosition: `-${x}px -${y}px`
                    }}
                ></div>
                );
            })
            }










        </div>
    </Card>


    </tr>





      </table>

      </Container>

  </>

  );
};


export default Puzzle;
