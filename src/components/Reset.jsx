import React from 'react'

export default function Reset (props) {
  return (
    
    <div className="reset">
        <button  onClick={() => {props.resetNow()}}>New Game</button>
    </div>
    
  )
}