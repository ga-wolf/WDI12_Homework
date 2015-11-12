var rectangle = {
  length: 4,
  width: 4,
};

function isSquare(length, width){
	if ((rectangle.width) == (rectangle.length))
		return "Square"
	else
		return "Rectangle"
}
console.log(isSquare (rectangle))

//

var rectangle = {
  length: 4,
  width: 4,
};

function area(length, width){
	var result = ((rectangle.length) * (rectangle.width))
	return result
}
console.log(area (rectangle))

//

var rectangle = {
  length: 4,
  width: 4,
};

function perimiter(length,width){
	var result = ((rectangle.length * 2) + (rectangle.width * 2))
	return result
}
console.log (perimiter (rectangle))

//