import './App.css';
import welcomeImage from './welcome.png';
import {Panel, PanelGroup} from 'rsuite'

function App() {
  return (
    <div className="App">
      <Panel.Body bgcolor='red'>        
      <table>
        <tr>
        <td> <img src={welcomeImage} alt='meo' height='150px'/> </td>
        <td align='left'>
          <p>Good Morning, Myles</p>
          <p>Came back for more brain exercise? </p>
        </td>
      </tr>
      </table>

        
        <button> New Game </button>
      </Panel.Body>

    </div>
  );
}

export default App;
