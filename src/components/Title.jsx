import React from 'react'
import { Header } from 'semantic-ui-react'

const Title = ({ userPoints, computerPoints }) => {
  return (
    <>
      <Header className="box" color="yellow" size="huge">
        ROCK PAPER SCISSORS BABY!
      </Header>
      <Header data-cy="points" textAlign="center" color="yellow" size="medium" >
        Your points: {userPoints}.
        <br></br>
        Computer's points: {computerPoints}.
      </Header>
    </>
  )
}

export default Title