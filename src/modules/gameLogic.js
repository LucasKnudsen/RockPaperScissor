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

export { makeComputerChoice }