
///////////////////////////
// Geometry Function Lab //
///////////////////////////

///////////////////////////
//						 //
//   Part 1, Rectangle   //
//						 //
///////////////////////////

var rectangle = {
  length: 5,
  width: 4
};

// isSquare - Returns whether the rectangle is a square or not
var isSquare = function (side) {
	var squareCheck; 
	if (side.length === side.width) {
		squareCheck = true;
	} else {
		squareCheck = false;
	}
	return squareCheck;
}

// area - Returns the area of the rectangle
var areaRec = function (side) {
	var calcArea = side.length * side.width;
	return calcArea;
}

// perimeter - Returns the perimeter of the rectangle
var perimeter = function (side) {
	var calcArea = side.length * 2 + side.width * 2;
	return calcArea;
}

// Print the answers
console.log("Is the rectangle square? " + isSquare(rectangle));
console.log("What's the rectangle's area? " + areaRec(rectangle));
console.log("What's the rectangle's perimeter? " + perimeter(rectangle));

//////////////////////////
//						//
//   Part 2, Triangle   //
//						//
//////////////////////////

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

// isEquilateral - Returns whether the triangle is equilateral or not
var isEquilateral = function (side) {
	var equilateralCheck = (side.sideA === side.sideB && side.sideA === side.sideC);
	return equilateralCheck;
}

// isIsosceles - Returns whether the triangle is isosceles or not
var isIsosceles = function (side) {
	var isoscelesCheck;
	if (side.sideA === side.sideB || side.sideA === side.sideC || side.sideB === side.sideC) {
		isoscelesCheck = true;
	}
	if (isEquilateral(side)) {
		isoscelesCheck = false;
	}
	return isoscelesCheck;
}

// area - Returns the area of the Triangle
var areaTri = function (side) {
	var s = (side.sideA + side.sideB + side.sideC)/2;
	var calcArea = Math.sqrt(s * (s-side.sideA) * (s-side.sideB) * (s-side.sideC));
	return calcArea;
}

// isObtuse - Returns whether the triangle is obtuse or not
var isObtuse = function (side) {
	var obtuseCheck;
	var longSide;
	var shortSideA;
	var shortSideB;
	if (side.sideA > side.sideB && side.sideA > side.sideC) {
		longSide = side.sideA;
		shortSideA = side.sideB;
		shortSideB = side.sideC;
	} else if (side.sideB > side.sideC) {
		longSide = side.sideB;
		shortSideA = side.sideA;
		shortSideB = side.sideC;	
	} else {
		longSide = side.sideC;
		shortSideA = side.sideB;
		shortSideB = side.sideA;		
	}

	if (Math.pow(shortSideA, 2) + Math.pow(shortSideB, 2) > Math.pow(longSide, 2)) {
		obtuseCheck = true;
	} else {
		obtuseCheck = false;
	}
	return obtuseCheck;
}

// Triangle validity check
var validTriangle = function (sides) {

}

// Print the answers
console.log("Is the triangle an equilateral? " + isEquilateral(triangle));
console.log("Is the triangle an isosceles? " + isIsosceles(triangle));
console.log("Is the triangle obtuse?" + isObtuse(triangle));
console.log("What's the triangle's area? " + areaTri(triangle));






