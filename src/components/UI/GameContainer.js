import React, { useEffect, useState } from "react";
import CheckMatch from "../utils/CheckMatch";
import GameFooter from "./GameFooter";

const GameContainer = () => {
  const [table, setTable] = useState([]);
  const [winner, setWinner] = useState();


  /* styling for mouse moments */

  const onMouseEnterHandler = (event) => {
    if (event.target.innerText === "") {
      event.target.className = "cell mouse-over-empty";
    } else if (event.target.innerText === "X") {
      event.target.className = "cell mouse-over-filled-x";
    }
    if (event.target.innerText === "O") {
      event.target.className = "cell mouse-over-filled-o";
    }
  };
  const onMouseLeaveHandler = (event) => {
    if (event.target.innerText === "") {
      event.target.className = "cell";
    }
    if (event.target.innerText === "X") {
      event.target.className = "cell x-filled";
    }
    if (event.target.innerText === "O") {
      event.target.className = "cell o-filled";
    }
  };
  const clickHandler = (event) => {
    const row = event.target.attributes.row.value;
    const col = event.target.attributes.col.value;
/* logic for filling cells*/ 
    const squares = [...table];
    if (winner !== undefined)
      setTable([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);

    else if (event.target.innerText === "")/*if the cell is empty, fill with X*/ {
      squares[row][col] = "X";
      setTable(squares);
      event.target.className = "cell mouse-over-filled-x";
    } else if (event.target.innerText === "X") {/*if the cell is X, fill with O*/
      squares[row][col] = "O";
      console.log(squares)
      setTable(squares);
      event.target.className = "cell mouse-over-filled-o";
    } else {/*if the cell is O, fill with empty*/
      squares[row][col] = "";
      setTable(squares);
      event.target.className = "cell mouse-over-empty";
    }
    let o = CheckMatch(table[0], table[1], table[2])
    console.log(o)
    setWinner(CheckMatch(table[0], table[1], table[2]));
  };

  useEffect(() => {/* create an empty table on page load*/
    setTable([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  }, []);

  return (
    <>
      <div className="game--container">
        {table.map((x, i) => {
          return x.map((y, j) => {
            return (
              <div
                key={"row" + i + "col" + j}
                row={i}
                col={j}
                className={"cell"}
      
                onClick={clickHandler}
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
              >
                {[x, y]}
              </div>
            );
          });
        })}
      </div>
      <GameFooter winner={winner} />
    </>
  );
};

export default GameContainer;
