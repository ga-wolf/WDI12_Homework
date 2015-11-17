// Geometry Function Lab
// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// var rectangle = {
//   length: 4,
//   width: 4
// };


// I have an object, it has a length and a width property
// I need a function that give find the area of that object
// Inside that function, I need to add the length and width together and then multiply by two
// I then need to return and console.log that number




var rectangle = {
	length: 4,
	width: 3
}	

var isSquare = function (shape) {

	var square = shape.length === shape.width;

	console.log('isSquare', square)
	return square

}
var findArea = function (shape) {

	var area = shape.length * shape.width;

	console.log('findArea', area)
	return area

}

var findPerimeter = function (shape) {

	var perimeter = shape.length + shape.width * 2;

	console.log('findPerimeter', perimeter)
	return perimeter

}
