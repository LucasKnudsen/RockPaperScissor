import './App.css';
import React, { useState } from 'react'
import { Grid, Header } from 'semantic-ui-react'

function App() {
  const [userChoice, setUserChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')

  const [computerPoints, setComputerPoints] = useState(0)
  const [userPoints, setUserPoints] = useState(0)

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
    document.getElementById('reset').style.visibility = 'visible'
    document.getElementById('info').style.visibility = 'visible'
  
    if (comp === user) {
      document.getElementById("winner").innerHTML = "It's a tie!"
  
    } else if (user === "scissor" && comp === "rock") {
      document.getElementById("winner").innerHTML = "You LOSE!"
      setComputerPoints(computerPoints + 1)
  
    } else if (user === "scissor" && comp === "paper") {
      document.getElementById("winner").innerHTML = "You WIN!"
      setUserPoints(userPoints + 1)
  
    } else if (user === "rock" && comp === "paper") {
      document.getElementById("winner").innerHTML = "You LOSE!"
      setComputerPoints(computerPoints + 1)
  
    } else if (user === "rock" && comp === "scissor") {
      document.getElementById("winner").innerHTML = "You WIN!"
      setUserPoints(userPoints + 1)
  
    } else if (user === "paper" && comp === "scissor") {
      document.getElementById("winner").innerHTML = "You LOSE!"
      setComputerPoints(computerPoints + 1)
  
    } else if (user === "paper" && comp === "rock") {
      document.getElementById("winner").innerHTML = "You WIN!"
      setUserPoints(userPoints + 1)
    }
  }
  
  const resetGame = () => {
    setComputerPoints(0)
    setUserPoints(0)
    document.getElementById('info').style.visibility = 'hidden'
    document.getElementById('reset').style.visibility = 'hidden'
  }

  const onHover = (event) => {
    event.target.style.transform = 'scale(1.05,1.05)'
  }
  const hoverOut = (event) => {
    event.target.style.transform = 'scale(1,1)'
  }

  return (
      <Grid textAlign="center" className="vertical-center">
        <Header className="box" color="yellow" size="huge">
          ROCK PAPER SCISSORS BABY!
        </Header>
        <Header textAlign="center" color="yellow" size="medium" >
          Your points: {userPoints}. <br></br>Computer's points: {computerPoints}.
        </Header>

        <Grid.Row centered columns={3} >
          <Grid.Column textAlign="right">
            <button className="rock-button choice"
              onClick={() => { playGame("rock") }}
              onMouseOver={(event) => onHover(event)}
              onMouseOut={(event) => hoverOut(event)}
            />
          </Grid.Column>
          <Grid.Column textAlign="center">
            <button value="rock" className="paper-button choice"
              onClick={() => { playGame("paper") }}
              onMouseOver={(event) => onHover(event)}
              onMouseOut={(event) => hoverOut(event)}
            />
          </Grid.Column>
          <Grid.Column textAlign="left">
            <button className="scissor-button choice"
              onClick={() => { playGame("scissor") }}
              onMouseOver={(event) => onHover(event)}
              onMouseOut={(event) => hoverOut(event)}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={2}>
          <Grid.Column id="info" textAlign="center">
            <p id="userChoice">{userChoice && `You chose: ${userChoice}`}</p>
            <p id="computerChoice">{computerChoice && `Computer chose: ${computerChoice}`}</p>
            <p id="winner"></p>
            <button id="reset" onClick={() => resetGame()}>Reset</button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  );
}

export default App;
