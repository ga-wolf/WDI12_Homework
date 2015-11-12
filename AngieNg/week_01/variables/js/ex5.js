/*
The Temperature Converter
It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

var celsius = 23;

var celsToFahr = celsius * 9/5 + 32; 
var FahrToCels = (celsToFahr - 32) * 5/9;


console.log("Convert " +celsius+ "°C is "+ celsToFahr + "°F");
console.log("Convert " +celsToFahr+ "°F is " + FahrToCels +"°C");