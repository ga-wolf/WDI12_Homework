/*
JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the 
following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts. The bank needs a method that will return 
the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account 
at the bank and add it to the array of accounts. There is no need to create additional functions of the 
bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an 
account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your 
functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do 
indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, 
show the new total balance.

Tips

Don't overthink this. Shorter code is probably the answer.

Bonus

Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
*/


var accounts = [
					{ 
					  accountID: 1,		
					  accountName: 'Sam',
					  currentBalance: 1000,
					  credit: 50,
					  debit: 800,
					  totalBalance: 1750},

					{ 
					  accountID: 2,
					  accountName: 'Tom',
					  currentBalance: 3500,
					  credit: 103,
					  debit: 800,
					  totalBalance: 4197}  
				];


//Add account
var addAccount = function (name, currentBalance, credit , debit, totalBalance) {
	var newAccount = {};

	newAccount["accountID"] = accounts.length + 1;
	newAccount["accountName"] = name ;
	newAccount["currentBalance"] = currentBalance;
	newAccount["credit"] = credit;
	newAccount["debit"] = debit;
	newAccount["totalBalance"] = currentBalance + debit - credit;

	accounts.push(newAccount);
	return accounts;
}

//Deposit Money
var depositMoney = function (accountID, inMoney) {
	foundAccount(accountID);

	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i].accountID == accountID) {			//Check who is the account holder has incoming money
			accounts[i].currentBalance = accounts[i].totalBalance;
			accounts[i].debit = inMoney;
			accounts[i].credit = 0;
			accounts[i].totalBalance = accounts[i].totalBalance + inMoney;
		}
	}
	
	return accounts;
}

//Withdraw Money
var withdrawMoney = function (accountID, outMoney) {
	foundAccount(accountID);

	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i].accountID == accountID) {			//Check who is the account holder has incoming money
			accounts[i].currentBalance = accounts[i].totalBalance;
			accounts[i].debit = 0;
			accounts[i].credit = outMoney;
			accounts[i].totalBalance = accounts[i].totalBalance - outMoney;
		}
	}

	return accounts;
}

//Transfer Money
var transferMoney = function(fromAccountID, toAccountID, value) {
	foundAccount(fromAccountID);
	foundAccount(toAccountID);

	for (var i = 0; i < accounts.length; i++) {

		if (accounts[i].accountID == fromAccountID) {
			withdrawMoney(fromAccountID, value);
			depositMoney(toAccountID, value);

			if (withdrawMoney && depositMoney) {
				console.log("Your transaction has been successfully transfered.");
			}
		}
	}
	return accounts;
}

//Show Total Balance for ALL accounts
var balance = function (accounts) {
	var totalSumInBank = 0;

	for (var i = 0; i < accounts.length; i++) {
		totalSumInBank = totalSumInBank + accounts[i].totalBalance;
	}
	return console.log('Total Bank balance is $' +totalSumInBank.toFixed(2));
}

//Make sure accounts values are not negative
var checkNegativeValues = function () {
	var error = "";
	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i].currentBalance < 0 || accounts[i].currentBalance < 0 
			|| accounts[i].credit < 0 || accounts[i].debit < 0 || accounts[i].totalBalance < 0) {
			error = "Error! Negative value exists in this accountID: " + accounts[i].accountID + "Please check!";
		} 
	}
	return error;
}

var foundAccount = function(accountID) {
	isFound = false;

	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i].accountID == accountID) {
			return isFound = true;
		} else {
			isFound = false;
		}
	}
	if (isFound == false) {
		console.log('Account is not found!');	
	} 
}

console.log('//***********************');
console.log('// Adding new bank account //');
console.log('//***********************');
addAccount('Sally', 403, 0, 98, 501);
console.log(addAccount('Eva', 203, 0, 1198, 1401));

console.log('//***********************');
console.log('// Deposit Money //');
console.log('//***********************');
console.log(depositMoney(2, 100));

console.log('//************************');
console.log('// Withdraw Money //');
console.log('//************************');
console.log(withdrawMoney(1,200));

console.log('//************************************************');
console.log('// Trasfering $110 from Account 3 to Account 1//');
console.log('//***********************************************');
console.log(transferMoney(3, 1, 110));	
console.log('//************************************');
balance(accounts); 
console.log('');

console.log('//**************************');
console.log('// Negative value checking//');
console.log('//**************************');
console.log(checkNegativeValues());
