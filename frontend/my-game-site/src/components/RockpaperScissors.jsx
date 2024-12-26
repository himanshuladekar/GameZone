import React, { useState } from "react";
import "./../styles/Games.css";

const RockPaperScissors = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(randomChoice);

    if (choice === randomChoice) {
      setResult("It's a draw!");
    } else if (
      (choice === "Rock" && randomChoice === "Scissors") ||
      (choice === "Scissors" && randomChoice === "Paper") ||
      (choice === "Paper" && randomChoice === "Rock")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };

  return (
    <div className="rock-paper-scissors">
      <h2>Rock Paper Scissors</h2>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => playGame(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div className="results">
        <p>Your choice: {playerChoice}</p>
        <p>Computer's choice: {computerChoice}</p>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default RockPaperScissors;
