var catFactory = function (name, age, color, legCount) {
	var cat = {};
	cat.name = name;
	cat.age = age;
	cat.color = color;
	
	if (legCount === undefined) {
		legCount = 4;
	}

	cat.legCount = legCount;
	cat.felineAIDS = false;

	cat.meow = function () {
		console.log('Meow...');
	}

	return cat;
};

// Single Array
 var lizzie = catFactory('Lizzie', 18, 'white');
 // lizzie.legCount = 3;
 lizzie.allergies = 'toothpaste';
 console.log(lizzie);
 var daemon = catFactory('Daemon', 1, 'black');
 var professorCuddles = catFactory('Professor Cuddles', 0, 'tortoiseshell');

//	Create objects in an array
var cats = [
	catFactory('Lizzie', 18, 'white'),
	catFactory('Daemon', 1, 'black'),
	catFactory('Professor Cuddles', 0, 'tortoiseshell')
];


// var lizzie = {
// 	name: 'Lizzie',
// 	age: 18,
// 	color: 'white'
// };

// var daemon = {
// 	name: 'Daemon',
// 	age: 1,
// 	color: 'black'
// };

// var professorCuddles = {
// 	nmae: 'Professor Cuddles', 
// 	age: 0,
// 	color: 'tortoiseshell'
// };



var nameLogger = function(c) {
	console.log(c.name);
};

// nameLogger(lizzie);
// nameLogger(daemon);
// nameLogger(professorCuddles);

