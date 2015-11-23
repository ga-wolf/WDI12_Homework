//set the event(click, excute the ffunction).

$(function(){

	$("#checking-deposit").on("click", depositCheckAcc);
	$("#checking-withdraw").on("click", withdrawCheckAcc);
	$("#savings-deposit").on("click", depositSaveAcc);
	$("#savings-withdraw").on("click", withdrawSaveAcc);

	$(".positive-integer").numeric({ decimal: false, negative: false });//正の整数のみ入力可とするプラグイン。
	$('#title').funText(100, 'candy');

});

var depositCheckAcc = function(){

	var balanceText = $("#checking-balance").text();//$0 現在のバランスを取得（文字列）
	var balanceNum = parseInt(balanceText.replace("$", "")); //0 数値で現在のバランスを表示（＄を空文字に入れ替える）
	var newEntry = parseInt($("#checking-amount").val());	// 5 枠に入力した数値を取得（数値）。
	var newBalanceCulcu = ( "$" + (balanceNum + newEntry)); // バランスを計算し、ドルマーク追加。
	var newBalance = $("#checking-balance").text(newBalanceCulcu);//displayにアップデート。

	$("#checking-amount").val("");//数値入力フィールドを空にする。input枠なので、.textは使用できない。
	$("#checking-balance").css("background-color", "#E3E3E3")//入金すると色は色はグレイに（前回の取引で赤になってる可能性ありなので）。
	
	//keep tracking
	var newEntryDollar = "+ $" + newEntry;
	var tracking = $("<li>").text(newEntryDollar);
	$("#checking").append(tracking);

};	



var withdrawCheckAcc = function(){

	var balanceTextCheck = $("#checking-balance").text();//$0 現在のバランスを取得（文字列）
	var balanceNumCheck = parseInt(balanceTextCheck.replace("$", "")); //0 数値で現在のバランスを表示（＄を空文字に入れ替える）
	var balanceTextSave =  $("#savings-balance").text();//$0 現在のsavingバランス取得。
	var balanceNumSave = parseInt(balanceTextSave.replace("$", ""));// 数値で現在のsavingバランスを表示（＄を空文字に入れ替える）
	var newEntry = parseInt($("#checking-amount").val());	// 5 枠に入力した数値。
	var BalanceSum = balanceNumCheck + balanceNumSave;


	if( balanceNumCheck >= newEntry){ //この口座に十分な資金がある時。

		var newBalanceCulcuCheck = ( "$" + (balanceNumCheck - newEntry)); // バランスを計算し、ドルマーク追加。

		//keep tracking
		var newEntryDollar = "- $" + newEntry;
		var tracking = $("<li>").text(newEntryDollar);
		$("#checking").append(tracking);

		if ( newBalanceCulcuCheck==="$0" ){

			$("#checking-balance").css("background-color", "#FF0000");

		} else {

		}


	} else if (balanceNumCheck < newEntry && BalanceSum >= newEntry ){ //この口座には十分な資金がなく、他の口座と合計すれば十分な資金がある時。

		var newBalanceCulcuSave = ( "$" + (balanceNumSave + (balanceNumCheck - newEntry)));
		var newBalanceCulcuCheck = "$0";

		//keep tracking.対象口座は０になる。ある資金すべて引き出す。
		var newEntryDollar = "- $" + balanceNumCheck;
		var tracking = $("<li>").text(newEntryDollar);
		$("#checking").append(tracking);

		//keep tracking.残りを他の口座から引き出す。
		var newEntryDollar = "- $" + (newEntry - balanceNumCheck);
		var tracking = $("<li>").text(newEntryDollar);
		$("#savings").append(tracking);

		//バランスの背景を赤に。
		$("#checking-balance").css("background-color", "#FF0000");

		if(newBalanceCulcuSave === "$0"){
	
			$("#savings-balance").css("background-color", "#FF0000");

		} else {

		}
		

	} else {

		alert("Sorry, you do NOT have sufficient funds.");

	}

	var BalanceSaveUpdated = $("#savings-balance").text(newBalanceCulcuSave);//displayにアップデート。
	var BalanceCheckUpdated = $("#checking-balance").text(newBalanceCulcuCheck);//displayにアップデート。

	$("#checking-amount").val("");//数値入力フィールドを空にする。input枠なので、.textは使用できない。


};



var depositSaveAcc = function(){

	var balanceText = $("#savings-balance").text();//$0 文字列
	var balanceNum = parseInt(balanceText.replace("$", "")); //0 数値で現在のバランスを表示（＄をから文字に入れ替える）
	var newEntry = parseInt($("#savings-amount").val());	// 5 枠に入力した数値。
	var newBalanceCulcu = ( "$" + (balanceNum + newEntry)); // バランスを計算し、ドルマーク追加。
	var newBalance = $("#savings-balance").text(newBalanceCulcu);//displayにアップデート。

	$("#savings-amount").val("");//数値入力フィールドを空にする。input枠なんので、.textは使用できない。
	$("#savings-balance").css("background-color", "#E3E3E3")//入金すると色はグレイに。

	//keep tracking
	var newEntryDollar = "+ $" + newEntry;
	var tracking = $("<li>").text(newEntryDollar);
	$("#savings").append(tracking);

};

var withdrawSaveAcc = function(){

	var balanceTextCheck = $("#checking-balance").text();//$0 文字列
	var balanceNumCheck = parseInt(balanceTextCheck.replace("$", "")); //0 数値で現在のバランスを表示（＄をから文字に入れ替える）
	var balanceTextSave =  $("#savings-balance").text();//$0 文字列
	var balanceNumSave = parseInt(balanceTextSave.replace("$", ""));
	var newEntry = parseInt($("#savings-amount").val());	// 5 枠に入力した数値。
	var BalanceSum = balanceNumCheck + balanceNumSave;


	if( balanceNumSave >= newEntry){

		var newBalanceCulcuSave = ( "$" + (balanceNumSave - newEntry)); // バランスを計算し、ドルマーク追加。

		//keep tracking
		var newEntryDollar = "- $" + newEntry;
		var tracking = $("<li>").text(newEntryDollar);
		$("#savings").append(tracking);

		if(newBalanceCulcuSave==="$0"){

			$("#savings-balance").css("background-color", "#FF0000");

		} else {

		}


	} else if (balanceNumSave < newEntry && BalanceSum >= newEntry ){

		var newBalanceCulcuCheck = ( "$" + (balanceNumCheck + (balanceNumSave - newEntry)));
		var newBalanceCulcuSave = "$0";

			//keep tracking.対象口座は０になる。ある資金すべて引き出す。
		var newEntryDollar = "- $" + balanceNumSave;
		var tracking = $("<li>").text(newEntryDollar);
		$("#savings").append(tracking);

		//keep tracking.残りを他の口座から引き出す。
		var newEntryDollar = "- $" + (newEntry - balanceNumSave);
		var tracking = $("<li>").text(newEntryDollar);
		$("#checking").append(tracking);


		$("#savings-balance").css("background-color", "#FF0000");

		if(newBalanceCulcuCheck === "$0"){

			$("#checking-balance").css("background-color", "#FF0000");

		} else {

		}


	} else {

		alert("Sorry, you do NOT have sufficient funds.");

	}

	var BalanceSaveUpdated = $("#savings-balance").text(newBalanceCulcuSave);//displayにアップデート。
	var BalanceCheckUpdated = $("#checking-balance").text(newBalanceCulcuCheck);//displayにアップデート。

	$("#savings-amount").val("");//数値入力フィールドを空にする。input枠なので、.textは使用できない。

};







