import React from "react";
import './styles/board.css'

const Btn = ({values}) =>{
// we map over the values array and create a button for each value.
  return (
    <div className="board-row">
    {values.map((value, index) => (
        <button key={index} className="square">{value}</button>
      ))}
    </div>
  )
}

export default Btn;