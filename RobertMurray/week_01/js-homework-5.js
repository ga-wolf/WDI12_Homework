
///////////////////////////
//        JS bank        //
///////////////////////////

// In this homework, you'll create a basic bank in Javascript. 
// The bank has many accounts and the following capabilities that you need to write.

//////////////////////////
//                      //
//         Bank         //
//                      //
//////////////////////////

// [√] There is only one bank.
// [√] This bank has an array of accounts. 
// [√] The bank needs a method that will return the total sum of money in the accounts. 
// [√] It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. 
// [√] There is no need to create additional functions of the bank to delete accounts, etc.

// [√] The bank has many accounts. 
// [√] Accounts should be objects that all share a set of common functionality.

var theBank = [
	{accName: 'Ginger',
	accBalance: 200300.00,
	},
	{accName: 'Bobbet',
	accBalance: 39000.00,
	},
	{accName: 'Solly',
	accBalance: 945.00,
	},
	{accName: 'Phiblet',
	accBalance: 0,
	}
];
theBank.length;

// console.log(theBank[1].accName);

//////////////////////////
//                      //
//       Accounts       //
//                      //
//////////////////////////

// [√] Accounts have a current balance and owner's name. 
// [√] You should be able to deposit or withdraw from an account to change the balance.

// [√] There is no need to write a user interface. Make sure functions return values -- 
// [ ] you may also have your functions console.log() values to help you see your code working.

// [ ] You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: 
// [√] add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.


// Check for valid account name
var validAcc = function (acc) {
	var accObject;
	for (var i = 0; i < theBank.length; i++) {
		if (acc === theBank[i].accName) {
			accObject = theBank[i];
			return accObject;
		} else {
			accObject = false;
		}
	}
	return accObject;
}

// Add an account to the bank
var addAccount = function (newAccName, openingBalance) {
 	var newAccount = {accName: newAccName, accBalance: openingBalance};
 	console.log(newAccount);
 	theBank.push(newAccount);
 }

// Show Balance from existing account 
// function using validAcc function
// ================================
// NOT WORKING - NEEDS BUG CHECKING
// ================================
// the issue is potentially where the validAcc object
// is called / interpreted (i.e., returns undefined)
//
// var showBal = function (acc) {
// 	var bal;
// 	if (validAcc(acc)) {
// 		bal = validAcc.accBalance;
// 		return "Your account balance is " + bal;
// 		debugger;
// 	} else {
// 		bal = "Sorry - We have no record of that account.";
// 	}
// 	console.log(bal);
// 	return bal;
// }

// Show Balance from existing account function
var showBal = function (acc) {
	var bal; 
	for (var i = 0; i < theBank.length; i++) {
		if (acc === theBank[i].accName) {
			bal = theBank[i].accBalance;
			return "Your account balance is " + bal;
		} else {
			bal = "Sorry - We have no record of that account.";
		}
	}
	console.log(bal);
	return bal;
}

// Deposit into existing account function
var deposit = function (acc, ammount) {
	var message; 
	var total;
	for (var i = 0; i < theBank.length; i++) {
		if (acc === theBank[i].accName) {
			total = theBank[i].accBalance + ammount;
			theBank[i].accBalance = total;
			message = "Your new balance is " + theBank[i].accBalance;
			return total;
		} else {
			message = "Sorry - We have no record of that account.";
		}
	}
	console.log(message);
	return null;
}

// Withdrawal form existing account function
var withdraw = function (acc, ammount) {
	var message; 
	var total;
	for (var i = 0; i < theBank.length; i++) {
		if (acc === theBank[i].accName) {
			total = theBank[i].accBalance - ammount;
			theBank[i].accBalance = total;
			message = "Your remaining balance is " + theBank[i].accBalance;
			return total;
		} else {
			message = "Sorry - We have no record of that account.";
		}
	}
	console.log(message);
	return null;
}

// Transfer between accounts function
var transfer = function (ammount, sender, recepient) {
	var senderBal = withdraw(sender, ammount);
	var recepientBal = deposit(recepient, ammount);
	console.log("The recepient's balance is " + recepientBal);
	console.log("The sender balance is " + senderBal);
}

//////////////////////////
//                      //
//         Tips         //
//                      //
//////////////////////////

// Don't overthink this. Shorter code is probably the answer.

//////////////////////////
//                      //
//         Bonus        //
//                      //
//////////////////////////

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.



