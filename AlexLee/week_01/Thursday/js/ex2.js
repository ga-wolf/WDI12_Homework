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

Bonus

Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
*/


var bank = {
	accounts: [
		{
			name: "Wilford",
			balance: 50
		},
		{
			name: "Daemon",
			balance: 50
		},
		{
			name: "Lizzie",
			balance: 1
		},
		{
			name: "Warfstache",
			balance: 100
		}
	],

	addAccount: function(accName, accBalance) {
		var newAccount = {};
			newAccount.name = accName;
			newAccount.balance = accBalance;

		this.accounts.push(newAccount);
	},

	listAccounts: function() {
		for (var i = 0; i < this.accounts.length; i++) {
			console.log(this.accounts[i].name);
		}
	},

	totalBalance: function() {
		var total = 0;

		for (var i = 0; i < this.accounts.length; i++) {
			total += this.accounts[i].balance;
		}

		console.log("The bank holds a total of $" +
					 total.toLocaleString() + ".00");
	},

	getAccount: function(accountName) {
		for (var i = 0; i < this.accounts.length; i++) {
			
			var account = this.accounts[i];

			if (this.accounts[i].name.toLowerCase() === accountName.toLowerCase()) {
				return account;
			}
		}
		return 0;
	},

	widthdraw: function(accountName, amt) {
		var account = this.getAccount(accountName);
		
		if (amt < 0) {
			console.log("You do not have enough money in your account");
			return;
		}
		else if (amt > account.balance) {
			console.log("You are trying to widthdraw too much money");
			return;
		}
		if (account) {
			console.log("Your current balance: $" + account.balance + ".00");

			account.balance -= amt;

			console.log("You widthdrew $" + amt.toLocaleString() + ".00");
			console.log("Your new balance: $" +
						 account.balance.toLocaleString() + ".00");
		}
		else {
			console.log(accountName + " does not own an account");
		}
	},

	deposit: function(accountName, amt) {
		var account = this.getAccount(accountName);

		if (amt < 0) {
			console.log("You have entered an illegal amount");
			return;
		}
		if (account !== 0) {
			console.log("Your current balance: $" + account.balance + ".00");

			account.balance += amt;

			console.log("You deposited $" + amt.toLocaleString() + ".00");
			console.log("Your new balance: $" +
						 account.balance.toLocaleString() + ".00");
		}
		else {
			console.log(accountName + " does not own an account");
		}
	},

	transfer: function(account1, amt, account2) {
		var acc1 = this.getAccount(account1);
		var acc2 = this.getAccount(account2);

		console.log("Transfering $" + amt.toLocaleString() + ".00 to " +
					 acc2.name + "'s account");

		this.widthdraw(acc1.name, amt);
		console.log("");
		this.deposit(acc2.name, amt);
	}
};