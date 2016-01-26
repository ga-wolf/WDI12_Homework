// The Atbash Cipher was one of the first forms of encryption ever
// It was widely used for a long time
//
// For this we will only need a function to:
//  encrypt a string
//  decrypt a string


var LETTERS = "abcdefghijklmnopqrstuvwxyz";
var REVERSED_LETTERS = LETTERS.split("").reverse().join("");

var encrypt = function ( str ) {
  str = str.toLowerCase();
  var encodedText = "";

  for ( var i = 0; i < str.length; i++ ) {
    var letter = str[i];
    var indexOfChar = LETTERS.indexOf( letter );
    var reverseChar = REVERSED_LETTERS.charAt( indexOfChar );
    encodedText += reverseChar;
  }

  return encodedText;
}

var decrypt = function ( str ) {
  str = str.toLowerCase();
  var decodedText = "";

  for ( var i = 0; i < str.length; i++ ) {
    var letter = str[i];
    var indexOfChar = REVERSED_LETTERS.indexOf( letter );
    var normalChar = LETTERS.charAt( indexOfChar );
    decodedText += normalChar;
  }

  return decodedText;
}