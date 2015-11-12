/*
Create a function called verbing. 
It should take a single argument, a string. 
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', 
in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

  文字列.substring(開始位置,終了位置)

  str.slice(str.length-1) スライスで最後のレターを撮りたいときには、これだけでよい。
  もしくは、str.slice(str.length-1, str.length)でもOK

  */

 var verbing =  function(str){

 	if(str.length >= 3 && str.substring(str.length-3, str.length) !== "ing"){
 		console.log(str + str.slice(str.length-1, str.length) + "ing");

 	} else if(str.substring(str.length-3, str.length) === "ing") {
		console.log(str + "ly");

 	} else {
		console.log(str);
 	}


	}

verbing("swim");
verbing("swimming");
verbing("go");
