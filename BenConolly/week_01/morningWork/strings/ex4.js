// Bonus: Make it more like Wheel of Fortune:

// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.


var guessThis = ["C","H","O","C"];
var guessedLetters = ["",""];
var reward = ["$",0];
var modReward = function (num) {
	reward[1] = reward[1] + num;
}
var random = function () {
	return Math.floor(((Math.random()) * 100) + 1 );
}
// var letterFreq = function (array) {
// 	var count = 0
// 	for (var i = 0; i < array.length; i++) {
		
// 	};
// }
// var failedGuess = [];
var setGuessedLetters = function(anyPls) {
	for (var i = 0 ; i <= anyPls.length - 1; i++) {
		guessedLetters.push("_");
	};
};


var newGuessThis = function(anyWord) {
	guessThis = [];
	guessedLetters = [];
	var anyWordLowered = anyWord.toLowerCase()
	for (var i = 0 ; i <= anyWord.length- 1 ; i++) {
		guessThis.push(anyWordLowered[i]);
	};
	setGuessedLetters(anyWord)
	console.log (guessedLetters + " - the word is " + guessedLetters.length + " letters long.")
		// console.log("see if you can guess what letters are in the word.")
	console.log ("type guessLetter(' ') and put the letter you choose between the pincers.")
	// console.log ("Keep trying until you solve it")
}

var guessLetter = function (guess) {
	// var guessedLetterStored = guessedLetters.slice();
	var letterFreq = 0;
	var changeBy = random();
	for (var i = 0; i < guessThis.length; i++) {
		var letterPos = i+1;
		if (guess === guessThis[i])	{
			guessedLetters[i] = (guess);
			letterFreq++;
		}
	};
	// Below is the original line, removed for efficiency
	// if (guessedLetterStored.join() === guessedLetters.join()) {
		if (letterFreq === 0) {
		console.log ("Wrong Guess")
		modReward(-changeBy)
		console.log("You lost $" + changeBy)
	} else {
		console.log("The letter was in the word!");
		console.log(guessedLetters);
		modReward(changeBy*letterFreq)
		console.log("You gained $"+(changeBy*letterFreq))
	};
	// console.log(guessThis+ " for compare." )
	if (guessedLetters.join() === guessThis.join()) {
		console.log("congratulations! You've won the game!");
		console.log("The whole word was " + "'"+guessThis.join("")+ "'")
		console.log("Your reward is " + reward.join(""))
		console.log("Put a new word into newGuessThis(' ') to play again");
	} else {
		console.log ( "Current reward: " + reward.join(""))
		console.log("Check a new letter.")
	};
}


newGuessThis( "oxford" );