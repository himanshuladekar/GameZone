import React from "react";
import TicTacToe from "../components/TicTacToe";
import RockPaperScissors from "../components/RockPaperScissors";
import "./../styles/Games.css";

const Games = () => {
  return (
    <div className="games">
      <h1>Games</h1>
      <TicTacToe />
      <RockPaperScissors />
    </div>
  );
};

export default Games;
