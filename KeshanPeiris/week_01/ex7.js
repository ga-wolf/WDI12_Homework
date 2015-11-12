// Write a program that converts a number to a string per the following rules:

// If the number contains 3 as a prime factor, output 'Pling'. If the number contains 5 as a prime factor, output 'Plang'. If the number contains 7 as a prime factor, output 'Plong'.

// If the number does not contain 3, 5, or 7 as a prime factor, simply return the string representation of the number itself.

var primeCheck = function (value){
var str ="";
 if (value% 3 === 0) {
  str+= "PLING!";
 } if (value% 5 === 0) {
  str+= "PLANG!";
 } if (value%7 === 0) {
  str+= "PLONG!";
 } else {console.log(str)};
return str
}

primeCheck(15)













// var isPrime =function (value) {
//     for(var i = 2; i < value; i++) {
//         if(value % i === 0) {
//             return false;
//         }
//     }
//     return value > 1;
// }
// isPrime(35)