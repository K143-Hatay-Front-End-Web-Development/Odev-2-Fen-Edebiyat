import React, { useState } from 'react';
import CheckMatch from "./CheckMatch";

const GameContainer = () => {

  const [table, setTable] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);


  const onMouseEnterHandler = event => {
    if(event.target.innerText === ""){
      event.target.className = "cell mouse-over-empty"
    }
    if (event.target.innerText === "X"){
      event.target.className = "cell mouse-over-filled-x"
    }
    if (event.target.innerText === "O"){
      event.target.className = "cell mouse-over-filled-o"
    }
  }
  const onMouseLeaveHandler = event => {
    if(event.target.innerText === ""){
      event.target.className = "cell"
    }
    if(event.target.innerText === "X"){
      event.target.className = "cell x-filled"
    }
    if(event.target.innerText === "O"){
      event.target.className = "cell o-filled"
    }
  }
  const clickHandler = event => {

    const row = event.target.attributes.row.value;
    const col = event.target.attributes.col.value;

    if(event.target.innerText === ""){
      event.target.innerText = "X"
      event.target.className = "cell mouse-over-filled-x"

       /* Gözden geçirelecek */
       table[row][col] = "X";
       setTable(table);
    } 
    else if(event.target.innerText === "X"){
      event.target.innerText = "O"
      event.target.className = "cell mouse-over-filled-o"

      /* Gözden geçirelecek */
      table[row][col] = "O";
      setTable(table);

    }
    else{
      event.target.innerText = ""
      event.target.className = "cell mouse-over-empty"

      /* Gözden geçirelecek */
      table[row][col] = "";
      setTable(table);
    }
    CheckMatch(table[0], table[1], table[2])     
  }
  return (
    <div className='game--container'>
       <div
        row={0}
        col={0}
        className="cell"
        onClick={clickHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      ></div>
      <div
        row={0}
        col={1}
        className="cell"
        onClick={clickHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      ></div>
      <div
        row={0}
        col={2}
        className="cell"
        onClick={clickHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      ></div>
      <div
        row={1}
        col={0}
        className="cell"
        onClick={clickHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      ></div>
      <div
        row={1}
        col={1}
        className="cell"
        onClick={clickHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      ></div>
      <div
        row={1}
        col={2}
        className="cell"
        onClick={clickHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      ></div>
      <div
        row={2}
        col={0}
        className="cell"
        onClick={clickHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      ></div>
      <div
        row={2}
        col={1}
        className="cell"
        onClick={clickHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      ></div>
      <div
        row={2}
        col={2}
        className="cell"
        onClick={clickHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      ></div>
      </div>
  );
};

export default GameContainer;