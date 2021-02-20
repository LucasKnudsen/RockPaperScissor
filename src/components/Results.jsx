import React from 'react'
import { Grid } from 'semantic-ui-react'

const Results = (props) => {
  const { userChoice, computerChoice, winner } = props

  return (
    <Grid.Row centered columns={2}>
      <Grid.Column id="info" textAlign="center">
        <p id="userChoice">
          {userChoice && `You chose: ${userChoice}`}
        </p>
        <p id="computerChoice">
          {computerChoice && `Computer chose: ${computerChoice}`}
        </p>
        <p id="winner">{winner}</p>
        {winner && <button id="reset" onClick={() => props.resetGame()}>Reset</button>}
      </Grid.Column>
    </Grid.Row>
  )
}

export default Results
