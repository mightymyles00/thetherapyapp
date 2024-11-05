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
          <table align={'center'}>
            <tr aria-rowspan={2}>
              <td colSpan={2}>
                <button style={{width: "90%", height: "50%", alignContent: "center", backgroundColor: 'lightgreen'}}> <center> <img src={startButton} alt='start' width='90%' style={{border: 'none'}}/></center> </button>
              </td>
            </tr>
            </table>
            <p></p>
            <table align={'center'}>
              <tr>

              <td width={'55%'} align='right'>
                <a href='/activities'>
                <button style={{backgroundColor: 'yellow', alignContent: 'right', width: '90%', textAlign: 'center'}}> <center> <img src={activitiesButton} alt='activities' height={220} style={{border: 'none'}}/> </center> </button>
                </a>
              </td>
              <tr align='left'>
                <button style={{backgroundColor: 'yellow', width: '85%', height: '80%'}}> <center> <img src={statsButton} alt='stats' height={120} style={{border: 'none'}}/> </center> </button>
                <button style={{backgroundColor: 'yellow', width: '85%'}}> <img src={petButton} alt='stats' height={85} style={{border: 'none'}}/> </button>
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
export default App;