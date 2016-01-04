// We need a function for testing whether a:
// - triangle is valid
// - triangle is equilateral
// - triangle is isosceles
// - triangle is scalene
//
// And I want to do this in an object

var Triangle = {
  isValid: function ( a, b, c ) {
    if ( a + b > c &&
         b + c > a &&
         c + a > b ) {
      return true;
    }
    return false;
  },
  isEquilateral: function ( a, b, c ) {
    if ( this.isValid(a, b, c) &&
         a === b &&
         b === c ) {
      return true;
    }
    return false;
  },
  isIsosceles: function ( a, b, c ) {
    if ( this.isValid(a, b, c) &&
         !this.isEquilateral(a, b, c) &&
         ( a === b ||
           b === c ||
           c === a  ) ) {
      return true;
    }
    return false;
  },
  isScalene: function ( a, b, c ) {
    if ( !this.isIsosceles(a, b, c) &&
         !this.isEquilateral(a, b, c) &&
         this.isValid(a, b, c) ) {
      return true;
    }
    return false;
  },
  type: function ( a, b, c ) {
    if ( this.isEquilateral(a, b, c) ) {
      return "equilateral";
    } else if ( this.isIsosceles(a, b, c) ) {
      return "isosceles";
    } else if ( this.isScalene(a, b, c) ) {
      return "scalene";
    } else if ( !this.isValid(a, b, c) ) {
      return "invalid";
    }
  }
};
