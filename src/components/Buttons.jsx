import React from 'react'
import { Grid } from 'semantic-ui-react'
import { evaluateWinner } from '../modules/gameLogic'

const Buttons = (props) => {
  const { userPoints, computerPoints } = props

  const playGame = (userChoice) => {
    let [winner, compChoice] = evaluateWinner(userChoice)
    props.setUserChoice(userChoice)
    props.setComputerChoice(compChoice);

    if (winner === 'user') {
      props.setUserPoints(userPoints + 1)
      props.setWinner("You win!!")
    } else if (winner === 'computer') {
      props.setComputerPoints(computerPoints + 1)
      props.setWinner("You lost...")
    } else {
      props.setWinner("It's a tie! Go again!")
    }
  }

  const onHover = (event) => {
    event.target.style.transform = 'scale(1.05,1.05)'
  }
  const hoverOut = (event) => {
    event.target.style.transform = 'scale(1,1)'
  }

  return (
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
  )
}

export default Buttons
