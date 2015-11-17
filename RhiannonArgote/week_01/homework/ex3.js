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
  sideB: 3,
  sideC: 3
};

var isEquilateral = function (obj) {
	if (obj.sideA === obj.sideB && obj.sideA === obj.sideC) {
		return true;
	}

	else {
		return false;
	}
};

var isIsosceles = function (obj) {
	if (obj.sideA === obj.sideB || obj.sideA === obj.sideC) {
		return true;
	}

	else {
		
	return false;
	
	}
}

var semiPerimeter = function (obj) {
	var Perimeter = (obj.sideA + obj.sideB + obj.sideC) / 2
	return Perimeter;
}

var areaTriangle = function (obj) {
	var area = Math.sqrt(semiPerimeter(obj) * (semiPerimeter(obj) - obj.sideA) * (semiPerimeter(obj) - obj.sideB) * (semiPerimeter(obj) - obj.sideC));
	return area;

}

var isObtuse = function (obj) {
	var maxOfThree = Math.max (obj.sideA, obj.sideB, obj.sideC);
	var obtuse  = function {
		if maxOfThree = 
	}
}

