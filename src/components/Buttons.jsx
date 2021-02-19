import React from 'react'
import { Grid } from 'semantic-ui-react'
import { makeComputerChoice } from '../modules/gameLogic'

const Buttons = (props) => {
  const { userPoints, computerPoints } = props

  const playGame = (user) => {
    let comp = makeComputerChoice()
    props.setUserChoice(user)
    props.setComputerChoice(comp);
    document.getElementById('reset').style.visibility = 'visible'
    document.getElementById('info').style.visibility = 'visible'
  
    if (comp === user) {
      document.getElementById("winner").innerHTML = "It's a tie!"
  
    } else if (user === "scissor" && comp === "rock") {
      document.getElementById("winner").innerHTML = "You LOSE!"
      props.setComputerPoints(computerPoints + 1)
  
    } else if (user === "scissor" && comp === "paper") {
      document.getElementById("winner").innerHTML = "You WIN!"
      props.setUserPoints(userPoints + 1)
  
    } else if (user === "rock" && comp === "paper") {
      document.getElementById("winner").innerHTML = "You LOSE!"
      props.setComputerPoints(computerPoints + 1)
  
    } else if (user === "rock" && comp === "scissor") {
      document.getElementById("winner").innerHTML = "You WIN!"
      props.setUserPoints(userPoints + 1)
  
    } else if (user === "paper" && comp === "scissor") {
      document.getElementById("winner").innerHTML = "You LOSE!"
      props.setComputerPoints(computerPoints + 1)
  
    } else if (user === "paper" && comp === "rock") {
      document.getElementById("winner").innerHTML = "You WIN!"
      props.setUserPoints(userPoints + 1)
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
