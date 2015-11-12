// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

var isEquilateral = function( tri ){
  var res = tri.sideA === tri.sideB && tri.sideB === tri.sideC;
  console.log('equilateral? ' + res);
  return res;
};

var isIsosceles = function( tri ){
  var pairsEqual = 0;   // number of pairs of sides equal
  if (tri.sideA === tri.sideB){
    pairsEqual++;
  }
  if (tri.sideB === tri.sideC){
    pairsEqual++;
  }
  if (tri.sideC === tri.sideA){
    pairsEqual++;
  }
  res = pairsEqual === 1; // strictly isosceles iff 2 sides equal. ie. not all 3.
  console.log('isIsos? ' + res);
  return res;
};

var area = function( tri ){
  var p = (tri.sideA + tri.sideB + tri.sideC) / 2;
  var res = Math.sqrt(p * (p - tri.sideA) * (p - tri.sideB) * (p - tri.sideC));
  console.log(res);
  return res;
};

var isObtuse = function( tri ){
  var a = 0;
  var b = 0;
  var c = 0;
  // find longest side
  if (tri.sideA > tri.sideB && tri.sideA > tri.sideC){
    c = tri.sideA;
    a = tri.sideB;
    b = tri.sideC;
  }else if (tri.sideB > tri.sideC){ // a <= b || a <= c
    c = tri.sideB;
    a = tri.sideA;
    b = tri.sideC;
  }else{
    c = tri.sideC;
    a = tri.sideA;
    b = tri.sideB;
  }
  var res = a * a + b * b < c * c;
  console.log(res);
  return res;
};

var isValidTriangle = function( tri ){
  // a+b > c, a+c > b, and b+c > a
  var res = tri.sideA + tri.sideB > tri.sideC &&
  tri.sideA + tri.sideC > tri.sideB &&
  tri.sideB + tri.sideC > tri.sideA;
  console.log('isValidTri? ' + res);
  return res;
};

var isos = {sideA: 3, sideB: 4, sideC: 4};
var equi = {sideA: 2, sideB: 2, sideC: 2};
var obt = {sideA: 2, sideB: 3, sideC: 4};
var notTri = {sideA: 100, sideB: 1, sideC: 1};

isEquilateral(isos);
isEquilateral(equi);

isIsosceles(isos);
isIsosceles(equi);

area(isos);
area(equi);

isObtuse(obt);
isObtuse(equi);

isValidTriangle(notTri);
isValidTriangle(obt);
