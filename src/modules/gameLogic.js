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

const evaluateWinner = (userChoice) => {
  let compChoice = makeComputerChoice()
  let winner
  if (compChoice === userChoice) {
    winner = "tie"
  } else if (userChoice === "scissor" && compChoice === "rock") {
    winner = "computer"
  } else if (userChoice === "scissor" && compChoice === "paper") {
    winner = "user"
  } else if (userChoice === "rock" && compChoice === "paper") {
    winner = "computer"
  } else if (userChoice === "rock" && compChoice === "scissor") {
    winner = "user"
  } else if (userChoice === "paper" && compChoice === "scissor") {
    winner = "computer"
  } else if (userChoice === "paper" && compChoice === "rock") {
    winner = "user"
  }
  return [winner, compChoice] 
}

export { makeComputerChoice, evaluateWinner }