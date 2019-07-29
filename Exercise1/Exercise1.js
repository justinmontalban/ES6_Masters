const sentence ='The quick brown QA jumps over the lazy Dev.';

const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvxzwy';
const wordSeprator = ' ';
let alphabet = { vowelsCount: 0, consonantCount: 0};


let getNoOfWords = params => {
let words = params;

  //exclude  start and end white-space
words = words.replace(/(^\s*)|(\s*$)/gi,"");
//convert 2 or more spaces to 1  
words = words.replace(/[ ]{2,}/gi," ");
// exclude newline with a start spacing  
words = words.replace(/\n /,"\n");

return words.split(' ').length;
};



let getNoOfVowelsAndConsonants = params => {
let vowelsCount = 0;
let consonantCount = 0;
let count  = 0;
	for(let letter of params)
	{  
		(vowels.indexOf(letter.toLowerCase()) !== -1) ?	vowelsCount +=1 :  (consonants.indexOf(letter.toLowerCase()) !== -1) ? consonantCount +=1 : '';
	}
  alphabet = {vowelsCount ,consonantCount };
return alphabet;
};



let processSentence = sentence => {
const { vowelsCount, consonantCount } = getNoOfVowelsAndConsonants(sentence);

const words = getNoOfWords(sentence);


	console.info(`  Number of word(s) found: ${words} 
  Number of vowel(s) found: ${(vowelsCount >= 1) ? vowelsCount : ''}
  Number of consonant(s) found: ${(consonantCount >= 1) ? consonantCount : ''}`);	
};

processSentence(sentence);
