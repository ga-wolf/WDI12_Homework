/*
Geometry Function Lab
Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle

*/

var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function (rectangle) {
	if(rectangle.length !== rectangle.width){
		console.log("It's NOT square");
	}else{
		console.log("It's square");
	}
}

isSquare(rectangle);


var area = function (rectangle) {
	console.log(rectangle.length*rectangle.width);
}

area(rectangle);


var perimeter = function (rectangle) {
	console.log(2*rectangle.length + 2*rectangle.width);
}

perimeter(rectangle);

/*
Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not //正三角形
isIsosceles - Returns whether the triangle is isosceles or not　// 二等辺
area - Returns the area of the Triangle //　面積
isObtuse - Returns whether the triangle is obtuse or not //　鈍角三角形（その角が直角 (90°=π/2 rad)よりも大きい図形である。

var triangle = {
  sideA: 3,(7)
  sideB: 4,(8)
  sideC: 4 (10)
};
*/

var triangle = {
  sideA: 5,
  sideB: 10,
  sideC: 14
};

var isEquilateral = function(triangle){

	if(triangle.sideA === triangle.sideB && 
		triangle.sideB === triangle.sideC && 
		triangle.sideC === triangle.sideA ){
		console.log("It's equilateral.");
	} else {
		console.log("It's NOT equilateral.");
	} 
}

isEquilateral(triangle);


var isIsosceles = function(triangle){

	if(triangle.sideA === triangle.sideB || 
		triangle.sideB === triangle.sideC || 
		triangle.sideC === triangle.sideA ){
		console.log("It's isosceles.");
	} else {
		console.log("It's NOT isosceles.");
	} 
}

isIsosceles(triangle);


//T = \sqrt{s(s-a)(s-b)(s-c)}
//ただし、
//s=\frac{a+b+c}{2}.

var area = function(triangle){

	var a = triangle.sideA;
	var b = triangle.sideB;
	var c = triangle.sideC;
	var s = (a + b + c)/2;
	var t = Math.sqrt(s*(s-a)*(s-b)*(s-c));

		console.log(t); 
}

area(triangle);



var isObtuse = function(triangle){

	var a = triangle.sideA;
	var b = triangle.sideB;
	var c = triangle.sideC;

	var A = b*b + c*c - a*a;　// CosA = (b*b + c*c - a*a) /2bc. 2bc > 0. つまり分子が負 = A>90°
	var B = a*a + c*c - b*b;
	var C = a*a + b*b - c*c;

	if( A < 0 || B < 0 || C < 0 ){　//Aが負のとき。
		console.log("It's obtuse.");

	} else {
		console.log("It's NOT obtuse."); //鈍角三角形でないとき
	}
}

isObtuse(triangle);









	