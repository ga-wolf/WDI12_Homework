/*

JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips

Don't overthink this. Shorter code is probably the answer.

*/




//STEP ONE: Make a bank var that is an array, the array will hold the list of accounts
//STEP ONEANDAHALF: Create objects in your array to test with. Objects will have: Current Balance, Owner's Name. 
//STEP TWO: Create a method that will return the total sum of money in the accounts. So, a function, that that has a loop to go through each object, it pulls out the money from each object and adds it to a separate variable that is defined outsidse of the for loop but inside of your function. 
//STEP THREE: Make an addAccount method (function), that will add a new account to the array of accounts, (.push should work)


var worldBank = [
  { ownerName: "Pie Face",
    currentBalance: 2000},
  { ownerName: "Blue Kangaroo",
    currentBalance: 1000},
  { ownerName: "Your Mom",
    currentBalance: 5000},
];

var totalSum = function( allSum ){
    var bankBalance = 0

    for (var i = 0; i < allSum.length; i++) {
      var shortAllSum = allSum[i];
      bankBalance = bankBalance + shortAllSum.currentBalance;
      // console.log(shortAllSum.currentBalance);  
    }
    console.log(bankBalance);
};


var addAccount = function( accountName ) {
  worldBank.push({ ownerName: "This is hard", currentBalance: 20})
console.log(worldBank);
};

addAccount();

totalSum(worldBank);