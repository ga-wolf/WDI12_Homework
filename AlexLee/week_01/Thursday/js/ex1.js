/*
Geometry Function Lab
Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
};
*/

//--------------------------------- Part 1 ------------------------------------
var notARectangle = {
  length: 4,
  width: 4
};

var rectangle = {
	length: 4,
	width: 5
}

var isSquare = function(rect) {
	
	if (rect.length !== rect.width) {
		console.log("The rectangle is indeed a rectangle");
	}

	else {
		console.log("The rectangle is actually a square");
	}
}

var area = function(rect) {
	console.log(rect.length * rect.width);
}

var perimeter = function(rect) {
	var perimeter = 2 * (rect.length + rect.width);

	console.log(perimeter);
}



/*
Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/

//--------------------------------- Part 2 ------------------------------------

//Assuming sideA and sideB are the sides and sideC is the base/hypotenuse

var triangle1 = {
	sideA: 3,
	sideB: 4,
	sideC: 4
};

var triangle2 = {
	sideA: 4,
	sideB: 4,
	sideC: 4
};

var triangle3 = {
	sideA: 6,
	sideB: 9,
	sideC: 7
};

var notATriangle = {
	sideA: 1,
	sideB: 1,
	sideC: 10
};

var isTriangle = function(triangle) {
	return (triangle.sideA + triangle.sideB > triangle.sideC)
}

var isEquilateral = function(triangle) {
	return (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC);
}

var isIsosceles = function(triangle) {
	if (isTriangle(triangle)) {
		if (triangle.sideA === triangle.sideB) {
			console.log("The triangle is an isosceles triangle");
		}
		else {
			console.log("The triangle is not an isosceles triangle");
		}
	}
	else {
		console.log("Fool! it's not even a triangle!");
	}
}

// Heron's formula A = the square root of (p * (p - a)(p - b)(p - c))

var perimeter = function(triangle) {
	var p = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
	return p;
}

var area = function(triangle) {
	if (isTriangle(triangle)) {
		var p = perimeter(triangle);
		var area = Math.sqrt( p * (p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC) );
		console.log("The area of the triangle is " + area.toFixed(3));
	}
	else {
		console.log("Fool! it's not even a triangle!");
	}
}

var isObtuse = function(triangle) {
	if (isTriangle(triangle)) {
		if ( ( (Math.pow(triangle.sideA, 2) + Math.pow(triangle.sideB, 2) ) < Math.pow(triangle.sideC, 2) ) ) {
			console.log("Triangle is an obtuse triangle");
		}
		else {
			console.log("Triangle is not an obtuse triangle");
		}
	}
	else {
		console.log("Fool! it's not even a triangle!");
	}
}

