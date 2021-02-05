import './App.css';
import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'

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
    return result
  }

  const playGame = (user) => {
    let comp = makeComputerChoice()
    setUserChoice(user)
    setComputerChoice(comp);

    if (comp === user) {
      document.getElementById("winner").innerHTML = "It's a tie!"

    } else if (user === "scissor" && comp === "rock") {
      document.getElementById("winner").innerHTML = "You LOSE!"

    } else if (user === "scissor" && comp === "paper") {
      document.getElementById("winner").innerHTML = "You WIN!"

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
      <Grid >
        <Grid.Row className="vertical-center" centered columns={3} >
          <Grid.Column textAlign="right">
            <button role="rock" className="rock-button choice" onClick={() => { playGame("rock") }} />
          </Grid.Column>
          <Grid.Column textAlign="center">
            <button className="paper-button choice" onClick={() => { playGame("paper") }} />
          </Grid.Column>
          <Grid.Column textAlign="left">
            <button className="scissor-button choice" onClick={() => { playGame("scissor") }} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column textAlign="center">
            <h3 id="userChoice">{userChoice && `You chose: ${userChoice}`}</h3>
            <h3 id="computerChoice">{computerChoice && `Computer chose: ${computerChoice}`}</h3>
            <h3 id="winner"></h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>





    </div>

  );
}

export default App;
