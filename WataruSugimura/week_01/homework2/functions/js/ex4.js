/*
The Geometrizer

Create 2 functions that calculate properties of a circle.

Create a function called calcCircumfrence:
Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

var calcCircumfrence = function(radius){

	circumference = 2 *　Math.PI * radius;
	console.log("The circumference is " + circumference);
}

calcCircumfrence(100);// this should be afre function.



var calcArea = function(radius){

	area = Math.PI * radius * radius; //PI r squared
	console.log("The area is " + area);
}


calcArea(57);//this sshould be after function.
