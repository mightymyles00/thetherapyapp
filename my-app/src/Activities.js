import './App.css';
import SimonButton from './components(activities)/simon.png'
import MatchButton from './components(activities)/matching.png'
import ReactButton from './components(activities)/reactionary.png'
import PuzzleButton from './components(activities)/puzzle.png'
//import ReactPage from './React.js';
import PuzzlePage from './Puzzle.js'
import {BrowserRouter, Routes, Route, createBrowserRouter} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

/*const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "matching",
      element: <MatchPage/>
    },
    {
      path: "simon",
      element: <SimonPage />
    },
    {
        path: "puzzle",
        //element: <PuzzlePage />
    },
    {
        path: "reactionary",
        //element: <ReactPage />
    },
    
    
  ])*/
  


function Activites() {
  return (

    <>
    <Container className='container'>
      <table>
        <tr>
      <Card className='headerText'>
        <Card.Body>
            <p>Select an Activity!</p>
        </Card.Body>

      </Card>
      </tr>
      <br></br>
      <tr>
        <Card>
          <table border={4} width='50%'>
            <tr>
              <td>
                <a href='/simon'> 
                <button> <img src={SimonButton} alt='start' height='110'/> </button>
                </a>
              </td>
              <td>
                <a href='/matching'>
                <button> <img src={MatchButton} alt='start' height='110'/> </button>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href='/puzzle'>
                <button> <img src={PuzzleButton} alt='start' height='110'/> </button>
                </a>
              </td>
              <td>
                <button> <img src={ReactButton} alt='start' height='110'/> </button>

              </td>
            </tr>
          </table>
        </Card>
        </tr>
      </table>

      </Container>

  </>
  );
};

export default Activites;
