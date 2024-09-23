import './App.css';
import welcomeImage from './welcome.png';
import startButton from './start.png';
import activitiesButton from './activities.png';
import statsButton from './stats.png'
import petButton from './pet.png'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import MatchPage from './Match.js';




import Card from 'react-bootstrap/Card'
//import CardBody from 'react-bootstrap/CardBody'
//import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'



function App() {
  return (

    <>
    
    
    <BrowserRouter>
      <Routes>
        <Route index element={<MatchPage />} />
        <Route path="/matching" element={<MatchPage />} />
      </Routes>
    </BrowserRouter>

    
    <Container className='container'>
      <table>
        <tr>
      <Card className='WelcomeMessage'>
        <Card.Body>
          <table>
            <tr>
              <td>
                <img src={welcomeImage} alt='meo' height='200px' style={{ borderRadius: "25px" }} />
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
          <table border={4}>
            <tr aria-rowspan={2}>
              <td colSpan={2}>
                <button> <img src={startButton} alt='start' height='110'/> </button>
              </td>
            </tr>
            <tr>
              
              <td width={'50%'}>
                <button> <img src={activitiesButton} alt='activities' height={175}/> </button> 
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