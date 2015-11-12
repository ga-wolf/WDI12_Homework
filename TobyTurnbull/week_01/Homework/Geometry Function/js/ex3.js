var bank = [
		{name: "Bob", balance: 500}
		{name: "James", balance: 1000}
		{name: "Bill", balance: 1500}
		{name: "Miles", balance: 2500}
		{name: "Jack", balance: 2000}
]

// the variable 'bank' is an object that contains the holder's name and balance //

var addAccount = function (n, b) {
	var addName = n.toString();
	var addBalance = parseFloat(b);
	bank.push ({name: addName, accountBal: addBalance});
	
}

//the function 'addAccount' allows the creation of new accounts to be placed within the
//variable bank given a string for the name and a number for the account balance//

var deposit = function (a,b) {
	for (var i = 0; i < bank.length; i++) {
		if (bank[i].name == a) {
			bank[i].addBalance = b + bank[i].accountBal
		}
	}
}

//the function 'deposit' allows the deposit of funds into the account through a for loop
//that works on 2 arguments (the name and funds deposited)

var withdrawal = function (a2,b2) {
	for (var i = 0; i < bank.length; i++) {
		if (bank[i].name == a2) {
			bank[i].addBalance = b2 - bank[i].accountBal
		}
	}
}

// the function 'withdrawal' works much the same but instead removes funds from the account
// given the same information