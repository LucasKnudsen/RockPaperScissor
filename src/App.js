import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [userChoice, setUserChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')

  useEffect(() => {
    let result
    let chance = Math.floor(Math.random() * 3)
    if (chance === 0) {
      result = 'scissor'
    } else if (chance === 1) {
      result = 'paper'
    } else {
      result = 'rock'
    }
    setComputerChoice(result)
  })

  return (
    <div>
      <input type="text" />
      <input type="submit" />
      <h3 id="userChoice">You chose: </h3>
      <h3 id="computerChoice">Computer chose: {computerChoice}</h3>
      <h3 id="winner">You win?</h3>
    </div>

  );
}

export default App;
