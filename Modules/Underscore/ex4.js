var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};

var mapped = _.mapObject( objectToMap, function (value, key) {
  return value * Math.random();
});
console.log( mapped );

// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
var objectToArr = _.pairs( objectToMap );
console.log( objectToArr );


// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
var flippedObj = _.invert( objectToMap );
console.log( flippedObj );

// Remove the "start" key from objectToMap in two different ways
var alteredObj = _.omit( objectToMap, 'start' ); // Blacklisting
console.log( alteredObj );

var alteredObj = _.pick( objectToMap, 'middle', 'end' );
console.log( alteredObj );