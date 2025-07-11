import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, SetState] = useState(Array(9).fill(null));
  const [isx, Setisx] = useState(true);

  const Handelclick = (index) => {
    const copystate = [...state];
    if (copystate[index]) return;
    copystate[index] = isx ? "X" : "O";
    SetState(copystate);
    Setisx(!isx);
  };

  return (
    <div className="board-con">
      <div className="board-row">
        <Square value={state[0]} onClick={() => Handelclick(0)} />
        <Square value={state[1]} onClick={() => Handelclick(1)} />
        <Square value={state[2]} onClick={() => Handelclick(2)} />
      </div>
      <div className="board-row">
        <Square value={state[3]} onClick={() => Handelclick(3)} />
        <Square value={state[4]} onClick={() => Handelclick(4)} />
        <Square value={state[5]} onClick={() => Handelclick(5)} />
      </div>
      <div className="board-row">
        <Square value={state[6]} onClick={() => Handelclick(6)} />
        <Square value={state[7]} onClick={() => Handelclick(7)} />
        <Square value={state[8]} onClick={() => Handelclick(8)} />
      </div>
    </div>
  );
};

export default Board;
