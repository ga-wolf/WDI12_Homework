/*
FixStart

Create a function called fixStart. It should take a single argument, a string, 
and return a version where all occurences of its first character have been replaced with '*', 
except for the first character itself. You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'


<p id='test'>すもももももももものうち</p>

var before = "も";
var after = "M";
var txt = $("#test").html();

var replaceText = txt.replace(new RegExp(before,"g"),after);
//出力結果:すMMMMMMMMのうち
*/

 var fixStart =  function(str){

 	var before = str.slice(0, 1);
 	var after = "*";

 	var replaceText1 = str.replace(new RegExp(before, "g"), after);
 	var replaceTextExceptFirst = replaceText1.replace( replaceText1.slice(0, 1), str.slice(0, 1) ) ;
 	
 	console.log(replaceTextExceptFirst);

	}

fixStart("babble");
fixStart("baseball");
fixStart("fluffy");



