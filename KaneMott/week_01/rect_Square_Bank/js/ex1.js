// Geometry Function Lab
// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 6,
  width: 4
};



var isSquare = function(vari){
	if (vari.length === vari.width){
		console.log("It's hip to be square!");
		return true;
	} else {
		console.log("getRekt");
		return false;
	}
};

var area = function(vari2){
	var area = vari2.length*vari2.width;
	console.log("Area is "+area+".")
	return area;
};

var perimeter = function(vari){
	var perimeter = ((vari.length+vari.width)*2);
	console.log("Perimeter is "+perimeter+".");
}

isSquare(rectangle);

area(rectangle);

perimeter(rectangle);

// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not


var triangle = {
  sideA: 4,
  sideB: 3,
  sideC: 2
};

var triArray = [triangle.sideA, triangle.sideB, triangle.sideC];

var isTriangle = function(tri){

		if (tri.sideA === tri.sideB && tri.sideA === tri.sideC) {
			return true;
		}

		if (tri.sideA <= (tri.sideB+tri.sideC) && tri.sideA > 1 ||
			tri.sideB  <= (tri.sideC+tri.sideA) && tri.sideB > 1 ||
			tri.sideC <= (tri.sideA+tri.sideB) && tri.sideC > 1 ){
			
				return true;

		} else {return false;}

};

//Working as intended

var isEquilateral = function(tri){
	if (isTriangle(tri) === true){
		if (tri.sideA === tri.sideB && tri.sideA === tri.sideC) {
			return true;
		} else {return false}
	}
}

var isIsosceles = function(tri){
	if (isTriangle(tri) === true){
		if (isEquilateral(tri) === false){
			if (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC){

				return true;
			} else {return false}
		} else {return false}
	} else {return false}
};

var isObtuse = function (tri){
		if (isTriangle(tri) === true && isEquilateral(tri) === false && isIsosceles(tri) === false){
			return true;
		} else {return false}

}
var triArea = function(tri){
	var semiperimeter = (tri.sideA+tri.sideB+tri.sideC)/2
	var area = Math.sqrt(semiperimeter*((semiperimeter-tri.sideA)*(semiperimeter-tri.sideB)*(semiperimeter-tri.sideC)));
	return Number(area.toFixed(2));
}

var doItAll = function (tri){
	if (isTriangle(tri) === true){
		var areaIs = triArea(tri);

		if (areaIs > 0) {

			if (isObtuse(tri)=== true){
				console.log("This is an obtuse triangle, its sides are "+triArray.join(", ")+" giving it a total area of "+areaIs+".")
			}

			if (isEquilateral(tri)===true){
				console.log("This is an equilateral triangle, its sides are "+triArray.join(", ")+" giving it a total area of "+areaIs+".")
			}

			if (isIsosceles(tri)===true){
				console.log("This is an isosceles triangle, its sides are "+triArray.join(", ")+" giving it a total area of "+areaIs+".")
			}
		} else {console.log("That's a line, bro.")}
	} else {console.log("Aint a triangle.")}
}

doItAll(triangle);