/*
The Grade Assigner 

Write a function named assignGrade that:

takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.

*/

var assignGrade = function(score){
	var grade;

	if (score <= 100 && score >= 80) {
		grade = "A";
	}
	else if (score >= 70) {
		grade = "B";
	}
	else if (score >= 60) {
		grade = "C";
	}
	else if (score >= 50) {
		grade = "D";
	}
	else {
		grade = "F";
	}

	console.log(grade);
 }

 assignGrade(100);
 assignGrade(80);
 assignGrade(70);
 assignGrade(60);
 assignGrade(55);
 assignGrade(40);