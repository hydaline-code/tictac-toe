import React from "react";
import './styles/board.css';


const Btn = ({ value, onClick }) =>{

  return (
    <div className="board-row">
   <button
        className="square"
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  )
}

export default Btn;