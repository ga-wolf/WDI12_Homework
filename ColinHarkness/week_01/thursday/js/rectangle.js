// //Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 4,
  width: 4,
};

var isSquare = function(square) {
	if (rectangle.length === rectangle.width){
		console.log("This is a square");
}	else {
		console.log("This is not a square");
}
};

var area = function(rectangle){
	console.log(rectangle.length*rectangle.width);
};
var perimeter = function(rectangle){
	console.log(2*(rectangle.length+rectangle.width));
};		