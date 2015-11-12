/*Pling Plang Plong
Write a program that converts a number to a string per the following rules:

If the number contains 3 as a prime factor, output 'Pling'. If the number contains 5 as a prime factor, output 'Plang'. If the number contains 7 as a prime factor, output 'Plong'. (Prime numbers are only divisible by 1 and itself.)

If the number does not contain 3, 5, or 7 as a prime factor, simply return the string representation of the number itself.

E.g.

The prime factors of 28 are [2, 2, 7].

# => "Plong"
The prime factors of 1755 are [3, 3, 3, 5, 13].

# => "PlingPlang"
The prime factors of 34 are [2, 17].

# => "34"
*/

// var primes = [3, 5, 7]


//Does is the number 8 % by (1-100) 3, 5, or 7 
//we dont need for loops????

//Good job, do it Jacks way:

//WE need a function, called convert, tht receives a number
//If the number is evenly deviisble by :
// 3 - we want to output "Pling"
// 5 - we want to output "Plang"
// 7 - we want to output "Plong"
// If the number is not dividislbe by those, turn the number into a string

var convert = function ( num ) {
    var str = "";

    if (num % 3 === 0 ) {
        str += "Pling"; //stir = str + "Pling"
    } 
    if ( num % 5 === 0 ) {
        str += "Plang"; //str = str + "Plang"
    }
    if ( num % 7 === 0 ) {
        str += "Plong";
    }
    if ( str.length === 0 ) {
        console.log( num + "");
        return num + "";
        
    }

    console.log( str );
    return str;
}


