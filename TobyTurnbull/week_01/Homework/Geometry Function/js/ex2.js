var triangle = {
  sideA: 4,
  sideB: 3,
  sideC: 2
};

function isEquilateral(sideA, sideB, sideC){
	if (triangle.sideA == triangle.sideB && triangle.sideA == 
		triangle.sideC && triangle.sideB == triangle.sideC){
	return 'Is Equilateral';
}else{
	return 'Is Not Equilateral';
}}
console.log (isEquilateral(triangle));

//


function isIsocoles(sideA, sideB, sideC){
	if (triangle.sideA == triangle.sideB || triangle.sideA == 
		triangle.sideC || triangle.sideB == triangle.sideC){
	return 'Is Isocoles';
}else{
	return 'Is Not Isocoles';
}}
console.log (isIsocoles(triangle));

//

function area(sideA, sideB, sideC){
	var semiPerimiter = ((triangle.sideA + triangle.sideB + triangle.sideC) / 2)
	var result = (semiPerimiter * (semiPerimiter - triangle.sideA) * (semiPerimiter - triangle.sideB) * (semiPerimiter - triangle.sideB))
	return result
}
console.log (area(triangle))

//

function obtuse(sideA, sideB, sideC){
isIsocoles((triangle.sideA, triangle.sideB, triangle.sideC))
	if ((isIsocoles(triangle.sideA, triangle.sideB, triangle.sideC) === 'Is Not Isocoles')
	&&	(isEquilateral (triangle.sideA, triangle.sideB, triangle.sideC) === 'Is Not Equilateral')){
		return 'Is Obtuse'
    }else{
    	return 'Is Not Obtuse'
	}
}
console.log(obtuse(triangle))
