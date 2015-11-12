/*

The Recipe Card

Never forget another recipe!

Create an object to hold information on your favorite recipe. 
It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

*/

var favoriteRecipe = { title : "Mole", 
					   serves : 2, 
					   ingredients : ["cinnamon", "cumin", "cocoa", "butter"]
					 };

	console.log(favoriteRecipe.title);
	console.log('Serves: ' ,favoriteRecipe.serves);
	console.log('Ingredients: ');
	
	for (var i = 0; i < favoriteRecipe.ingredients.length; i++) {
		console.log(favoriteRecipe.ingredients[i]);
	}