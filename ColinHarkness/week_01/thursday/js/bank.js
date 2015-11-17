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

var bankAccounts = [ { 
	owner: "Tom", balance: 1000}, { 
	owner: "Chris", balance: 260}, { 
	owner: "Sam", balance: 120}

];

var addAccount = function(a,b) {
	var createAccount = {owner: a, balance: b};
	console.log(createAccount);
	bankAccounts.push(createAccount);
};

var atmBalance = function(e) {
	for (var i = 0; i < bankAccounts.length; i++) {
		var account = bankAccounts[i];
	if (account.owner === e){
		console.log(e +"'s current balance is $" +account.balance)
	}
}
};	
var atmWithdrawl = function(c,d) {
	for (var i = 0; i < bankAccounts.length; i++) {
		var account = bankAccounts[i];
	if ((account.owner === c) && (d > account.balance)){
		console.log("You have no money left, go get a job")
		break;	
	}else if ((account.owner === c) && (account.balance > 1)) {
		var name = account.owner;
		var currentBalance = account.balance - d;
		console.log("Hi " +name +" You have " +"$" +currentBalance +" remaining");
		return account.balance = currentBalance;
	}else{
		console.log("Wrong account details")
	}		
}
	};
var atmDeposit = function(e,f) {
	for (var i = 0; i < bankAccounts.length; i++) {
		var account = bankAccounts[i];
	if (account.owner === e) {
		var name = account.owner;
		var currentBalance = account.balance + f;
		console.log("Hi " +name +" Your new balance is " +"$" +currentBalance);
		return account.balance = currentBalance;
	}else{
		console.log("Wrong account details")
		}		
}
	};
var transfer = function(payer, payee, amount) {
	for (var i = 0; i < bankAccounts.length; i++) {
		var account = bankAccounts[i];
	if (account.owner === payer){
		var name = account.owner;
		var payerBalance = account.balance;
		account.balance = payerBalance - amount;
	}	
};
	for (var i = 0; i < bankAccounts.length; i++) {
		var account = bankAccounts[i];
	if (account.owner === payee){
		var name = account.owner;
		var payeeBalance = account.balance;
		account.balance = payeeBalance + amount;
	console.log(payer +" deposited " +"$" +amount +" into " +payee +"'s account");	
	}
	}
};			





