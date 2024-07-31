import React from "react";

export default function Square(props) {
  return (
    
     <div className="group">
    <div className="container">
    <h2>TIC-TAC-TOE</h2>
    <h1>Let's Play</h1>
      <div>
        <button className="btn" onClick={()=>{props.squareClicked(0)}}>{props.squareValues[0]}</button>
        <button className="btn" onClick={()=>{props.squareClicked(1)}}>{props.squareValues[1]}</button>
        <button className="btn" onClick={()=>{props.squareClicked(2)}}>{props.squareValues[2]}</button>
      </div>
      <div>
        <button className="btn" onClick={()=>{props.squareClicked(3)}}>{props.squareValues[3]}</button>
        <button className="btn" onClick={()=>{props.squareClicked(4)}}>{props.squareValues[4]}</button>
        <button className="btn" onClick={()=>{props.squareClicked(5)}}>{props.squareValues[5]}</button>
      </div>
      <div>
        <button className="btn" onClick={()=>{props.squareClicked(6)}}>{props.squareValues[6]}</button>
        <button className="btn" onClick={()=>{props.squareClicked(7)}}>{props.squareValues[7]}</button>
        <button className="btn" onClick={()=>{props.squareClicked(8)}}>{props.squareValues[8]}</button>
      </div>
      <p>{props.win}</p>
   
      </div>
      </div> 
  );
}
