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

// Bonus

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
var bank = {
    accounts: [],
    totalSum: function(){
      var total = 0;
      console.log('sum all account balances');
      for (var i=0; i < bank.accounts.length; i++){
        var acc = bank.accounts[i];
        console.log('\t' + acc.name + ' ' + acc.balance);
        total += acc.balance;
      }
      console.log('total: ' + total);
      return total;
    },
    addAccount: function( aName, aBalance ){
      bank.accounts.push({
        name: aName,
        balance: aBalance,
        withdraw: function( amt ){
          var res = false;
          console.log('account ' + this.name + ' balance: ' + this.balance);
          if (this.balance >= amt){
            this.balance -= amt;
            res = true;
          }else{
            console.log("\tInsufficient funds");
          }
          console.log('\twithdraw: ' + amt + ' balance: ' + this.balance);
          return res;
        },
        deposit: function( amt ){
          console.log('account ' + this.name + ' balance: ' + this.balance);
          if (amt > 0){
            this.balance += amt;
          }
          console.log('\tdeposit: ' + amt + ' balance: ' + this.balance);
          return this.balance;
        },
        transfer: function( to, amt ){
          var res = false;
          to = bank.getAccount(to);
          if (to === null){
            console.log('payee invalid');
          }else if (this.withdraw(amt)){
            to.deposit(amt);
            res = true;
          }
          return res;
        },
      });
    },
    getAccount: function( name ){
      var res = null;
      for (var i=0; i < this.accounts.length; i++){ // get account objects from account name
        var account = this.accounts[i];
        if (account.name === name){
           res = account;
        }
      }
      return res;
    }
};

bank.addAccount('tom', 2);
bank.addAccount('bob', 25);
bank.addAccount('hank', 100);

console.log("\nBob opens a bank account with $25, the bank charges him an 'annual fee' and withdraws $10, Bob deposits $5 and wonders wtf his balance is $20.");
var bob = bank.getAccount('bob');
bob.withdraw(10);
bob.deposit(5);
bank.totalSum();

console.log("\nHank has $100. Tom has $2. Tom threatens to reveal Hank's dirty secret that he watches my little pony so Hank transfers $25 to Tom. Hank's balance is $75 and Tom has $27. Tom tell's his friends anyway.");
var hank = bank.getAccount('hank');
var tom = bank.getAccount('tom');
hank.transfer('tom', 25);
bank.totalSum();

console.log("\nTom needs to pay hospital fees after Hank punched him in the face and tries to withdraw $30 but his balance is $27.");
tom.withdraw(30);
bank.totalSum();