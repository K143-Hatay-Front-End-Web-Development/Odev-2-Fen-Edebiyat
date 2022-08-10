import React, { useEffect, useState } from "react";
import CheckMatch from "../utils/CheckMatch";
import GameFooter from "./GameFooter";

const GameContainer = () => {
  const [table, setTable] = useState([]);
  const [winner, setWinner] = useState();

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

    const squares = [...table];
    if (winner !== undefined)
      setTable([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
    else if (event.target.innerText === "") {
      squares[row][col] = "X";
      setTable(squares);
      event.target.className = "cell mouse-over-filled-x";
    } else if (event.target.innerText === "X") {
      squares[row][col] = "O";
      setTable(squares);
      event.target.className = "cell mouse-over-filled-o";
    } else {
      squares[row][col] = "";
      setTable(squares);
      event.target.className = "cell mouse-over-empty";
    }

    setWinner(CheckMatch(table[0], table[1], table[2]));
  };

  useEffect(() => {
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
