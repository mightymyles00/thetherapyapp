import './App.css';
import welcomeImage from './welcome.png';
import Card from 'react-bootstrap/Card'
//import CardBody from 'react-bootstrap/CardBody'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'



function App() {
  return (
    <Container>

        <Card id='welcome'>        
            <Card.Body> Hello </Card.Body>
            <p> hello </p>

        </Card>
      </Container>

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