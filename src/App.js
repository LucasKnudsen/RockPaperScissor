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
  let iWin
  const playGame = (userChoice) => {
    let comp = makeComputerChoice()
    debugger
    if (userChoice !== 'scissor' || userChoice !== 'rock' || userChoice !== 'paper' ) {
      alert('Wrong Word!')
    }
  }

  return (
    <div>
      <input type="text" value={userChoice} onChange={(event) => setUserChoice(event.target.value) }/>
      <input type="submit" onClick={() => playGame() }/>
      <h3 id="userChoice">You chose: </h3>
      <h3 id="computerChoice">Computer chose: {computerChoice}</h3>
      <h3 id="winner">You {iWin}!</h3>
    </div>

  );
}

export default App;
