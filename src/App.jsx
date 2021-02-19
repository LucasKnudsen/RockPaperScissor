import './App.css';
import Title from './components/Title'
import Buttons from './components/Buttons'
import Results from './components/Results'

import React from 'react'
import { Grid } from 'semantic-ui-react'

class App extends React.Component {
  state = {
    userChoice: '',
    computerChoice: '',
    computerPoints: 0,
    userPoints: 0
  }

  setUserChoice = (choice) => {
    this.setState({userChoice: choice})
  }
  setComputerChoice = (choice) => {
    this.setState({computerChoice: choice})
  }
  setUserPoints = (points) => {
    this.setState({userPoints: points})
  }
  setComputerPoints = (points) => {
    this.setState({computerPoints: points})
  }


  // const playGame = (user) => {
  //   let comp = makeComputerChoice()
  //   setUserChoice(user)
  //   setComputerChoice(comp);
  //   document.getElementById('reset').style.visibility = 'visible'
  //   document.getElementById('info').style.visibility = 'visible'

  //   if (comp === user) {
  //     document.getElementById("winner").innerHTML = "It's a tie!"

  //   } else if (user === "scissor" && comp === "rock") {
  //     document.getElementById("winner").innerHTML = "You LOSE!"
  //     setComputerPoints(computerPoints + 1)

  //   } else if (user === "scissor" && comp === "paper") {
  //     document.getElementById("winner").innerHTML = "You WIN!"
  //     setUserPoints(userPoints + 1)

  //   } else if (user === "rock" && comp === "paper") {
  //     document.getElementById("winner").innerHTML = "You LOSE!"
  //     setComputerPoints(computerPoints + 1)

  //   } else if (user === "rock" && comp === "scissor") {
  //     document.getElementById("winner").innerHTML = "You WIN!"
  //     setUserPoints(userPoints + 1)

  //   } else if (user === "paper" && comp === "scissor") {
  //     document.getElementById("winner").innerHTML = "You LOSE!"
  //     setComputerPoints(computerPoints + 1)

  //   } else if (user === "paper" && comp === "rock") {
  //     document.getElementById("winner").innerHTML = "You WIN!"
  //     setUserPoints(userPoints + 1)
  //   }
  // }

  // const resetGame = () => {
  //   setComputerPoints(0)
  //   setUserPoints(0)
  //   document.getElementById('info').style.visibility = 'hidden'
  //   document.getElementById('reset').style.visibility = 'hidden'
  // }

  // const onHover = (event) => {
  //   event.target.style.transform = 'scale(1.05,1.05)'
  // }
  // const hoverOut = (event) => {
  //   event.target.style.transform = 'scale(1,1)'
  // }
  render() {
    const {userPoints, computerPoints, userChoice, computerChoice} = this.state
    return (
      <Grid textAlign="center" className="vertical-center">
        <Title userPoints={userPoints} computerPoints={computerPoints} />
        <Buttons
          userPoints={userPoints}
          computerPoints={computerPoints}
          setUserChoice={() => this.setUserChoice()}
          setComputerChoice={() => this.setComputerChoice()}
          setUserPoints={() => this.setUserPoints()}
          setComputerPoints={() => this.setComputerPoints()}
        />
        <Results
          setUserPoints={() => this.setUserPoints()}
          setComputerPoints={() => this.setComputerPoints()}
          userChoice={userChoice}
          computerChoice={computerChoice}
        />
      </Grid>

    );
  }
}

export default App;

{/* <Grid.Row centered columns={3} >
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
        </Grid.Row> */}

{/* <Grid.Row centered columns={2}>
        <Grid.Column id="info" textAlign="center">
          <p id="userChoice">{userChoice && `You chose: ${userChoice}`}</p>
          <p id="computerChoice">{computerChoice && `Computer chose: ${computerChoice}`}</p>
          <p id="winner"></p>
          <button id="reset" onClick={() => resetGame()}>Reset</button>
        </Grid.Column>
      </Grid.Row> */}

