const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error!');
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0 :
    return 'rock';
    break;

    case 1 :
    return 'paper';
    break;

    case 2 : 
    return 'scissors';
    break;
  }
};

function determineWinner(userChoice,computerChoice) {
	if (userChoice === computerChoice) {
    return 'It was a tie';
  }
  if (userChoice === 'rock') {
		if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!'
    }
  }
  if (userChoice === 'paper') {
		if (computerChoice === 'scissors') {
			return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
		if (computerChoice === 'rock') {
			return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}

const playGame = () => {
	const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: '+ userChoice);
  console.log('Computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
