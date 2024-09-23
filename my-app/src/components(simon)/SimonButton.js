import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import './SimonButton.css'
import { useState } from 'react'



function GameBtn( {border, bg, onClick}) {
    /*var roundLocation

    if (border === 'top-left') 
    {
        roundLocation = "200px 0px 0px 0px"
    }
    if (border === 'top-right') 
    {
        roundLocation = "0px 200px 0px 0px"
    }
    if (border === 'bottom-left') 
    {
        roundLocation = "0px 0px 200px 0px"
    }
    if (border === 'bottom-right') 
    {
        roundLocation = "0px 0px 0px 200px"
    }
    
    else {
        return;
    }*/




    return (
        <button 
        style={{background: bg, borderRadius: border}} 
        onClick={onClick} /> 
    )
}

export default GameBtn;