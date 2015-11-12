/*
Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
*/
var result = function(currAge, maxAge, amountPerDay){ 

	var amountPerYear = amountPerDay * 365.25;
	var yearRemaining = maxAge - currAge;

	var lifeTimeSupply = Math.round(amountPerYear * yearRemaining);		//Can use either Math.ceil or Math.floor


	return output = "You will need " + lifeTimeSupply + " to last you until the rip old age of " + maxAge + ".";
}

console.log(result(30, 55, 17.2));