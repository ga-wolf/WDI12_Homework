// Geometry Function Lab
// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4,
};
var isSquare = function (square){
  if (rectangle.length === rectangle.width){
    console.log ("This is a square");
  } else {
    console.log("This is not a square");
  }
}
var area = function (square2){
  console.log(rectangle.length*rectangle.width);
}
var perimeter = function (square3){
  console.log(2*(rectangle.length)+2*(rectangle.width));
}
// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
var isEquilateral = function (triangle){
  if (triangle.sideA === triangle.sideB === triangle.sideC){
    console.log("This Triangle is Equilateral")
  } else {
    console.log("This is not Equilateral")
  }
}
var isIsosceles = function (triangle2){
  if (triangle.sideA === triangle.sideB) {
    console.log("This triangle is isosceles");
  } if (triangle.sideA === triangle.sideC) {
    console.log("This triangle is isosceles");
  } if (triangle.sideB === triangle.sideC) {
    console.log("This triangle is isosceles");
  } else {
    console.log("This is not isosceles");
  }
}
var area = function (triangle3){
  console.log((triangle.sideB/2)*triangle.sideA);
}
var isObtuse = function (triangle4) {
  if ((triangle.sideA*triangle.sideA)+(triangle.sideB*triangle.sideB) < (triangle.sideC*triangle.sideC)){
    console.log("This triangle is obtuse");
  } else{
    (console.log("This triangle is not obtuse"))
  }
}

// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips

// Don't overthink this. Shorter code is probably the answer.

var bankAccounts = [{
    owner: 'joe',
    totalsum: 400,
}, {
    owner: 'bro',
    totalsum: 500,
}, {
    owner: 'low',
    totalsum: 50,
}]
var addAccount = function(a, b) {
    var createdAccount = {
        owner: a,
        totalsum: b,
    };
    console.log(createdAccount);
    bankAccounts.push(createdAccount);;
}
var withdrawCash = function(name1, cashout) {
    for (var i = 0; i < bankAccounts.length; i++) {
        var banksowner = bankAccounts[i];
        if ((banksowner.owner == name1)) {
            var remaining = banksowner.totalsum - cashout;
            console.log(name1 + " you have " + '$' + remaining + "remaining")
            break;
        } else {
            console.log("this isnt you!")
        }
    }
}

var depositCash = function(name2, cashout2) {
    for (var i = 0; i < bankAccounts.length; i++) {
        var banksowner2 = bankAccounts[i];
        if ((banksowner2.owner == name2)) {
            var remaining2 = banksowner2.totalsum + cashout2;
            console.log(name2 + " you have " + '$' + remaining2 + 'remaining')
        }
    };
}













// var people = [{name: "Serge"}, {name: "Jane"}];
// undefined
// for ( var i = 0; i < people.length; i++ ) {
//   console.log( people[i] );
// }
// VM5004:3 Object {name: "Serge"}
// VM5004:3 Object {name: "Jane"}
// undefined
// for ( var i = 0; i < people.length; i++ ) {
//   var person = people[i];

//   if ( person.name === "Jane" ) {
//     console.log( "I found her!" );
//   }
// }
// VM5005:6 I found her!
// undefined















