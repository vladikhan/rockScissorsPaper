const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase()

  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors'
  ) {
    return userInput
  } else {
    console.log('Error!')
  }
}
// console.log(getUserChoice("rock"))

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)

  switch (randomNumber) {
    case 0:
      return 'rock'
    // break;
    case 1:
      return 'paper'
    // break;
    case 2:
      return 'scissors'
    // break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was tie'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'You won'
    } else {
      return 'The computer won!'
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You won'
    } else {
      return 'The computer won!'
    }
  }
}

// console.log(determineWinner("rock", "scissors"))
// console.log(determineWinner("scissors", "rock"))
// console.log(determineWinner("rock", "rock"))

const playGame = () => {
  const userChoice = getUserChoice('scissors')
  const computerChoice = getComputerChoice()
  console.log('You threw: ' + userChoice)
  console.log('The computer threw: ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}
playGame()
// }
