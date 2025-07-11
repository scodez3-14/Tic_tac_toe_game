import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, SetState] = useState(Array(9).fill(null));
  const [isx, Setisx] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (squares) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of winningCombinations) {
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const Handelclick = (index) => {
    const copystate = [...state];
    if (copystate[index] || winner) return;

    copystate[index] = isx ? "X" : "O";
    SetState(copystate);
    Setisx(!isx);

    const win = checkWinner(copystate);
    if (win) {
      setTimeout(() => {
        setWinner(win);
      }, 100);
    }
  };

  const handleRestart = () => {
    SetState(Array(9).fill(null));
    Setisx(true);
    setWinner(null);
  };

  const handleExit = () => {
    window.location.reload();
  };

  return (
    <>
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

      {winner && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>🎉 {winner} Wins!</h2>
            <div className="modal-buttons">
              <button onClick={handleRestart}>Play Again</button>
              <button onClick={handleExit}>Exit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Board;
