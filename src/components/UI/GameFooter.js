import React from "react";

const GameFooter = ({ winner }) => {
  let style;

  if (winner === "X") style = "game-footer x-wins-footer";
  else if (winner === "O") style = "game-footer o-wins-footer";
  else style = "game-footer";

  return (
    <div className="game-footer">
      <div className={style}>{winner?.name && `${winner?.name}  wins!`}</div>
    </div>
  );
};

export default GameFooter;
