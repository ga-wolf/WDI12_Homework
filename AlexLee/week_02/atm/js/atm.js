var atm = {
	checkBalance: 0,
	savingsBalance: 0,

	displayBalance: function(account) {
		if (account === "check") {
			$("#checking-balance").number(this.checkBalance, 2) //Using jQuery number plugin to format the balance to currency
								.css("background-color", "#E3E3E3");

			if (this.checkBalance === 0) {
				$("#checking-balance").css("background-color", "red");
			}
		}

		else if (account === "savings") {
			$("#savings-balance").number(this.savingsBalance, 2) //Using jQuery number plugin to format the balance to currency
								.css("background-color", "#E3E3E3");

			if (this.savingsBalance === 0) {
				$("#savings-balance").css("background-color", "red");
			}
		}
	},

	overdraft: function(account, amount) {
		var overdraftCheckAmt = amount - this.checkBalance;
		var overdraftSavingsAmt = amount - this.savingsBalance;

		if ( account === "check" && amount > this.checkBalance &&  overdraftCheckAmt <= this.savingsBalance) {

			this.checkBalance = 0;
			this.savingsBalance -= overdraftCheckAmt;
			this.displayBalance("savings");
			return true;
		}

		else if (account === "savings" && amount > this.savingsBalance && overdraftSavingsAmt <= this.checkBalance) {

			this.savingsBalance = 0;
			this.checkBalance -= overdraftSavingsAmt;
			this.displayBalance("check");
			return true;
			
		}

		return false;

	},

	deposit: function(account, amount) {
		if (amount < 0) {
			$("#message").html("You can't deposit negative money!");
			$("#message").show();
			return;
		}
		else {
			$("#message").hide();
		}

		amount = amount || 0;

		if (account === "check") {
			this.checkBalance += amount;
		}
		else if (account === "savings") {
			this.savingsBalance += amount;
		}

		this.displayBalance(account);
	},

	isWithdrawAmountValid: function(account, amount) {
		var balance;
		account === "check" ? balance = this.checkBalance : balance = this.savingsBalance; 

		if (amount < 0) {
			$("#message").html("You can't widthraw negative money!");
			$("#message").show();
			return false;
		}

		else if ( amount > balance && amount > (this.checkBalance + this.savingsBalance) ) {
			$("#message").html("You are trying to withdraw too much money!");
			$("#message").show();
			return false;
		}

		$("#message").hide();
		return true;
	},

	widthdraw: function(account, amount) {

		if (this.isWithdrawAmountValid(account, amount)) {

			amount = amount || 0;
			debugger;
			if (account === "check" && !this.overdraft(account, amount)) {
				this.checkBalance -= amount;
			}
			else if (account === "savings" && !this.overdraft(account, amount)) {
				this.savingsBalance -= amount;
			}

			this.displayBalance(account);
		}
	}
};

atm.displayBalance("check");
atm.displayBalance("savings");

//Setup checking buttons on click events
$("#checking-deposit").on("click", function() {
	atm.deposit( "check", parseFloat( $("#checking-amount").val() ) );
});
$("#checking-withdraw").on("click", function() {
	atm.widthdraw( "check", parseFloat( $("#checking-amount").val() ) );
});

//Setup savings buttons on click events
$("#savings-deposit").on("click", function() {
	atm.deposit( "savings", parseFloat( $("#savings-amount").val() ) );
});
$("#savings-withdraw").on("click", function() {
	atm.widthdraw( "savings", parseFloat( $("#savings-amount").val() ) );
});