// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.


var bank = []

var addAccount = function(person, money){          // this is the function to be able to add new accounts
	bank.push({name: person, balance: money});
	console.log('added ' + person + ' ' + money + ' to the bank array')
}

var bankBalance = function(){  // this is the function for the total of the accounts
	var total = 0;
	for (var i = 0; i < bank.length; i++) {
		total = total + bank[i].balance
	};

	console.log('the bank is $' + total + ' fucking rich')
}

var checkAccount = function(name){   // this is the function to check the individual accounts 
		for (var i = 0; i < bank.length; i++) {
			if (name === bank[i].name){
			console.log(name + " has $" + bank[i].balance)
			}
				
		};
}

addAccount('harry', 500)
addAccount('joel',500)

// this is the function to be able to deposit from individual accounts 

var deposit = function(person, cash){		
	var result;											
	for (var i = 0; i < bank.length; i++) {
		if (person === bank[i].name){
			result = bank[i];
		} 
	}; result.balance = result.balance + cash;
	console.log(person + 'deposited $' + cash + ' hard cold cash. you now have ' + result.balance + ' fucking dollars mofo $$$$$' )
}

// this is the function to be able to deposit to individual accounts

var withdraw = function(person, cash){		
	var result;											
	for (var i = 0; i < bank.length; i++) {
		if (person === bank[i].name){
			result = bank[i];
		} 
	}; if (result.balance - cash >= 0){
		result.balance = result.balance - cash;
	console.log(person + 'you took $' + cash + ' from your bank.' + person + ' clearly cant save money. you only have ' + result.balance + ' fucking dollars left in LE bank') 
	} else if (result.balance - cash < 0){
		console.log('you have $ ' + result.balance + ' in the bank. go hustle 12K cash for a WDI course at GA and learn to code fucker.')
	}
}


var transfer = function(name1, cashMoney, name2){ // this is working // this is the function to transfer cash
			withdraw(name1, cashMoney)
			deposit(name2, cashMoney)
			console.log(name1 + ' lent $' + cashMoney + ' to this broke ass mofo ' + name2)
}


















