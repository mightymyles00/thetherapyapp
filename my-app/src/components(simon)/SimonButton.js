import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import './SimonButton.css'
import { useState } from 'react'
import React, { forwardRef } from 'react'



const GameBtn = forwardRef(( {border, bg, onClick}, ref) => (
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
    <button 
        style={{background: bg, borderRadius: border}} 
        onClick={onClick}
        ref={ref}
    /> 
    ));


export default GameBtn;