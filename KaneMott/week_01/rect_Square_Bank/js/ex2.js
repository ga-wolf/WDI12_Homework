// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following 
// capabilities that you need to write.

// Bank
var bank = [];

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total 
// sum of money in the accounts. 

var bankSum = function (){
	var bankTotal = null;
	for (var i = 0; i < bank.length; i++) {
		bankTotal += bank[i].sum;
	};

	return bankTotal;
}

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
// It also needs an addAccount method that will enroll a new account at the bank and 
// add it to the array of accounts. 

var addAccount = function(name,sum){

	var account = {};
	account.name = name;
	account.sum = sum;
		if (sum < 0){
			account.sum = 0;
			}

	bank.push(account);
}

addAccount("Tim",27);
addAccount("Patrick",90);
addAccount("Mongo",20);

// Accounts

// Accounts have a current balance and owner's name. 
// You should be able to deposit or withdraw from an account to change the balance.

var withdraw = function(name,sum){
	var namefind = -1;
	var newSum = null;

		//Loop searches bank arrays until it finds a matching string to name

		for (var i = 0; i < bank.length; i++) {
			if (bank[i].name === name) {
				namefind = i;
			};
		};

		// If name found and sum withdrawn from array sum is above 0, update newSum, change in array.

	if (namefind != -1){

		if (bank[namefind].sum - sum >= 0){

			newSum = bank[namefind].sum - sum;

			console.log("New balance is "+newSum)

			bank[namefind].sum = newSum;

		} else {console.log("That overdraws you, leave before we get security.")}


	} else { console.log("You don't seem to have an account with us, are you sure you spelled that correctly?") }
};



// Bonus

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

var transfer = function (name1, sum, name2) {

var namefind1 = -1;
var newSum1 = null;

var namefind2 = -1;
var newSum2 = null;

		//Name finding loops

for (var i = 0; i < bank.length; i++) {
	if (bank[i].name === name1) {
		namefind1 = i;
		};
	};

for (var i = 0; i < bank.length; i++) {
	if (bank[i].name === name2) {
		namefind2 = i;
		};
	};		

		// More or less the same as previous function.

	if (namefind1 != -1 && namefind2 != -1){
		if (bank[namefind1].sum - sum >= 0){

			newSum1 = bank[namefind1].sum - sum;
			newSum2 = bank[namefind2].sum + sum;

			console.log(bank[namefind1].name+"'s new balance is $"+newSum1+", "+bank[namefind2].name+"'s new balance is $"+newSum2+".");

			bank[namefind1].sum = newSum1;
			bank[namefind2].sum = newSum2;
		
		} else {console.log("Insufficient funds - get out.")}
	} else {console.log("I can't seem to find those names, could you check your spelling?")}
};

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: 
// add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
var story = function (){
	console.log("Here's a shit story: ");
	console.log("Tim invited his friend Tina to the bank, she deposited $20");

	addAccount("Tina",20);

	console.log("Tina tried to remove $30 from her account, but was declined.");
	withdraw("Tina", 30);

	console.log("She settled for her $20.");
	withdraw("Tina", 20);

	console.log("Tina ultimately stole Tim's credit card and transferred all his money in to her account.");
	transfer("Tim", 27, "Tina");

	console.log("Sadly, Tim was broke as shit.");
	console.log("Tina ultimately went back to the bank, robbing it of its total contents: $"+bankSum());
	console.log('\n'+"I aint saying she's a gold digger -- but she ain't messing with no broke niggas.");
};