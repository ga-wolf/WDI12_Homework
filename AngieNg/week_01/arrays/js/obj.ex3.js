/*
The Movie Database

It's like IMDB, but much much smaller!

Create an object to store the following information about 
your favorite movie: title (a string), duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: 
"Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

*/

var movies = [
				{
					title : "Pitch Perfect",
			     	stars: ["Anna Kendricks", "Rebel Wilson" , "Hailee Steinfeld"],
			     	duration: 115
			  	},
			  	{
			  		title: "Cinderella",
			  		stars: ["Lily James", "Cate Blanchett", "Richard Madden"],
			  		duration: 105
			  	}	
			 ];

var movieInfo = function () {
	for (var i = 0 ; i < movies.length; i++) {
	//	console.log(movies[i].title + " lasts for " + movies[i].duration + " minutes. Stars: " + movies[i].stars.join(', ')  + ".");

	//Alternative way 
	var info = [movies[i].title, 'lasts for', movies[i].duration + '. ', 'Stars:', movies[i].stars.join(', '), '.'].join(' ');
	console.log(info);
	}
}

movieInfo();