import React from 'react'
import { render } from 'react-dom'
import CounterFirst from './components/CounterFirst'
import './style.css'
render(
    <div className = "container">
        <CounterFirst />
        <CounterFirst />
        <CounterFirst />
        <CounterFirst />
    </div>,
        document.getElementById('root')
    
)