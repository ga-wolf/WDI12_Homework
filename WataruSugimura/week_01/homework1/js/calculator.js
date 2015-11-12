/*
The Calculator
Part 1
Write a function called squareNumber that will take one argument (a number), square that number, 
and return the result. It should also log a string like "The result of squaring the number 3 is 9." */

var squareNumber = function(a){
	var square =  a * a;
	console.log("The result of squaring the number " + a +  " is " + square + ".")
}

squareNumber(3);


/*
Write a function called halfNumber that will take one argument (a number), divide it by 2, 
and return the result. It should also log a string like "Half of 5 is 2.5.".
*/

var halfNumber = function(b){
	var divided =  (b / 2);
	console.log("Half of " + b + " is " + divided + ".")
}

halfNumber(10);


/*
Write a function called percentOf that will take two numbers, 
figure out what percent the first number represents of the second number, 
and return the result. It should also log a string like "2 is 50% of 4."
*/
var percentOf =  function(a, b){
	var percentab = a/b*100;
	console.log(a + " is " + percentab + "%" + " of " + b +".")
}

percentOf(10, 20);
/*
Write a function called areaOfCircle that will take one argument (the radius), 
calculate the area based on that, and return the result. 
It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

Bonus: Round the result so there are only two digits after the decimal.
*/
var areaOfCircle =  function(radius){
	var area = (Math.PI*radius*radius).toFixed(2);
	console.log("The area for a circle with radius " + radius + " is " + area +".")
}

areaOfCircle(10);

/*
Part 2

Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
*/
var part2 = function(a){
	var halfN =  a/2;
	var squareN = (halfN*halfN).toFixed(2);
	var area = (Math.PI*squareN*squareN).toFixed(2);
	var pecentageArea = (area/squareN*100).toFixed(2);
	
	console.log(halfN, squareN, area, pecentageArea);
}

part2(10);



