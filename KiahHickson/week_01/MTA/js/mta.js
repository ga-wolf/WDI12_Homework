// prompt()
// console.log( 'You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square.' )
// console.log( 'Change at Union Square' )
// console.log( 'Your journey continues through the following stops: 23rd, 28th, 33rd.' )
// console.log( '7 stops in total.' )

// THERE ARE ONLY THREE TYPES OF TRIPS

// Trips going forward on one line - from N line Times Square to N line Union Square
// Trips going backward on one line - from N line Union Square to N line Times Square
// Trips going between lines (remembering that we can only change at union square).  
	// In the case of going from N Line Times Square to 6 Line Grand Central.  This is two trips
		// N line Times Square to N Line Union Square
		// 6 Line Union Square to 6 Line Grand Central




// STEPS:
// I only care about going forward on one line
// Let's make a for loop 
	// it prints out each station name from Times Square to 8th on the N Line

// Let's find out where to start in the loop and where to end
	// Called indexOf



var lines = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

var planTrip = function(startLine, startStop, endLine, endStop) {
	// console.log("Start" startLine, startStop, endLine, endStop)

	// Print out the whole array associated with the startLine
	console.log( "startLine: ", startLine );
	var startingLineStops = lines[ startLine ];	
	console.log( "startingLineStops: ", startingLineStops );

	var startIndex = startingLineStops.indexOf( startStop );
	var endIndex = startingLineStops.indexOf( endStop) + 1;

	// THIS IS WHERE THE FOR LOOP GOES
	for (var i = startIndex; i < endIndex; i++) {
		var stationName = startingLineStops[i];
		console.log( stationName );
		// [i].startingLine
	};

	// What if I want to go backwards
	// Use the indexOf
		// Decide whether the start stop is earlier in the array than the end stop
		// If it is, do the same for loop that we have
		// If it's not, do the opposite. Do a loop that goes down
	// Print out the whole array associated with the endLine
	// console.log("endLine:", endLine );
	// var endLine = lines [ endLine ];
	// console.log( endLine );

	var planReturnTrip = function(endLine, startStop, startLine, endStop) {

	console.log( "endLine: ", endLine );
	var endLineStops = lines[ endLine ];	
	console.log( "endLineStops: ", endLineStops );

	var startIndex = endLineStops.indexOf( endStop );
	var endIndex = startingLineStops.indexOf( startStop) - 1;

	// THIS IS WHERE THE FOR LOOP GOES
	for (var i = endIndex; i < startIndex; i--) {
		var stationName = endLineStops[i];
		console.log( stationName );

	}

planTrip('6', 'Astor Place', '6', 'Grand Central');


