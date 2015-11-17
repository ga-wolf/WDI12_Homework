// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };




var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4

}

var isEquilateral = function (shape) {

	var equilateral = shape.sideA === shape.sideB && shape.sideB === shape.sideC;

	console.log('isEquilateral', equilateral)
	return equilateral

}


var isIsosceles = function (shape) {

	if (isEquilateral(shape)) {
		return false		
	} else if (shape.sideB === shape.sideC) {
		return true;
}


var findArea = function (shape) {

	var area = shape.sideA + shape.sideB / 2;

	console.log('findArea', area)
	return area
}


var isObtuse = function (shape) {

	if (isEquilateral(shape)) {
		return false		
	} else if (shape.sideB === shape.sideC) {
		return true;
	}
}
}


// 	var obtuse = function (sideA, sideB, sideC) {
	
// 	if (isIsocoles(triangle.sideA, triangle.sideB, triangle.sideC))==='Is Not Isocoles') {
	
// 	} &&(isEquilateral (triangle.sideA, triangle.sideB, triangle.sideC))==='Is Not Equilateral'))	{
// 		return 'Is Obtuse'
//     } else	{
//     	return 'Is Not Obtuse'

// 	console.log(obtuse(triangle))

// }
// }
