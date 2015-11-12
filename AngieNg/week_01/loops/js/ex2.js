/*

Multiplication Tables

Write a for loop that will iterate from 0 to 10. 
For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

*/
var result;

	for (var i = 0; i < 10; i++) {
		result = i * 9;
		console.log(i + ' * 9 = ' +result);
	}

	for (var x = 0; x <= 10; x++){
		for (var y = 1; y <= 10; y++) {
			result = x * y;
			console.log(y + " * " +x + " = " + result);
		}
	}