// DIFFERENCE OF SQUARES
// We need a couple of methods, (which means we have to store them in an object)...

// 1. Something that returns the sum of all of the squares and a given maximum number (sumOfSquares)
// 2. Something that returns the sum of all of the numbers between 1 and a given maximum number, squared (squareOfSums)
// 3. Something that returns the difference between the two previous methods (differenceOfSquares)

var Squares = {
  sumOfSquares: function ( maximum ) {
    var sum = 0;
    for ( var i = 1; i <= maximum; i++ ) {
      sum += ( i * i );
      // sum += Math.pow( i, 2 );
    };
    console.log( sum );
    return sum;
  },

  squareOfSums: function ( maximum ) {
    var sum = 0;
    for ( var i = 1; i <= maximum; i++ ) {
      sum += i;
    }
    console.log( sum * sum );
    return sum * sum;
    // return Math.pow( sum, 2 );
  },

  differenceOfSquares: function ( maximum ) {
    var squareOfSums = this.squareOfSums( maximum );
    var sumOfSquares = this.sumOfSquares( maximum );

    return squareOfSums - sumOfSquares;
  }
};