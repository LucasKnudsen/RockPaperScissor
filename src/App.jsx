import './App.css';
import Title from './components/Title'
import Buttons from './components/Buttons'
import Results from './components/Results'

import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'

const App = () => {
  const [userChoice, setUserChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')

  const [computerPoints, setComputerPoints] = useState(0)
  const [userPoints, setUserPoints] = useState(0)


  return (
    <Grid textAlign="center" className="vertical-center">
      <Title userPoints={userPoints} computerPoints={computerPoints} />
      <Buttons
        userPoints={userPoints}
        computerPoints={computerPoints}
        setUserChoice={setUserChoice}
        setComputerChoice={setComputerChoice}
        setUserPoints={setUserPoints}
        setComputerPoints={setComputerPoints}
      />
      <Results
        setUserPoints={setUserPoints}
        setComputerPoints={setComputerPoints}
        userChoice={userChoice}
        computerChoice={computerChoice}
      />
    </Grid>

  );

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

