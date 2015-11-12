/*

Part 2

Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).

*/

var calculate = function (number) {
	var halfOfNumber = number / 2;

	var squareResult = Math.pow(halfOfNumber,2);

	var areaResult = 2 * Math.PI * squareResult;

	var percentageArea = (areaResult * squareResult) / 100 + '%';

	console.log(halfOfNumber);
	console.log(squareResult);
	console.log(areaResult);
	console.log(percentageArea);
}

calculate(10);