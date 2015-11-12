// Geometry Function Lab
// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not

var rectangle = {
  length: 4,
   width: 4
};

var isSquare = function(square){
	if (rectangle.length === rectangle.width){
		console.log("This is a Square");
	} else {
		console.log("This is not a Square");
	};
};

// area - Returns the area of the rectangle 

var rectangle = {
  length: 4,
  width: 4
};

var area = function(surface){
	var result = (rectangle.length * rectangle.width);
	return result;
};	

// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 4,
  width: 4
};

var perimeter = function(rectangle){
	var result = (rectangle.length + rectangle.width * 2);
	return result;
};

// Geometry Function Lab
// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function(triangle){
	if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC){
		console.log("This is equilateral");
	};

};

// isIsosceles - Returns whether the triangle is isosceles or not

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isIsosceles = function(triangle){
	if (triangle.sideA === triangle.sideB){
		console.log("This is a isosceles triangle");
	};
};

// area - Returns the area of the Triangle

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var area = function(triangle){
	var fuckTriangles = ((triangle.sideA + triangle.sideB + triangle.sideC)/2);
	var a = triangle.sideA;
	var b = triangle.sideB;
	var c = triangle.sideC;
	var result = Math.sqrt(fuckTriangles(fuckTriangles - a)(fuckTriangles - b)(fuckTriangles - c));
	return result;
};

// isObtuse - Returns whether the triangle is obtuse or not

// the fucking math // c * c > a * a + b * b // this is where c is the longest // if true is obtruse MOTHER FUCKER

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5
};

var A = triangle.sideA
var B = triangle.sideB 
var C = triangle.sideC

var greatest = function(A, B, C){
	if (A > B && A > C){
		return A;
	} else if (B > A && B > C){
		return B;
	} else if (C > A && C > B){
		return C;
	};
};

var longestSide = greatest(A, B, C)

var isObtuse = function(triangle){ 
	if (longestSide * longestSide > A * A + B * B){
		console.log("This fucking triangle is obtruse")
	}	else {
		console.log("Fuck this triangle")
	};
};








