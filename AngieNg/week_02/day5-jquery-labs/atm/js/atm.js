// - To display on the screen the balance of the account
// - Deposit money
// - Withdraw money
// - Make sure the balance in an account can't go negative. Ignore the transaction if withdraw $ more than balance exist
// - If balance of account is 0 value, background of bank account should go red
// - What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.

var checkingBalance = 0;
var savingsBalance = 0;


$(document).ready(function (){
	$('#checking-deposit').click(depositChecking);
	$('#checking-withdraw').click(withdrawChecking);	
	$('#savings-deposit').click(depositSaving);	
	$('#savings-withdraw').click(withdrawSaving);
});


var depositSaving = function () {
	var savingsAmount = $('#savings-amount').val();
	savingsAmount = parseInt(savingsAmount);
	savingsBalance += savingsAmount;

	$('#savings-balance').text('$' + savingsBalance);

	warningDisplay();	
	clearInputs();
}

var depositChecking = function() {
	var checkingAmount = $('#checking-amount').val();
	checkingAmount = parseInt(checkingAmount);

	checkingBalance += checkingAmount;

	$('#checking-balance').text('$' +checkingBalance);

	warningDisplay();	
	clearInputs(); 
}

var withdrawSaving = function(){
	var savingsAmount = $('#savings-amount').val();
	savingsAmount = parseInt(savingsAmount);	

	var totalBalance = withdrawingProcess(savingsAmount, savingsBalance, checkingBalance); //value1: savingsBalance
	savingsBalance = totalBalance[0];
	checkingBalance = totalBalance[1];

	$('#checking-balance').text('$' +checkingBalance);
	$('#savings-balance').text('$' +savingsBalance);

	warningDisplay();
	clearInputs(); 
};

var withdrawChecking = function() {

	var checkingAmount = $('#checking-amount').val();
	checkingAmount = parseInt(checkingAmount);

	var totalBalance = withdrawingProcess(checkingAmount, checkingBalance, savingsBalance); //value1: checkingBalance
	checkingBalance = totalBalance[0];
	savingsBalance = totalBalance[1];

	$('#checking-balance').text('$' +checkingBalance);
	$('#savings-balance').text('$' +savingsBalance);

	warningDisplay();
	clearInputs(); 
}

var withdrawingProcess = function(amount, value1, value2) {

	//Process 1: Check saving/checking amount > 0 and do normal withdrawing
	if (value1 >= amount) {
		value1 -= amount;
	} else {
		//Process 2: Overdraft protection process
		if ((value1 + value2) >= amount) {
			var remainingAmount = value1 - amount;	
			value1 = 0;
			value2 += remainingAmount;
		} else {
			alert("Sorry, you have not enough money to withdraw from both accounts with this amount $" +amount);
		}
	} 

	return [value1, value2];	

}

var warningDisplay = function() {

	if (savingsBalance === 0){
		$('#savings-balance').addClass("zero");
	} else {
		$('#savings-balance').removeClass("zero");
	}

	if (checkingBalance === 0){
		$('#checking-balance').addClass("zero");
	} else {
		$('#checking-balance').removeClass("zero");
	}	
}

var clearInputs = function() {
	$('#savings-amount').val("");
	$('#checking-amount').val("");
}
