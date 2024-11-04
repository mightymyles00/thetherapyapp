import './SingleCard.css'
import BackPic from './CardImages/background.jpg'

import miss from './miss.wav'
import match from './match.wav'
import success from './success.wav'
import turnover from './switch.wav'

const missSound = new Audio(miss)
const switchSound = new Audio(turnover)
const matchSound = new Audio(match)
const successSound = new Audio(success)



export default function SingleCard( {card, handleChoice, flipped, disabled}) {
    
    const handleClick = () => {
        if(!disabled) {
            switchSound.play()
            handleChoice(card)
        }
    }
    
    
    return (
    <div className="card">
        <div className={flipped ? "flipped" : ""}>
            <img className="front" src={card.src} alt="card front" />
            <img 
                className="back" 
                src={BackPic} 
                onClick={handleClick} 
                alt="card back" 
            />
        </div>
    </div>
)


}