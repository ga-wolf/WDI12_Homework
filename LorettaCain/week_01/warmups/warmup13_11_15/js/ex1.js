/*
Leap Year Warmup Exercise
Do this in HTML and JS!

Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:

Every year that is evenly divisible by 4
Except if it is evenly divisible by 100...
Unless it is also divisible by 400
Test Data... Make sure it is working!

1997 is not a leap year, it should return false
1996 is a leap year, it should return true
1900 is not a leap year, it should return false
2000 is a leap year, it should return true
How to structure it...

We want a custom function called isLeapYear
Bonus!

Ask the user what number they want to test
Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE
*/

// MY WAY:

// var isLeapYear = function( givenYear ) {
//     if ( givenYear % 100 === 0 && givenYear % 400 === 0) {
//       console.log(true);
//     } else if ( givenYear % 100 === 0) {
//       console.log(false);
//     } else if ( givenYear % 4 === 0) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
// };

// var x = prompt("Enter any year to see if it is a leap year.", "Year");
// var num1 = parseInt(x);

// var data = 'hello there';


// if(isNaN(x)){
//   alert("it is not number");
//   var x = prompt("Enter any year to see if it is a leap year.", "Year");
// } 


// isLeapYear(x);

// isLeapYear(1997); //false
// isLeapYear(1996); //true
// isLeapYear(1900); //false
// isLeapYear(2000); //true






//JACK'S WAY:

  // We need a function that takes a year
  // Lets call that isLeapYear

  // Checks to see a bunch of things:
  //   - Is the year divislbe by 4
  //   - If the year is divisible by 100, it needs to be divisible by 400 as well
    

// var isLeapYear = function (year) {
//   if (year % 4 === 0) {
//     if (year % 100 !== 0 || year % 400 === 0) {
//       console.log ( "Yes" );
//     } else { 
//       console.log( "No" );
//     }
//   } else {
//     console.log( "No" );
//   }
// }


var isLeapYear = function (year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      console.log ( "Yes" );
    } else { 
      console.log( "No" );
    }
}
//read the || between the 100 and the 400 as "unless"

isLeapYear(1997); //false
isLeapYear(1996); //true
isLeapYear(1900); //false
isLeapYear(2000); //true