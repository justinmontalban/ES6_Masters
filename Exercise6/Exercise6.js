
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors') {
    return userInput;
  } else {
    console.log('not a valid choice');
	
  }
};


function determineWinner(userChoice,p2) {
  if (userChoice === p2) {
    return 0;
  } else if (userChoice === 'rock') {
    if (p2 === 'paper') {
       return 2;
    } else {
      return 1;
    }
  } else if (userChoice === 'paper'){
    if (p2 === 'scissors') {
      return 2;
    }else {
      return 1;
    }
  } else if (userChoice === 'scissors') {
    if (p2 === 'rock') {
       return 2;
    } else {	
        return 1;
    }
  } 
};



const playerOneInput = () => {
	return new Promise((resolve, reject) => {
    rl.question('Player 1 Please Input:', (answer) => {
	 resolve(getUserChoice(answer));
    })
  })
}
const playerTwoInput = () => {
	return new Promise((resolve, reject) => {
		rl.question('Player 2 Please Input:', (answer) => {
			
	 resolve(getUserChoice(answer));
    })
  })
}
const checkFinalWinner = (p1,p2) => {
	console.log(p1,p2);
	if(p1 === p2)
	{ return 'Its a tie!'}
	else if(p1 > p2)
	{return 'Player 1'; }
	else  { return 'Player 2'; }
	
}
var winners = new Set();

let player1Score = 0;
let player2Score = 0;
const play = async () => {

  for (let round = 0; round < 5; round++) {
		const one = await playerOneInput();
		const two = await playerTwoInput();

	 let winner = determineWinner(one,two);
	 if(winner === 0)
	 {
		 console.log(`It's a tie`);
	 }
	 else if(winner === 1)
	 {		
			
			player1Score = player1Score + 1;
			winners.add({ round:`${round}`, player1: `${player1Score}` });
			 console.log(`Winner Player 1!`);
	 }
		else
		{	
			player2Score = player2Score + 1;
				winners.add({round:`${round}`, player2: `${player2Score}` });
			 console.log(`Winner Player 2!`);
		}
	
  }






 console.log(`The over all winner is: ${checkFinalWinner(player1Score,player2Score)}`)
   rl.close();
}



play();
