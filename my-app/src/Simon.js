import './App.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

  


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
      <br></br>
      <tr>
        <Card>
            <p>Game goes here</p>
        </Card>
        </tr>
      </table>

      </Container>

  </>
  );
};

export default Simon;
