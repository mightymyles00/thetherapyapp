import './App.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import SimonButton from './components(simon)/SimonButton.js'
import { useState, useRef, useEffect } from 'react';


const colors = ["green", "red", "yellow", "blue"]

function Simon() {
  const [sequence, setSequence] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [playingIdx, setPlayingIdx] = useState(0);

  //reference buttons
  const greenRef = useRef(null);
  const redRef = useRef(null);
  const yellowRef = useRef(null);
  const blueRef = useRef(null);


  //function 
  const resetGame = () => {
    setSequence([])
    setPlaying(false)
    setPlayingIdx(0)
  }

  const addNewColor = () => {
    const color = colors[Math.floor(Math.random() * 4)];
    const newSequence = [...sequence, color];
    setSequence(newSequence);
  }


  const handleNextLevel = () => {
    if(!playing) {
      setPlaying(true);
      addNewColor();
    }
  }

  const handleColorClick = (e) => {
    if (playing) {
      e.target.classList.add("opacity-50");

      setTimeout(() => {
        e.target.classList.remove("opacity-50")

      })

      const clickColor = e.target.getAttribute("color");

      // click the correct color of the sequence
      if(sequence[playingIdx] === clickColor) // CORRECT 
      {
        if (playingIdx === sequence.length -1) {
          setTimeout(() => {
            setPlayingIdx(0);
            addNewColor();
          }, 250);


        } 
        else {
          setPlayingIdx(playingIdx + 1);
        }
        //missing colors of the seuqenece to be clicked


      }
      else // INCORRECT
      {
        
        resetGame()
        alert("You Lost!");
      }       
    }

  }

  // excutes if the sequence changes
  useEffect(() => {
    // show sequence
    if (sequence.length > 0) {
      const showSequence = (idx = 0) => {
        let ref = null;

        if (sequence[idx] === "green") ref = greenRef
        if (sequence[idx] === "red") ref = redRef
        if (sequence[idx] === "yellow") ref = yellowRef
        if (sequence[idx] === "blue") ref = blueRef
        // highlight the ref
        
        console.log(sequence[idx])
        setTimeout(() => {
          var xref = document.getElementById(sequence[idx])
          //xref.current.classList.add("bright-buttons")
          //console.log(ref) 
          //xref.style.backgroundColor = "white"
          ref.current.classList.add("bright-buttons");

          setTimeout(() => {
            //xref.current.classList.remove("bright-buttons")
            ref.current.classList.remove("bright-buttons");
            if (idx < sequence.length -1) showSequence(idx + 1);
          }, 250);
        }, 250);
      };

      showSequence()
    }
  }, [sequence])

  

  return (

    <>
    <Container className='container'>
      <table>
        <tr>
      <Card className='headerText'>
        <Card.Body>
            <p>Score at least 5pts to continue to the next area!</p>
        </Card.Body>

      </Card>
      </tr>
        <tr>
          <table>

      <button style={{height: "40px", alignContent: 'center'}} onClick={handleNextLevel}> {sequence.length === 0 ? "Start" : sequence.length} </button>
      </table>
      </tr>
      <br></br>

      {/* Main container */}
      <Card className='SimonContainer' >
      <tr>
        <table>
          <tr>
            <td>
              <SimonButton color="green" bg="green" border="200px 0px 0px 0px" onClick={handleColorClick} ref={greenRef}/>
            </td>
            <td>
              <SimonButton color="red" bg="red" border="0px 200px 0px 0px" onClick={handleColorClick} ref={redRef}/> 
            </td>
          </tr>
          <tr>
            <td>
              <SimonButton color="yellow" bg="yellow" border="0px 0px 0px 200px" onClick={handleColorClick} ref={yellowRef}/>
            </td>
            <td>
              <SimonButton color="blue" bg="blue" border="00px 0px 200px 0px" onClick={handleColorClick} ref={blueRef}/>
            </td>
          </tr>
          </table>
      </tr>





      </Card>
      </table>

      </Container>

  </>
  );
};

export default Simon;
