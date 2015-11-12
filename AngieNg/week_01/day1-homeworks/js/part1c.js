/*

Write a function called percentOf that will take two numbers, 
figure out what percent the first number represents of the second number, 
and return the result. It should also log a string like "2 is 50% of 4."

*/

var percentOf = function(num1, num2){
	var calcPercentOf = (num1 / num2) * 100;

	return result = num1 + " is " + calcPercentOf + "% of " + num2;
}

console.log(percentOf(2,4));