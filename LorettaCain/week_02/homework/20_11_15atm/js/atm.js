var checkingAmnt;

var savingsAmnt;


//========= CHECKING ACCOUNT =============

var checkingWriter = function( number ) {
  if ( number + checkingAmnt < 0 ) {
      overdraftChecking(number);
    // console.log("You can not withdraw a negative amount.")
    return; // Bail out.
  };

  $( "#checking-balance.balance" ).text("$" + (number + checkingAmnt));
  checkingReader();
  // savingsReader();
}

var checkingReader = function(){
  checkingAmnt = parseFloat($( "#checking-balance.balance" ).text().slice(1));
  console.log("Current checking account is: " + checkingAmnt);

  if (checkingAmnt <= 0) {
    $( "#checking-balance" ).css("background-color", "red");
  } else {
    $( "#checking-balance" ).css("background-color", "#E3E3E3");
  };

};



$( "#checking-deposit" ).click(function( event ) {
  var enteredAmount = parseFloat($( "#checking-amount" ).val());
  checkingWriter( enteredAmount );
  // alert( enteredAmount );
  event.preventDefault();
});

$( "#checking-withdraw" ).click(function( event ) {
  var enteredAmount = -1 * parseFloat($( "#checking-amount" ).val());
  var x = checkingWriter( enteredAmount );
  // alert( enteredAmount );
  event.preventDefault();
});


checkingReader();

 
//========= SAVINGS ACCOUNT STARTS HERE ==================

var savingsWriter = function( number ) {
  if (number + savingsAmnt < 0) {
      overdraftSavings(number);
      console.log("You can not withdraw a negative amount. sW")
      return; // Bail out.
  };
  // if (number + savingsAmnt + checkingAmnt < )


  $( "#savings-balance.balance" ).text("$" + (number + savingsAmnt));
  savingsReader();
}

var savingsReader = function(){
  savingsAmnt = parseFloat($( "#savings-balance.balance" ).text().slice(1));
  console.log("Current savings account is: " + savingsAmnt);

  if (savingsAmnt <= 0) {
    $( "#savings-balance" ).css("background-color", "red");
  } else {
    $( "#savings-balance" ).css("background-color", "#E3E3E3");
  };
};



$( "#savings-deposit" ).click(function( event ) {
  var enteredAmount = parseFloat($( "#savings-amount" ).val());
  savingsWriter( enteredAmount );
  // alert( enteredAmount );
  event.preventDefault();
});

$( "#savings-withdraw" ).click(function( event ) {
  var enteredAmount = -1 * parseFloat($( "#savings-amount" ).val());
  savingsWriter( enteredAmount);
  // alert( enteredAmount );
  event.preventDefault();
});

savingsReader();


//=========== OVERDRAFT CHECKING FUNCTION ============

var overdraftChecking = function( number ) {
  //Subtract the number from the current savingsAmnt
  //Add the number to the current checkingAmnt. 
  //Log both on the screen. 

  // savingsAmnt = savingsAmnt + number;
  // checkingAmnt = number;
  if ((savingsAmnt + number) < 0 ) {
     // savingsAmnt = savingsAmnt + number;
    console.log("You can not withdraw a negative amount odCchecking")
    return; // Bail out.
  };
  // if (checkingAmnt < 0 ) {
  //   console.log("You can not withdraw a negative amount.")
  //   return; // Bail out.
  // };


  savingsAmnt = savingsAmnt + number;


  // $( "#checking-balance.balance" ).text("$" + (checkingAmnt));
  $( "#savings-balance.balance" ).text("$" + (savingsAmnt));
  // checkingReader();
  savingsReader();

};// 

// var balance = function () {
//   return savingsAmnt + checkingAmnt;
// }

//=========== OVERDRAFT SAVINGS FUNCTION ============

var overdraftSavings = function( number ) {
  if ((checkingAmnt + number) < 0 ) {
    console.log("You can not withdraw a negative amount odCsavings")
    return; // Bail out.
  };

  checkingAmnt = checkingAmnt + number;


  $( "#checking-balance.balance" ).text("$" + (checkingAmnt));
  // $( "#savings-balance.balance" ).text("$" + (savingsAmnt));
  checkingReader();
  // savingsReader();

};// 
