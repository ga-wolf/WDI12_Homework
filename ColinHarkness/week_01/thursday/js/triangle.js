// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function(triangle){
	if (triangle.sideA === triangle.sideB === triangle.sideC){
		console.log("This is an equilateral triangle");
}	else{
		console.log("This is not an equilateral triangle");
}
};		

var isIsosceles = function(triangle){
	if (triangle.sideA === triangle.sideB){
		console.log("This is an isosceles triangle");
	}else if (triangle.sideB === triangle.sideC){
		console.log("This is an isosceles triangle");
	}else if (triangle.sideA === triangle.sideC){
		console.log("This is an isosceles triangle");
	} else{
		console.log("This is not an isosceles triangle");
}
};

var area = function(triangle){
	var a = triangle.sideA;
	var b = triangle.sideB;
	var c = triangle.sideC;
	var s = ((triangle.sideA+triangle.sideB+triangle.sideC)/2);
	result = Math.sqrt(s*(s-a)*(s-b)*(s-b)*(s-c));
	return result;
};

var A = triangle.sideA
var B = triangle.sideB 
var C = triangle.sideC

var greatest = function(A, B, C){
    if (A > B && A > C){
        return A;
    } else if (B > A && B > C){
        return B;
    } else if (C > A && C > B){
        return C;
    };
};

var longestSide = greatest(A, B, C)

var isObtuse = function(triangle){ 
    if (longestSide * longestSide > A * A + B * B){
        console.log("This triangle is obtruse")
    }    else {
        console.log("This triangle is not obtuse")
    };
};