/*

In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.



*/

var bank = [
	{ name: "John", balance: 18},
	{ name: "Rhiannon", balance: 14},
	{ name: "Alex", balance: 12}
]

var getSum = function(sumArray) {
  var sum = 0;
  for (var i = 0; i < sumArray.length; i++) {
  	var obj = sumArray[i];
  	sum += obj.balance;
  }
  return sum;
};


var addAccount = function (name) {
	bank.push(name);
	console.log(name + 'wants to open a bank account.');
};

var amountMoney = function (money) {
    return money;
};

var depositMoney = function(money) {
	var newBalance = bank.push(num);
	console.log(bank.name + ' wants to deposit ' + money);
	    return newBalance;
};

var withdrawMoney  = function(amountMoney) {
	var newBalance = getSum - amountMoney;
	console.log(bank.name + ' later wants to withdraw ' + num);
		return newBalance;

};

var overDrawn = function (balance) {
	if (bank.balance < 0) {
	    return null;
	}
};

var addTransferMoney = function (num) {
    newBalance[i] = bank.balance[i] + num; 
    return newBalance[i];
    
};
    
var subtractTransferMoney = function (num) {
    newBalance[j] = bank.balance[j] - num;
    return newBalance[j];
};



