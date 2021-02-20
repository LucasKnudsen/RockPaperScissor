import './App.css';
import Title from './components/Title'
import Buttons from './components/Buttons'
import Results from './components/Results'

import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'

const App = () => {
  const [userChoice, setUserChoice] = useState()
  const [computerChoice, setComputerChoice] = useState()
  const [computerPoints, setComputerPoints] = useState(0)
  const [userPoints, setUserPoints] = useState(0)
  const [winner, setWinner] = useState()

  const resetGame = () => {
    setComputerPoints(0)
    setUserPoints(0)
    setWinner()
    setUserChoice()
    setComputerChoice()
  }

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
        setWinner={setWinner}
      />
      <Results
        userChoice={userChoice}
        computerChoice={computerChoice}
        winner={winner}
        resetGame={resetGame}
      />
    </Grid>
  );
}
export default App;
