// Geometry Function Lab
// Part 1, Rectangle

// Given the following a rectangle object like the one below, 
// write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// var rectangle = {
//   length: 4,
//   width: 4
// };
// Part 2, Triangle

// Given the following a triangle object like the one below,
// write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// 
console.log("Lorem ipsum")


//Square values
var rectangle = {
	length: 4,
	width: 3,
};

var square = {
	length: 25,
	width: 25,
}

//Square functions
var isSquare = function (obj) {
	if ( obj.length === obj.width ) {
		return true;
	}
	return false;
};

var sqArea = function (obj) {
	return obj.length * obj.width
};



var sqPerimeter = function (obj) {
	return (obj.length + obj.width) * 2
};







//Triangles values

var triangle = {
  sideA: 1,
  sideB: 1,
  sideC: 3,
};


var waltz = {
  sideA: 2,
  sideB: 8,
  sideC: 3,
};


//Triangle functions
var isEquilateral = function (obj) {
	if ( (obj.sideA === obj.sideB)
	&& ( obj.sideA === obj.sideC ) ) {
		return true;
	};
	return false;
};


var isIsosceles = function (obj) {
	if ( (obj.sideA === obj.sideB)
	|| ( obj.sideA === obj.sideC ) 
	|| ( obj.sideA === obj.sideC ) ) {
		return true;
	};
	return false;
};

var triArea = function (obj) {
	var semiperimeter = (obj.sideA + obj.sideB + obj.sideC) / 2;
  	var result = semiperimeter * (semiperimeter - obj.sideA) 
  	* (semiperimeter - obj.sideB) * (semiperimeter - obj.sideC) ;
  return Math.sqrt (result) ;
};


var squareNumber = function (num) {
	var result = num*num;
	// console.log ( "The result of squaring the number " + num + " is " + result + "." );
	return result;
}


var isObtuse = function (obj) {
	var biggest = Math.max(obj.sideA, obj.sideB, obj.sideC);

	if ( squareNumber(obj.sideA) + squareNumber(obj.sideB)
	+ squareNumber(obj.sideC)  - squareNumber(biggest) 
	< squareNumber(biggest)) {
		return true
	}
	return false
};



