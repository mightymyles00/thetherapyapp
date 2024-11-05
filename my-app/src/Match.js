import './App.css';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { useEffect, useState } from 'react'
import Pic1 from './components(matching)/CardImages/1.png'
import Pic2 from './components(matching)/CardImages/2.png'
import Pic3 from './components(matching)/CardImages/3.png'
import Pic4 from './components(matching)/CardImages/4.png'
import Pic5 from './components(matching)/CardImages/5.png'
import Pic6 from './components(matching)/CardImages/6.png'
import SingleCard from './components(matching)/SingleCard'
import Timer from './Timer.js'

import miss from './components(matching)/miss.wav'
import match from './components(matching)/match.wav'
import success from './components(matching)/success.wav'
import turnover from './components(matching)/switch.wav'


const cardImages = [
  {"src": Pic1,
    "card": "./components(matching)/CardImages/1.png",
    "text": "card1",
    matched: false    
  },
  {"src": Pic2,
    "card": "./components(matching)/CardImages/2.png",
    "text": "card2",
    matched: false  
  },
  {"src": Pic3,
    "card": "./components(matching)/CardImages/3.png",
    "text": "card3",
    matched: false  
  },
  {"src": Pic4,
    "card": "./components(matching)/CardImages/4.png",
    "text": "card4",
    matched: false  
  },
  {"src": Pic5,
    "card": "./components(matching)/CardImages/5.png",
    "text": "card5",
    matched: false  
  },
  {"src": Pic6,
    "card": "./components(matching)/CardImages/6.png",
    "text": "card6",
    matched: false  
  }

]

const missSound = new Audio(miss)
const switchSound = new Audio(turnover)
const matchSound = new Audio(match)
const successSound = new Audio(success)


function Match() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [timer, setTimer] = useState(0)
  const [running, setRunning] = useState(false)
  const [matchedCards, setMatchedCards] = useState(0)
  const [completed, setCompleted] = useState(false)

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()   }))
    
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
    setRunning(true)
    setMatchedCards(0)


  }
  
  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card) // True = 
  }

  // compare 2 selected cards
  useEffect(() => {

    if (choiceOne && choiceTwo) {
      setDisabled(true)


      if (choiceOne.card === choiceTwo.card) {
        console.log("the cards match")
        setMatchedCards(matchedCards + 1)
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src) {
              matchSound.play()
              return {...card, matched: true}
              

            } else {
              return card
            }
            
          }

          )
        })
        resetTurn()
      } else {
        setTimeout(() => {resetTurn()  
          missSound.play()}, 1000)
      }      
    }
    checkMatched()
  }, [choiceOne, choiceTwo, matchedCards])

      //TIMER
      useEffect(() => {
        if(!running) return 

        const interval = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000)
        return () => clearInterval(interval)


    }, [running])

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  function checkMatched() {
    if (matchedCards === 6) {
      successSound.play()
      setCompleted(true)
      setRunning(false)
      setTimeout(() => {alert("You Did It! " + "\n Finished in " +timer+ " seconds!")
        setRunning(false)
      }, 100)
    }
  }

  const handleStart = () => {
    setRunning(true)
  }


  //start game automatically & when you hit start
  useEffect(() => {
    if (running) {
      shuffleCards()
      console.log('starting')
      console.log(running) 
    }
  }, [running])


  return (
    <div className="App">
      <Container className='container'>

        <table>
          <tr>
            <Card className='headerText'>
                <Card.Body>
                    <p>Match all the cards to continue to the next area.</p>
                </Card.Body>
            </Card>
          </tr>
          <button style={{height: "40px", width: "200px", alignContent: 'center'}} onClick={handleStart} disabled={running}> Start </button>

          <div className='card-grid'>
          {cards.map(card => (
            <SingleCard 
              key={card.id} 
              card={card} 
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled} 
            />
          ))}
          </div>
          <p> Turns: {turns}</p>
          <p> Time: {timer}</p>
        </table> 
        
        

      </Container>
      
  </div>
  );
};


export default Match;


