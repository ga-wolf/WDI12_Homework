// Pling Plang Plong
// Write a program that converts a number to a string per the following rules:

// If the number contains 3 as a prime factor, output 'Pling'. If the number contains 5 as a prime factor, output 'Plang'. If the number contains 7 as a prime factor, output 'Plong'.

// If the number does not contain 3, 5, or 7 as a prime factor, simply return the string representation of the number itself.

// E.g.

// The prime factors of 28 are [2, 2, 7].

// # => "Plong"
// The prime factors of 1755 are [3, 3, 3, 5, 13].

// # => "PlingPlang"
// The prime factors of 34 are [2, 17].

// # => "34"

														// function to see if it contains prime
														// expression to work out prime and return 

var ppp = function(number){ 								 
	if (number % 3 === 0){					
		return console.log('Pling');
	}	else if (number % 5 === 0){
		return console.log('Plang')
	}	else if (number % 7 === 0){
		return console.log('Plong')
	}	else if (number % 3 !== 0 && number % 5 !== 0){
		return console.log('PlingPlang')
	}	else {
		return number;
	}
} 

														// other function to push the original non containing prime number into a string
														// this will need a for ( ; ; ) loop to .push the number into a var = result [] <<empty array to return as a string 


var converter = function(number){
	var result = [];
	for (var i = 0; i < array.length-1; i++){
		if (number === number){
			result.push(number[i]);
		}
	};
	return result.join();
}

ppp(3)
ppp(5)
ppp(15)
ppp(2)






