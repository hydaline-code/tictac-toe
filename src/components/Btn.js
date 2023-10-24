import React, { useState } from "react";
import './styles/board.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Btn = () =>{
const [buttonValues, setButtonValues] = useState(["", "", ""]);

const handleClick=(index) =>{
  const newbtnValues= [...buttonValues];
  newbtnValues[index] = <FontAwesomeIcon icon={faClose} />;
  setButtonValues(newbtnValues);
}
  return (
    <div className="board-row">
    {buttonValues.map((value, index) => (
        <button key={index} className="square" onClick={() => handleClick(index)}>{value}</button>
      ))}
    </div>
  )
}

export default Btn;