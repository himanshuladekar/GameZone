import React, { useState } from "react";
import "./../styles/Games.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return; // Ignore click if square is filled or there's a winner
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return winner ('X' or 'O')
      }
    }
    return null;
  };

  const checkDraw = (squares) => {
    return squares.every((square) => square !== null); // Check if all squares are filled
  };

  const winner = calculateWinner(board);
  const isDraw = checkDraw(board) && !winner; // If board is filled and there's no winner, it's a draw

  return (
    <div className="tic-tac-toe">
      <h2>Tic Tac Toe</h2>
      <div className="board">
        {board.map((value, index) => (
          <div
            key={index}
            className={`square ${value ? "disabled" : ""}`}
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      {winner && <p className="winner">Winner: {winner}</p>}
      {isDraw && !winner && <p className="draw">It's a Draw!</p>} {/* Display draw message */}
    </div>
  );
};

export default TicTacToe;
