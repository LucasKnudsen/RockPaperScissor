import './App.css';
import React, { useState } from 'react'

function App() {
  const [userChoice, setUserChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')

  const makeComputerChoice = () => {
    let result
    let chance = Math.floor(Math.random() * 3)
    if (chance === 0) {
      result = 'scissor'
    } else if (chance === 1) {
      result = 'paper'
    } else {
      result = 'rock'
    }
    // setComputerChoice(result)
    return result
  }

  const playGame = (user) => {
    let comp = makeComputerChoice()
    setComputerChoice(comp);

    if (comp === user) {
      document.getElementById("winner").innerHTML = "It's a tie!"
    } else if (user === "scissor" && comp === "rock") {
      document.getElementById("winner").innerHTML = "You WIN!"
    } else if (user === "scissor" && comp === "paper") {
      document.getElementById("winner").innerHTML = "You LOSE!"
    } else if (user === "rock" && comp === "paper") {
      document.getElementById("winner").innerHTML = "You LOSE!"
    } else if (user === "rock" && comp === "scissor") {
      document.getElementById("winner").innerHTML = "You WIN!"
    } else if (user === "paper" && comp === "scissor") {
      document.getElementById("winner").innerHTML = "You LOSE!"
    } else if (user === "paper" && comp === "rock") {
      document.getElementById("winner").innerHTML = "You WIN!"
    }
  }

  return (
    <div>
      <h3 id="userChoice">You chose: {userChoice}</h3>
      <h3 id="computerChoice">Computer chose: {computerChoice}</h3>
      <h3 id="winner"></h3>
      <button className="rock-button choice" onClick={() => {
        setUserChoice("rock")
        playGame(userChoice)
      }}>
      </button>
      <button className="paper-button choice" onClick={() => {
        setUserChoice("paper")
        playGame(userChoice)
      }}></button>
      <button className="scissor-button choice" onClick={() => {
        setUserChoice("scissor")
        playGame(userChoice)
      }}></button>
    </div>

  );
}

export default App;
