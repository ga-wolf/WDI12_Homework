// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

var guessThis = [];
var guessedLetters = [];
var failedGuess = [];
var setGuessedLetters = function(anyPls) {
	for (var i = 0 ; i <= anyPls.length - 1; i++) {
		guessedLetters.push("_");
	};
};
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
	// 	console.log("see if you can guess what letters are in the word.")
	console.log ("type guessLetter(' ') and put the letter you choose between the pincers.")
	// console.log ("Keep trying until you solve it")
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
		// console.log("sadly, " + "'"+guess+"'" + " was not in the word");
		console.log ("Wrong Guess")
		failedGuess.push(guess)
	} else {
		console.log("The letter was in the word!");
		console.log(guessedLetters);
	};
	// console.log(guessThis+ " for compare." )
	if (guessedLetters.join() === guessThis.join()) {
		console.log("congratulations! You've won the game.");
		console.log("The whole word was " + guessThis.join(""))
		console.log("Put a new word into newGuessThis(' ') to play again.");
		restart();
	} else {
		console.log("Check a new letter.");
		console.log("The folllowing letters weren't in the word: "+failedGuess.join(", "));
	};
}


// newGuessThis( "boo" );
// guessLetter( "b" );
// guessLetter( "c" );
// guessLetter( "r" );
// guessLetter ( "d" );
guessLetter( "o" );