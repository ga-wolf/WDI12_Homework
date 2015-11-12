/*

The Geometrizer 
Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".

*/

var calcCircumferenceArea = function (radius) {
	var circumference = 2 * Math.PI * radius;
	var area = Math.PI * radius * radius;

	var output = ("The circumference is " + circumference + "\n" + "The area is " + area);
	console.log(output);

	return output;
}


calcCircumferenceArea(3);

/* Joel's version

var calcCircumference = function(radius) {
	var circumference = 2 * Math.PI * radius;
	console.log('The circumference is ' + circumference);
};



var calcArea = function(radius) {
	var area = Math.PI * radius * radius;
	console.log('The area is ' + area);
};

var circleInfo = function (radius) {
	calcCircumference(57);
	calcArea(3);
}

circleInfo();

*/