// GEOMETRY FUNCTION LAB

// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

// var rectangle = {
//   length: 4,
//   width: 4
// };
var isSquare = function( rect ){
  var res = rect.length === rect.width;
  console.log('isSquare(length: ' + rect.length + ' width:' + rect.width + ') = ' + res);
  return res;
};

var area = function( rect ){
  var res = rect.length * rect.width;
  console.log('area ' + res);
  return res;
};

var perimeter = function( rect ){
  var res = 2 * rect.length + 2 * rect.width;
  console.log('perimeter ' + res);
  return res;
};

var square = {length: 4, width: 4};
var rect = {length: 4, width: 3};

isSquare(square);
isSquare(rect);

area(square);
area(rect);

perimeter(square);
perimeter(rect);

