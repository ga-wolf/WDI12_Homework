//Should also be storing the account balances to modify them. Won't that be delightful.


var overflow = function (currentBal, otherBal, subNum) {
	var subOther = subNum - currentBal;
	currentBal = 0;
	otherBal = otherBal - subOther;
	return [currentBal, otherBal];
}

var deposit = function (currentBal, addNum) {
	return currentBal + addNum;
}

var withdraw = function (currentBal, subNum, otherBal) {
	if ( currentBal >= subNum ) {
		return currentBal - subNum;
	} else if ( currentBal + otherBal >= subNum ) {
		return overflow(currentBal, otherBal, subNum);
	} else {
	};
};