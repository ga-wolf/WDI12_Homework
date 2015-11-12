/*

Write a function called areaOfCircle that will take one argument (the radius), 
calculate the area based on that, and return the result. It should also log a string 
like "The area for a circle with radius 2 is 12.566370614359172."

*/

var areaOfCircle = function(radius) {
	var calcAreaOfCircle = 2 * Math.PI * radius;

	var result = "The area for a circle with radius " + radius + " is " +calcAreaOfCircle;
	var resultRoundUp = "The area for a circle with radius (in round up figure) " + radius + " is " +Math.round(calcAreaOfCircle);

	console.log(result);
	console.log(resultRoundUp);
}

areaOfCircle(2);