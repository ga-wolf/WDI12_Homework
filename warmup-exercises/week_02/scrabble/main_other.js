var letterScores = {
  1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
  2: ['d', 'g'],
  3: ['b', 'c', 'm', 'p'],
  4: ['f', 'h', 'v', 'w', 'y'],
  5: ['k'],
  8: ['j', 'x'],
  10: ['q', 'z']
};

var scoreWord = function ( word ) {
  var wordScore = 0;
  word = word.toLowerCase();

  for ( var i = 0; i < word.length; i++ ) {
    var letter = word[i];
    scoreIterator: for ( var score in letterScores ) {
      if ( letterScores[ score ].indexOf( letter ) >= 0 ) {
        wordScore += parseInt( score );
        break scoreIterator;
      }
    }
  }

  console.log( "The score of the word " + word + " is " + wordScore + "." );
  return wordScore;
};

scoreWord( "ampERS&" );