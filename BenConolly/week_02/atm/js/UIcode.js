$( document ).ready(function () {
	var zeroedCh = function () {
		if ( parseInt($("#checking-balance").html()) === 0 ) {
			$("#checking").css("background-color", "red");
		};
	}

	var zeroedSv = function () {
		if ( parseInt($("#savings-balance").html()) === 0 ) {
			$("#savings").css("background-color", "red");
		};
	}

	zeroedSv()
	zeroedCh()

	$("#checking-deposit").on("click", function () {
		//=============================
		//FUN FUN DEFENSIVE CODING
		if ( parseInt($("#checking-amount").val()) ) {
		var newTotal = deposit ( parseInt($("#checking-balance").html()), parseInt($("#checking-amount").val()) );
		$("#checking-balance").html(newTotal)
		$("#checking").css("background-color", "#6C9A74");
		}
	})

	$("#checking-withdraw").on("click", function () {
		var newTotal = withdraw ( parseInt($("#checking-balance").html()), parseInt($("#checking-amount").val()), parseInt($("#savings-balance").html()) );
		if ( newTotal.length >1 ) {
			$("#savings-balance").html(newTotal[1]);
			$("#checking-balance").html(newTotal[0]);
		} else {
		$("#checking-balance").html(newTotal);
		}
		zeroedSv();
		zeroedCh();
	})

	$("#savings-deposit").on("click", function () {
		if ( parseInt($("#savings-amount").val()) ) {
		var newTotal = deposit ( parseInt($("#savings-balance").html()), parseInt($("#savings-amount").val()) );
		$("#savings-balance").html(newTotal)
		$("#savings").css("background-color", "#6C9A74");
		}
	})

	$("#savings-withdraw").on("click", function () {
		var newTotal = withdraw ( parseInt($("#savings-balance").html()), parseInt($("#savings-amount").val()), parseInt($("#checking-balance").html()) );
		if ( newTotal.length >1 ) {
			$("#savings-balance").html(newTotal[0])
			$("#checking-balance").html(newTotal[1])
		} else {
		$("#savings-balance").html(newTotal)
		}
		zeroedSv()
		zeroedCh()
	})
})