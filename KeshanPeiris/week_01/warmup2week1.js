// Leap Year Warmup Exercise
// Do this in HTML and JS!

// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:

// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!

// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
// How to structure it...

// We want a custom function called isLeapYear
// var isLeapYear = function (number){
//   if ((number%4 === 0 || number%100 === 0) && number %400 ===0){
//     console.log(true) 
//   } else if (number%100===0 && number%400===0){
//     console.log(true)
//   } else if (number%4===0)
//     console.log()
//   }
// }

// var isLeapYear = function (number){
//  if (number $4 === 0){
//   if (number %100 !== 0 || number %400 ==0){
//   console.log(true);
//   else{
//     console.log(false)
//   }
//  } if (number %100 === 0){
//   console.log(false);
//  } else{
//   console.log(false)
//  }
// } 

var isLeapYear = function (year){
  if (year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0 )){
    console.log(true)
  }else{
    console.log(false)
  }
}

isLeapYear(1997)
isLeapYear(1996)
isLeapYear(1900)
isLeapYear(2000)