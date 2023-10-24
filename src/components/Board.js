import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import './styles/board.css'
import Btn from "./Btn";

const Board= () => {
// pass array of values as props
const rowValues = [
  [1, 2, 3],  // Values for the first row
  [4, 5, 6],  // Values for the second row
  [7, 8, 9]   // Values for the third row
];

  return (
<div className="board">
      {rowValues.map((values, rowIndex) =>(
        <Btn key={rowIndex} values={values} />
      ))}
</div>
  );
}

export default Board;