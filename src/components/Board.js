
import React, { useState } from "react";
import './styles/board.css'
import Btn from "./Btn";

const Board = () => {
  const [buttonValues, setButtonValues] =  useState(Array(9).fill(null))   //or useState([null, null, null, null, null, null, null, null, null]);
  const [btnIsNext, setbtnIsNext] = useState(true); //is a boolean variable that keeps track of whose turn it is. 


  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  
    return null;
  }
  
  
  const handleClick = (index) => {
    if (calculateWinner(buttonValues) || buttonValues[index]) {
      return;
    }

    const newButtonValues =buttonValues.slice(); // makes a copy of the array you can use  buttonValues.slice(); [...buttonValues]
    if (newButtonValues[index] === null) {
    newButtonValues[index] =btnIsNext ? "X" : "O" //When xIsNext is true, it's "X's" turn, and when it's false, it's "O's" turn.
    setButtonValues(newButtonValues);
    setbtnIsNext(!btnIsNext);
    };
    }

    const winner = calculateWinner(buttonValues);
    let status;
    if (winner) {
      status = 'Winner is : ' + winner;
    } else {
      status = 'Next player: ' + (btnIsNext ? 'X' : 'O');
    }
  
  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="grid-container">
      {buttonValues.map((value, index) => (
        <Btn key={index} value={value} onClick={() => handleClick(index)} />
      ))}
      </div>
    </div>
  );
};

export default Board;
