/*
Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 4,
  width: 4
};
*/

var rectangle = {
  length: 2,
  width: 8
};
var square = {
  length: 10,
  width: 10
};

var isSquare = function( val ) {
    if (val["length"] === val["width"]) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }

};

 //isSquare(square); 


//area - Returns the area of the rectangle  A = w * l
var area = function( val2 ) {
  var theArea = val2["length"] * val2["width"]
    console.log( "The area of this shape is " + theArea + ".");
    return theArea;
}

//area(rectangle); 


//perimeter - Returns the perimeter of the rectangle
// P = 2(l+w)
var perimeter = function( val3 ) {
    var perim = 2 * (val3["length"] + val3["width"]);
    console.log( "The perimiter of this rectangle is " + perim + ".");
    return perim;
}

//perimeter(square); 




/*
Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/

//PART ONE

//isEquilateral - Returns whether the triangle is equilateral or not

var triangle = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

var notEquTri = {
  sideA: 8,
  sideB: 7,
  sideC: 5
}

var isEquilateral = function( value ) {
    
    if (value['sideA'] === value['sideC'] &&
        value['sideA'] === value['sideB'] &&
        value['sideB'] === value['sideA'] &&
        value['sideB'] === value['sideC']) {
      console.log("This triangle is an equilateral!")
    }   else {
          console.log("This triangle is not an equilateral, try again!")
        }
        return value;
};

//isEquilateral(triangle);

//So you can't compare more than two values at once. BUT you can || and && multiple values



//PART TWO

//isIsosceles - Returns whether the triangle is isosceles or not
//An isosceles is a triangle with 2 equal sides
//So this time you need to use || instead of && 
//BUT Don't let it print out that it is an Iso if it's actually an Equi

var isoTriangle = {
  sideA: 4,
  sideB: 4,
  sideC: 3
};
var notIsoTriangle = {
  sideA: 3,
  sideB: 2,
  sideC: 4
};
var equTriangle = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

var isIsosceles = function( isItIso ) {
  if (isItIso['sideA'] === isItIso['sideC'] &&
      isItIso['sideA'] === isItIso['sideB'] &&
      isItIso['sideB'] === isItIso['sideA'] &&
      isItIso['sideB'] === isItIso['sideC']) {
    console.log("This triangle is an equilateral!")
  } else if (isItIso['sideA'] === isItIso['sideB'] || 
              isItIso['sideA'] === isItIso['sideC'] ||
              isItIso['sideB'] === isItIso['sideC']){
           console.log("This triangle is an isosceles!")
            } else {
         console.log("This triangle is not an isosceles!")
        }
       return isItIso;
};

isIsosceles(isoTriangle);
isIsosceles(notIsoTriangle);
isIsosceles(equTriangle);

//I want it to say this is an equ but not also an iso
//So if it's an equi DONT log iso ELSE IF





//PART THREE

//area - Returns the area of the Triangle
//Area = 1/2(base*height)
//Uuhhhh.........what? 














//PART FOUR

//isObtuse - Returns whether the triangle is obtuse or not

