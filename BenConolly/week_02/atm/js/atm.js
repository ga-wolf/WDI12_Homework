// var atm = {
// 	checkingNum: function () {
// 		var total =  $("#checking-balance").html();
// 		total = parseInt(total)
// 		return total;
// 	},



// 	SavingsNum: function () {
// 		var total =  $("#savings-balance").html();
// 		total = parseInt(total)
// 		return total;
// 	},


// };

var checkBalance = function () {
	if ( parseInt($("#checking-balance").html()) === 0 ) {
		$("#checking").css("background-color", "red")
	}
}

var savingsBalance = function () {
	if ( parseInt($("#savings-balance").html()) === 0 ) {
		$("#savings").css("background-color", "red")
	}
}


//Deposit checking
$( document ).ready(function () {
	var $chCurrent = $("#checking-balance");
	var $chDepo = $("#checking-deposit");
	var $changeByNum = $("#checking-amount");
	$chDepo.on("click", function () {
		if ( ( parseInt($changeByNum.val()) != "" ) && ( parseInt($changeByNum) != NaN ) ) {
				$chCurrent.html(parseInt($chCurrent.html()) + parseInt($changeByNum.val()))
		}
	})
})

//withdraw checking
$( document ).ready(function () {
	var $chCurrent = $("#checking-balance");
	var $chWith = $("#checking-withdraw");
	var $changeByNum = $("#checking-amount");
	$chWith.on("click", function () {
		if ( parseInt($chCurrent.html()) >= parseInt($changeByNum.val()) && ($changeByNum.val() != "" ) 
			&& ( parseInt($changeByNum) != NaN ) ) {
			$chCurrent.html(parseInt($chCurrent.html()) - parseInt($changeByNum.val()))
		checkBalance()
		}
	})
})


//deposit savings
$( document ).ready(function () {
	var $chCurrent = $("#savings-balance");
	var $chDepo = $("#savings-deposit");
	var $changeByNum = $("#savings-amount");
	$chDepo.on("click", function () {
		if ( ( parseInt($changeByNum.val()) != "" ) && ( parseInt($changeByNum) != NaN ) ) {
				$chCurrent.html(parseInt($chCurrent.html()) + parseInt($changeByNum.val()))
		}
	})
})

//withdraw savings
$( document ).ready(function () {
	var $chCurrent = $("#savings-balance");
	var $chWith = $("#savings-withdraw");
	var $changeByNum = $("#savings-amount");
	$chWith.on("click", function () {
		if ( parseInt($chCurrent.html()) >= parseInt($changeByNum.val()) && ($changeByNum.val() != "" ) 
			&& ( parseInt($changeByNum) != NaN ) ) {
			$chCurrent.html(parseInt($chCurrent.html()) - parseInt($changeByNum.val()));
		savingsBalance()
		}
	})
})












