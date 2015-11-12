/*
The Temperature Converter
It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

var tempConverter = function(celsius, fahrenheit) {
	var celsToFahr = celsius * 9/5 + 32;
	var FahrToCels = (fahrenheit - 32) * 5/9;

	var output = ("Convert " + celsius + "°C is "+ celsToFahr + "°F \n "
				  + "Convert " + fahrenheit + "°F is " + FahrToCels + "°C");
	return output;
}

console.log(tempConverter(32, 74));