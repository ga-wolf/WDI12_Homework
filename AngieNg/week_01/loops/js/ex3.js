/*

The Grade Assigner

Check the results of assignGrade function from the conditionals 
exercise for every value from 60 to 100 - so your log should show 
"For 89, you got a B. For 90, you got an A.", etc.

*/
var assignGrade = function(score) {
	var grade;

	if (score >= 90) {
		return grade = 'A';
	}
	else if (score >= 80) {
		return grade = 'B';
	}
	else if (score >= 70) {
		return grade ='C';
	}
	else if (score >= 60) {
		return grade = 'D';
	}
	else {
		return grade = 'E';
	}
}

for (var i = 60; i <= 100; i++) {
	console.log('For ' + i + ', you got a ' + assignGrade(i) + ".");
}
