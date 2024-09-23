import './App.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import SimonButton from './components(simon)/SimonButton.js'
import { useState, useRef, useEffect } from 'react';


const colors = ["green", "red", "yellow", "blue"]

function Simon() {
  const [sequence, setSequence] = useState([]);
  const [playing, setPlaying] = useState(false);

  //reference buttons
  const greenRef = useRef(null);
  const redRef = useRef(null);
  const yellowRef = useRef(null);
  const blueRef = useRef(null);


  //function
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
          //var xref = document.getElementById(sequence[idx])
          //xref.current.classList.add("bright-buttons")
          console.log(ref) 
          ref.current.classList.add("brightness-[2.5]");

          setTimeout(() => {
            //xref.current.classList.remove("bright-buttons")
            ref.current.classList.remove("brightness-[2.5]");
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

      <button style={{height: "40px", alignContent: 'center'}} onClick={handleNextLevel}> Start </button>
      </table>
      </tr>
      <br></br>

      {/* Main container */}
      <Card className='SimonContainer' >
      <tr>
        <table>
          <tr>
            <td>
              <SimonButton id="green" bg="green" border="200px 0px 0px 0px" ref={greenRef}/>
            </td>
            <td>
              <SimonButton id="red" bg="red" border="0px 200px 0px 0px" ref={redRef}/> 
            </td>
          </tr>
          <tr>
            <td>
              <SimonButton id="yellow" bg="yellow" border="0px 0px 0px 200px" ref={yellowRef}/>
            </td>
            <td>
              <SimonButton id="blue" bg="blue" border="00px 0px 200px 0px" ref={blueRef}/>
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
