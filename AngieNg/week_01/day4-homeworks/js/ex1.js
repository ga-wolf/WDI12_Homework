/*

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

var rectangle = {
	length: 4,
	width: 4
};

var isSquare = function (rectangleObject) {
	if (rectangleObject.width === rectangleObject.length) {
		return isSquare = true;
	} else {
		return isSquare = false;
	}
}

var area = function (rectangleObject) {
	return area = rectangleObject.width * rectangleObject.length;
}

var perimeter = function (rectangleObject) {
	return perimeter = 2 * (rectangleObject.width + rectangleObject.length);
}

console.log(isSquare(rectangle));
console.log(area(rectangle));
console.log(perimeter(rectangle));


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

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function(triangleObject) {
	if (triangleObject.sideA == triangleObject.sideB  && triangleObject.sideB == triangleObject.sideC){
		return isEquilateral = true;
	} else {
		return isEquilateral = false;
	}
}

var isIsosceles = function(triangleObject) {
	// sideA = sideB or sideB = side C or sideA = sideC
	if (triangleObject.sideA == triangleObject.sideB ) {
		return isIsosceles = true;
	} else if (triangleObject.sideB == triangleObject.sideC) {
		return isIsosceles = true;
	} else if (triangleObject.sideA == triangleObject.sideC) {
		return isIsosceles = true;
	} else {
		return isIsosceles = false;
	}
}

var area = function(triangleObject) {
	return area = (triangleObject.sideA + triangleObject.sideB + triangleObject.sideC) / 2;
}

var isObtuse = function(triangleObject) {
	// sideC > sideA + sideB
	var isObtuse = false;

	if (triangleObject.sideC > (triangleObject.sideA + triangleObject.sideB)) {
		return isObtuse = true;
	} else if (triangleObject.sideB > (triangleObject.sideA + triangleObject.sideC)) {
		return isObtuse = true;
	} else if (triangleObject.sideA > (triangleObject.sideB + triangleObject.sideC)) {
		return isObtuse = true;
	}
	return isObtuse;
}

console.log(isEquilateral(triangle));
console.log(isIsosceles(triangle));
console.log(area(triangle));
console.log(isObtuse(triangle));

