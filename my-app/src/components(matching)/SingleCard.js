import './SingleCard.css'
import BackPic from './CardImages/background.jpg'



export default function SingleCard( {card, handleChoice, flipped}) {
    
    const handleClick = () => {
        handleChoice(card)
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