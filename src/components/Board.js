import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import './styles/board.css'
import Btn from "./Btn";

const Board= () => {


  return (
<div className="board">
      <Btn />
      <Btn />
      <Btn />
</div>
  );
}

export default Board;