var oneBank = [

		{ name: "Ash", accountBal: 1000 },
		{ name: "Misty", accountBal: 1900 },
		{ name: "Meowth", accountBal: 200 },
		{ name: "Brock	", accountBal: 1900 }

	]

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

	var addAccount = function (n, b) {
	var newName = n.toString();
	var newBal = parseFloat(b);
	oneBank.push({name: newName, accountBal: newBal});

}

	// Accounts have a current balance and owner's name. 

	//You should be able to deposit or withdraw from an account to change the balance.

	

	var deposit = function (a, b) {

		for (var i = 0; i < oneBank.length; i++) {
			if(oneBank[i].name === a) {

			oneBank[i].accountBal = b + oneBank[i].accountBal

			}
		}
	}
	

	var withdraw = function (c, d) {

		for (var i = 0; i < oneBank.length; i++) {
			if(oneBank[i].name === c) {

			oneBank[i].accountBal = d - oneBank[i].accountBal

			}
		}
	}



// Bonus

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.


	var transfer = function (name1, name2, cash) {

			if(oneBank[i].accountBal < 0 = cash *=-1

			withdraw(name1, cash)
			deposit(name2, cash)


}







