import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import './SimonButton.css'
import { useState } from 'react'
import React, { forwardRef } from 'react'



const GameBtn = forwardRef(( { color, border, bg, onClick}, ref) => (   
    <button 
        className='SimonButton'
        color={color}
        style={{background: bg, borderRadius: border}} 
        onClick={onClick}
        ref={ref}
    /> 
    ));


export default GameBtn;