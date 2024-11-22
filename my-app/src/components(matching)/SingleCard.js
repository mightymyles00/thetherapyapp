import './SingleCard.css'
import BackPic from './CardImages/background.jpg'

import switchCard from './switch.wav'
const switchSound = new Audio(switchCard)



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