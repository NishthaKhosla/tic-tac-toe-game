import React from "react";
import Square from "./square";
import { useState, useEffect } from "react";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return ;
  };

  const isWinner = checkWinner();
  const winningCombination = checkWinner();
  const handleClick = (index) => {
    if (isWinner || state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <>
      <div style={{ margin: "20px" }} className="board-container">
        {isWinner ? (
          <>
          
          <div >
          <h3 className="winner-message">
           Congratulations! {isWinner} won the game</h3>
            <button className="reset-button" onClick={handleReset}>Play Again</button></div>
            
          </>
        ) : (
          <>
          <h4 className="winner-message">Player {isXTurn ? "X" :"O"} Please Move</h4>
            <div className="board-row " >
              <Square className="square"
                onClick={() => handleClick(0)}
                value={state[0]}
                isWinner={winningCombination && winningCombination.includes(0)}
              />
              <Square
                onClick={() => handleClick(1)}
                value={state[1]}
                isWinner={winningCombination && winningCombination.includes(1)}
              />
              <Square
                onClick={() => handleClick(2)}
                value={state[2]}
                isWinner={winningCombination && winningCombination.includes(2)}
              />
            </div>
            <div className="board-row">
              <Square
                onClick={() => handleClick(3)}
                value={state[3]}
                isWinner={winningCombination && winningCombination.includes(3)}
              />
              <Square
                onClick={() => handleClick(4)}
                value={state[4]}
                isWinner={winningCombination && winningCombination.includes(4)}
              />
              <Square
                onClick={() => handleClick(5)}
                value={state[5]}
                isWinner={winningCombination && winningCombination.includes(5)}
              />
            </div>
            <div className="board-row">
              <Square
                onClick={() => handleClick(6)}
                value={state[6]}
                isWinner={winningCombination && winningCombination.includes(6)}
              />
              <Square
                onClick={() => handleClick(7)}
                value={state[7]}
                isWinner={winningCombination && winningCombination.includes(7)}
              />
              <Square
                onClick={() => handleClick(8)}
                value={state[8]}
                isWinner={winningCombination && winningCombination.includes(8)}
              />
            </div>
            <h2 className="turn-message">No Winner Found Till Now</h2>
      <button  className="reset-button " onClick = {handleReset}>Try Again</button>
          </>
          
        )}
      </div>
      
    </>
  );
};

export default Board;
