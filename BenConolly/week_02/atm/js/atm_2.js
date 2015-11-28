$( document ).ready(function () {
	var theATM = {
		$chBal: $("#checking-balance"),
		$chChangeNum: $("#checking-amount"),
		$svBal: $("#savings-balance"),
		$svChangeNum: $("#savings-amount"),
	}



	var zeroedCh = function () {
		if ( parseInt(theATM.$chBal.html()) === 0 ) {
			$("#checking").css("background-color", "red");
		};
	}

	var zeroedSv = function () {
		if ( parseInt(theATM.$svBal.html()) === 0 ) {
			$("#savings").css("background-color", "red");
		};
	}

zeroedSv()
zeroedCh()


	$("#checking-deposit").on("click", function () {
			if ( parseInt(theATM.$chChangeNum.val()) ) {
				theATM.$chBal.html(parseInt(theATM.$chBal.html()) + 
				parseInt(theATM.$chChangeNum.val()));
				$("#checking").css("background-color", "#6C9A74");
			};
		})

	$("#checking-withdraw").on("click", function () {
		if ( parseInt(theATM.$chBal.html()) >= parseInt(theATM.$chChangeNum.val()) ) {
			theATM.$chBal.html(parseInt(theATM.$chBal.html())
				- parseInt(theATM.$chChangeNum.val()));
			zeroedCh();
		} else if ( ( parseInt(theATM.$chBal.html()) + parseInt(theATM.$svBal.html()) )
			>= parseInt(theATM.$chChangeNum.val()) ) {
			var newSub = parseInt(theATM.$chChangeNum.val()) - parseInt(theATM.$chBal.html())
			theATM.$chBal.html(0);
			theATM.$svBal.html(parseInt(theATM.$svBal.html()) - newSub);
			zeroedCh();
			zeroedSv();
		}
	})


	$("#savings-deposit").on("click", function () {
			if ( parseInt(theATM.$svChangeNum.val()) ) {
					theATM.$svBal.html(parseInt(theATM.$svBal.html()) + 
						parseInt(theATM.$svChangeNum.val()));
					$("#savings").css("background-color", "#6C9A74");
			};
		})

	$("#savings-withdraw").on("click", function () {
		if ( parseInt(theATM.$svBal.html()) >= parseInt(theATM.$svChangeNum.val()) ) {
			theATM.$svBal.html(parseInt(theATM.$svBal.html())
				- parseInt(theATM.$svChangeNum.val()));
			zeroedSv();
		} else if ( ( parseInt(theATM.$chBal.html()) + parseInt(theATM.$svBal.html()) )
			>= parseInt(theATM.$svChangeNum.val()) ) {
			var newSub = parseInt(theATM.$svChangeNum.val()) - parseInt(theATM.$svBal.html());
			theATM.$svBal.html(0);
			theATM.$chBal.html(parseInt(theATM.$chBal.html()) - newSub);
			zeroedSv();
			zeroedCh();
		}
	})
})