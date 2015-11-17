// We need a function that takes a year.  Let's call that isLeapYear

// Checks to see a bunch of things:
//   - Is the year divisible by 4
//   - If the year is divisible by 100, it needs to be divisible by 400 as well

// var isLeapYear = function (year) {
//   if ( year % 4 === 0 ) {
//     if ( year % 100 !== 0 || year % 400 === 0 ) {
//       console.log( "yes" );
//     } else {
//       console.log( "no" );
//     }
//   } else {
//     console.log( "no" );
//   }
// }

var isLeapYear = function (year) {
  if ( year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0 ) ) {
      console.log( "yes" );
  } else {
    console.log( "no" );
  };
};

isLeapYear( 1997 );
isLeapYear( 1996 );
isLeapYear( 1900 );
isLeapYear( 2000 );