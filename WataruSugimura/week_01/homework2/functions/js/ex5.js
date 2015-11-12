/*
The Temperature Converter

It's hot out! Let's make a converter.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."

*/

var celsiusToFahrenheit = function(celsiusTemp) {

	fahrenheit = 1.8*celsiusTemp + 32;

	console.log(celsiusTemp + "°C is " + fahrenheit + "°F");
}


var fahrenheitToCelsius = function(fahrenheitTemp) {

	celsiusTemp = (fahrenheit-32) / 1.8;
	
	console.log(fahrenheit + "°F is " + celsiusTemp + "°C");
}

celsiusToFahrenheit(30);
fahrenheitToCelsius(100);



