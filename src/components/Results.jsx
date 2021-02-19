import React from 'react'
import { Grid } from 'semantic-ui-react'

const Results = (props) => {
  // const { userChoice, computerChoice } = this.props
 
  const resetGame = () => {
    props.setComputerPoints(0)
    props.setUserPoints(0)
    document.getElementById('info').style.visibility = 'hidden'
    document.getElementById('reset').style.visibility = 'hidden'
  }
  return (
    <Grid.Row centered columns={2}>
      <Grid.Column id="info" textAlign="center">
        <p id="userChoice">{props.userChoice && `You chose: ${props.userChoice}`}</p>
        <p id="computerChoice">{props.computerChoice && `Computer chose: ${props.computerChoice}`}</p>
        <p id="winner"></p>
        <button id="reset" onClick={() => resetGame()}>Reset</button>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Results
