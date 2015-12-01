console.log ("lorem ipsum")

var board = [ 
	[ ["_"],["_"],["_"] ],
	[ ["_"],["_"],["_"] ],
	[ ["_"],["_"],["_"] ],
	 ];
//You should have another chance to input once you have taken a turn.
var takeTurn = function (player, row, column) {
	if ( board[row-1][column-1] == "_"  ) {
	board[row-1][column-1] = [player];
	} else {
		return "invalid turn"
	}
};

var playGame = function () {
	while ( getWinner() === undefined ) {
		randomTurn("Gog");
		randomTurn("TaT");
	}
	return getWinner()
}

var randomNum = function () {
	var number = Math.ceil(Math.random()*3);
	return number
}

var randomTurn = function (player) {
	takeTurn(player, randomNum(), randomNum())
}

var getWinner = function () {
	//Add a for to iterate the column
	//Within that have another for to iterate the rows
	for (var i = 0; i < board.length; i++) {
		if ( ( board[i][0].toString() === board[i][1].toString() ) &&
			( board[i][0].toString() === board[i][2].toString() ) && ( board[i][0] != "_" ) ) {
			return "Player " + board[i][0] + " wins."
		}
	};
	for (var i = 0; i < board[0].length; i++) {
		if ( ( board[0][i].toString() === board[1][i].toString() ) &&
			( board[0][i].toString() === board[2][i].toString() ) && ( board[0][i]!= "_" ) ) {
			return "Player " + board[0][i] + " wins."
		}
	};
	if ( ( ( board[0][0].tostring === board[1][1].tostring )
		&& ( board[0][0].tostring === board[2][2].tostring ) ) {
		return ["Player", board[0][0].tostring, "wins."
	}
	if ( ( ( board[0][2].tostring === board[1][1].tostring )
		&& ( board[0][2].tostring === board[2][0].tostring ) ) {
		return ["Player", board[0][2].tostring, "wins."
}



//============================
//Page activated JS below, to make the game play in browser

var assignSquare = document.getElementById('topRight');

var returnTurn = function () {
	console.log("TEST")
}

var colorchange = function () {
	
}

// assignSquare[0].addEventListener('click', colorchange);


// button.addEventListener('click', onClick);


// so the real problem with TicTacToe 
//this week is we can't get inputs.
// Changing squares in the board is easy enough, 