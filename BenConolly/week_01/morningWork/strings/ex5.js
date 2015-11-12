// Bonus: Make it like Hangman:

// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.


var guessThis = ["C","H","O","C"];
var guessedLetters = ["",""];
var failedGuess = [];
var setGuessedLetters = function(anyPls) {
	for (var i = 0 ; i <= anyPls.length - 1; i++) {
		guessedLetters.push("_");
	};
};
var deathTimer = 7

var restart = function() {
	guessThis = [];
	guessedLetters = [];
	failedGuess = [];
}

var newGuessThis = function(anyWord) {
	guessThis = [];
	guessedLetters = [];
	var anyWordLowered = anyWord.toLowerCase()
	for (var i = 0 ; i <= anyWord.length- 1 ; i++) {
		guessThis.push(anyWordLowered[i]);
	};
	setGuessedLetters(anyWord)
	console.log (guessedLetters + " - the word is " + guessedLetters.length + " letters long.")
		console.log("You can only make 7 mistakes before hanging.")
	console.log ("type guessLetter(' ') and put the letter you choose between the pincers.")
}


var guessLetter = function (guess) {
	// var guessedLetterStored = guessedLetters.slice();
	var letterFreq = 0;
	if (guessThis.length === 0) {
		console.log("There is no word to guess.");
		console.log("Put a new word into newGuessThis(' ') to play.");
		return;
	}
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
		console.log ("Death grows closer.")
		failedGuess.push(guess);
		deathTimer--;
	} else {
		console.log("The letter was in the word, death is kept at bay");
		console.log(guessedLetters.join (" * ") );
	};
	// console.log(guessThis+ " for compare." )
	if (guessedLetters.join() === guessThis.join()) {
		console.log("congratulations! on escaping!");
		console.log("The whole word was " + guessThis.join(""))
		console.log("Put a new word into newGuessThis(' ') to play again");
		restart();
	} else if (deathTimer === 0) {
		console.log("In fact, the end is upon you. Enjoy the afterlife.")
		restart();
	}
	else {
		console.log("Check a new letter.");
		console.log("The following letters weren't in the word: " + failedGuess.join(", "));
		console.log("Death is " + deathTimer + " steps away.")
	};
}



newGuessThis( "regent" );