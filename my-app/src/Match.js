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



function Match() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [timer, setTimer] = useState(0)
  const [running, setRunning] = useState(false)
  const [matchedCards, setMatchedCards] = useState(0)

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
              return {...card, matched: true}

            } else {
              return card
            }
            
          }

          )
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }      
    }
    checkMatched()
  }, [choiceOne, choiceTwo, matchedCards])

  //console.log(cards)


  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  function checkMatched() {
    if (matchedCards === 6) {
      alert("You Did It!");
      setRunning(false)
    }
  }


  //start game automatically & when you hit start
  useEffect(() => {
    shuffleCards() 
  }, [])


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
          <button style={{height: "40px", alignContent: 'center'}} onClick={shuffleCards} disabled={false}> Start </button>

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
        </table> 
        
        

      </Container>
      
  </div>
  );
};


export default Match;


