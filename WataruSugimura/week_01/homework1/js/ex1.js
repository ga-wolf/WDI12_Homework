/*
Create a function called DrEvil. 
It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. 

For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)

 */

 var DrEvil =  function(a){

	if (a === 1000000){
		console.log(a + " dollars (pinky)")	
	}else{
		console.log(a + " dollars")	
	}
}

DrEvil(10);
DrEvil(1000);
DrEvil(1000000);