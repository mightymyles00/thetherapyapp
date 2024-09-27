import './App.css';
import welcomeImage from './welcome.png';
import startButton from './start.png';
import activitiesButton from './activities.png';
import statsButton from './stats.png'
import petButton from './pet.png'
import {BrowserRouter, Routes, Route, createBrowserRouter} from 'react-router-dom'
import ActivitesPage from './Activities.js';




import Card from 'react-bootstrap/Card'
//import CardBody from 'react-bootstrap/CardBody'
//import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Timer from './Timer.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "activities",
    element: <ActivitesPage />
  }
])


function App() {
  return (

    <>

    <Container className='container'>
      <table>
        <tr>
      <Card className='WelcomeMessage'>
        <Card.Body>
          <table>
            <tr>
              <td>
                <img src={welcomeImage}  alt='meo' height='200px' style={{ borderRadius: "25px" }} />
              </td>
              <td>
                <p>Good Morning, Myles</p>
                <p>Came back for more brain exercise? </p>
              </td>
            </tr>
          </table>
        </Card.Body>

      </Card>
      </tr>
      <br></br>
      <tr>
        <Card className='WelcomeMessage'>
          <table>
            <tr aria-rowspan={2}>
              <td colSpan={2}>
                <button style={{width: "100%", alignContent: "center"}}> <img src={startButton} alt='start'/> </button>
              </td>
            </tr>
            <tr>

              <td width={'50%'}>
                <a href='/activities'>
                <button> <img src={activitiesButton} alt='activities' height={175}/> </button>
                </a>
              </td>
              <tr>
                <button> <img src={statsButton} alt='stats' height={100}/> </button>

                <button> <img src={petButton} alt='stats' height={75}/> </button>
              </tr>

            </tr>

          </table>
        </Card>
        </tr>
      </table>

      </Container>

  </>
  );
};

/*const styles = {
  width: "100%",
  height: 600,
  marginTop: "20px",
  border: "1px solid black"
};*/

export default App;


/*<table>
            <tr>
              <td>
           <img src={welcomeImage} alt='meo' height='150px'/>
              </td>
           </tr>
           <tr>

          <p>Good Morning, Myles</p>
          <p>Came back for more brain exercise? </p>
          </tr>
          </table>*/