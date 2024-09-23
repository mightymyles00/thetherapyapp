import './App.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import SimonButton from './components(simon)/SimonButton.js'




function Simon() {
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

      <button style={{height: "40px", alignContent: 'center'}}> Start </button>
      </table>
      </tr>
      <br></br>

      {/* Main container */}
      <Card className='SimonContainer' >
      <tr>
        <table>
          <tr>
            <td>
              <SimonButton bg="green" border="200px 0px 0px 0px"/>
            </td>
            <td>
              <SimonButton bg="red" border="0px 200px 0px 0px"/> 
            </td>
          </tr>
          <tr>
            <td>
              <SimonButton bg="yellow" border="0px 0px 0px 200px"/>
            </td>
            <td>
              <SimonButton bg="blue" border="00px 0px 200px 0px"/>
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
