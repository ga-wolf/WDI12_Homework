/*
JavaScript Bank
In this homework, you'll create a basic bank in Javascript. 
The bank has many accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts. 
The bank needs a method that will return the total sum of money in the accounts. 

It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. 
There is no need to create additional functions of the bank to delete accounts, etc.
The bank has many accounts. Accounts should be objects that all share a set of common functionality.

var lizzieTheCat = {
  age: 18,
  furColor: 'grey',
  meow: function() {
    console.log('meowww');
  },
  eat: function(food) {
    console.log('Yum, I love ' + food);  
  },
  sleep: function(numMinutes) {
    for (var i = 0; i < numMinutes; i++) {
      console.log('z');
    }
  }
};

lizzieTheCat.meow();
lizzieTheCat.eat('brown mushy stuff');
lizzieTheCat.sleep(10);
*/

var bank = {
	 		accounts: [
	 		
				{
				name: "Wataru",
				balance: 10
				},
				{
				name: "Haruka",
				balance: 20
				},
			
				{
			 	name: "Mylan",
				balance: 30
				}
				],

			newAccounts: [
				{
				name: "Kim",
				balance: 100
				},
				{
				name: "Prisu",
				balance: 20
				}
				],

			bankTotalSumOfMoney: function(accounts){
				var sum = 0;
				for(i=0; i < this.accounts.length; i++){ // object inside では、this.　をつけること。 
				sum = sum + this.accounts[i].balance;
					}
				console.log(sum);
			},

			addAccount: function(accounts){
				for(i=0; i < this.newAccounts.length; i++){
					this.accounts.push(this.newAccounts[i]);
					}
				console.log(this.accounts);
			},

			deposit: function(name, amount){
				for(i=0; i < this.accounts.length; i++){

					if(this.accounts[i].name === name){
						var updatedBlance = 0;
						var updatedBlance = this.accounts[i].balance + amount;
						console.log(name + "'s updated balance is " + updatedBlance);

						break;

					}else{
						console.log("There is no your accounts");
					}
					
			    }
			},

			withdraw: function(name, amount){

				for(i=0; i < this.accounts.length; i++){
					var isYourAccount = false;

					if(this.accounts[i].name === name){   
														 
						var updatedBlance = 0;
						var updatedBlance = this.accounts[i].balance - amount;
						
						if (updatedBlance >= 0){
							console.log(name + "'s updated balance is " + updatedBlance);
							break;

						} else {
							console.log(name + "'s balance is not enough");
						}

						isYourAccount = true;
						break;
						
					} else {
						
						isYourAccount = false;
					}
					if(isYourAccount = false){
						console.log("There is no your accounts");
					} else {

					}
			    }
		    
		}

}

bank.withdraw("miki", 10); //違う名前のとき、問題あり。名前が一致していればOK.




/*
Accounts

Accounts have a current balance and owner's name. 
You should be able to deposit or withdraw from an account to change the balance.
There is no need to write a user interface. Make sure functions return values 

-- you may also have your functions console.log() values to help you see your code working.
You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected:
add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips

Don't overthink this. Shorter code is probably the answer.

Bonus

Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

*/

