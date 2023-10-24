
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';
import './styles/board.css'
import Btn from "./Btn";

const Board = () => {
  const [buttonValues, setButtonValues] =  useState(Array(9).fill(null))   //or useState([null, null, null, null, null, null, null, null, null]);
  const [btnIsNext, setbtnIsNext] = useState(false); //is a boolean variable that keeps track of whose turn it is. 

  const handleClick = (index) => {
    const newButtonValues = [...buttonValues]; // makes a copy of the array you can use  buttonValues.slice();
    if (newButtonValues[index] === null) {
    newButtonValues[index] =btnIsNext ? <FontAwesomeIcon icon={faTimes}  className="icon"/> :
    <FontAwesomeIcon icon={faCircle} className="icon" />; //When xIsNext is true, it's "X's" turn, and when it's false, it's "O's" turn.
    setButtonValues(newButtonValues);
    setbtnIsNext(!btnIsNext);
    
    }
  };
  
  return (
    <div className="board">
      <div className="grid-container">
      {buttonValues.map((value, index) => (
        <Btn key={index} value={value} onClick={() => handleClick(index)} />
      ))}
      </div>
    </div>
  );
};

export default Board;
