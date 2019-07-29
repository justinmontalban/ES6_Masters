const contestant = [
	{ 
		Name: 'Foo',
		Score: 9

	},
	{ 
		Name: 'Bar',
		Score: 7

	},
	{ 
		Name: 'Baz',
		Score: 6
		
	},
	{ 
		Name: 'B3az',
		Score: 8
		
	},
	{ 
		Name: 'Bauz',
		Score: 8
		
	},
	{ 
		Name: 'saz',
		Score: 8
		
	}
]
const ranking = ['(1st)','(2nd)','(3rd)','th'];
const noOfWinners = 3;
const scoreOverRate = 10;

let arrageFromHighestScore = contestant => {
	
	return contestant.sort(function(a, b){return b.Score-a.Score});
}



let getWinners = (contestant,noOfWinners) => {

const winners = arrageFromHighestScore(contestant);
let counterRanking = 0;
	console.log('The winners are: ');
for(score =scoreOverRate; score >= 0; score--)
{

		let winnersTied = winners.filter((item) => (item.Score === score));
   
    
      if(winnersTied.length !== 0){
             	const {Name, Score} = winnersTied[0];
        if(winnersTied.length > 1)
       {

       console.log(`${ranking[counterRanking++]} ${winnersTied.length} scored ${Score} out of ${scoreOverRate}`);
       }
    	else {
       console.log(`${ranking[counterRanking++]} ${Name} scored ${Score} out of ${scoreOverRate}`);
       
       }
       }
     if(counterRanking >= noOfWinners)
     break;
}
};

getWinners(contestant,noOfWinners);
