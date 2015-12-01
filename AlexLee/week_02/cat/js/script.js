/*
Exercises: Animation
The Cat Walk

Who needs Milan when you have JavaScript?

Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>Cat Walk</title>
 </head>
 <body>

  <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">

 </body>
</html>
Create a new Javascript file and link to it with a script tag at the bottom.
Create a variable to store a reference to the img.
Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
*/

//Spirit Bomb
//http://www.picgifs.com/anime/dragon-ball-z/goku/anime-goku-161573.gif

//Kamehameha
//http://gotrunko.free.fr/GIF%20ANIME/72.gif

//Explosion
//http://rs651.pbsrc.com/albums/uu236/416o/explosion.gif~c200

var upTimer;
var downTimer;
var leftTimer;
var directionTimer;

//var cat = document.getElementById("cat");

var leftIncrement = 10;
var topIncrement = 10;
var bottomIncrement = 10;

var turned = false;

var theme = new Audio("http://www.webfoottroop.com/media/Mortal_Combat_Techno_319.mp3");

var audio = [
	new Audio("http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Mayhem/Explosives/WTF_boom-i_didnt_-8999/WTF_boom-i_didnt_-8999_hifi.mp3"),
	new Audio("kameha.mp3")
];

var randomAudio = 0;

var body = document.getElementsByTagName("body")[0];

var cat;
var kameha;

var spiritBomb = document.createElement("img");
spiritBomb.src = "http://www.picgifs.com/anime/dragon-ball-z/goku/anime-goku-161573.gif";
spiritBomb.style.position = "absolute";

var playAudio = function(audio, time) {
	audio.currentTime = time;
	audio.play();
}

var stopAudio = function(audio, time) {
	audio.pause();
	audio.currentTime = time;
}

var randomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var createKameha = function(top, left, width) {
	kameha = document.createElement("img");
	kameha.src = "http://gotrunko.free.fr/GIF%20ANIME/72.gif";
	kameha.style.position = "absolute";
	kameha.style.top = top;
	
	if (turned) {
		kameha.style.left = left - kameha.width + 50 + "px";
		kameha.style.transform = "scaleX(1)";
	}
	else {
		kameha.style.left = left + width - 50 + "px";
		kameha.style.transform = "scaleX(-1)";
	}

	
	body.appendChild(kameha);
}

var createCat = function(top, left) {
	cat = document.createElement("img");
	cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
	cat.width = "100";
	cat.style.position = "absolute";
	cat.style.left = left + "px";
	cat.style.top = top + "px";
	cat.style.zIndex = "1";

	if (turned) {
		cat.style.transform = "scaleX(-1)";	
	}
	else {
		cat.style.transform = "scaleX(1)";
	}

	body.appendChild(cat);
}

var catMove = function() {
	cat.style.left = parseInt(cat.style.left) + leftIncrement + "px";

	if (parseInt(cat.style.left) >= (innerWidth - cat.width)) {
		cat.style.transform = "scaleX(-1)";
		leftIncrement = -10;
		turned = true;
	}
	else if (parseInt(cat.style.left) <= leftIncrement) {
		cat.style.transform = "scaleX(1)";
		leftIncrement = 10;
		turned = false;
	}
}

var catMoveTop = function() {
	cat.style.top = parseInt(cat.style.top) - topIncrement + "px";
	if (parseInt(cat.style.top) <= 0 ) {
		topIncrement = -10;
	}
	else if (parseInt(cat.style.top) >= innerHeight - cat.height) {
		topIncrement = 10;
	}

}

var catMoveBottom = function() {
	cat.style.top = parseInt(cat.style.top) + bottomIncrement + "px";
	if (parseInt(cat.style.top) >= (innerHeight - cat.height) ) {
		bottomIncrement = -10;
	}
	else if (parseInt(cat.style.top) <= 0) {
		bottomIncrement = 10;
	}

}

var changeDirection = function() {
	var direction = Math.round(Math.random());
	clearInterval(upTimer);
	clearInterval(downTimer);

	if (direction === 1) {
		
		upTimer = setInterval(catMoveTop, 100);
	}
	else if (direction === 0) {
		
		downTimer = setInterval(catMoveBottom, 100);
	}
}

var moveCat = function() {
	leftTimer = setInterval(catMove, 100);
	directionTimer = setInterval(changeDirection, 1500);
}

var replaceCat = function() {
	createCat( randomInt(120, innerHeight - 120), randomInt(100, innerWidth - 100) );
	setTimeout(moveCat, 100);
}

var removeExplosion = function() {
	body.removeChild(cat);
	replaceCat();
}

var explodeCat = function() {
	cat.src = "http://rs651.pbsrc.com/albums/uu236/416o/explosion.gif~c200";
	body.removeChild(kameha);
}

var putGoku = function() {
	if (randomAudio === 0 ) {
		stopAudio(audio[0], 1);
		
	}
	else {
		stopAudio(audio[1], 11);
	}

	createKameha(cat.style.top, parseInt(cat.style.left), cat.width);

	randomAudio = randomInt(0, 1);
	if (randomAudio === 0) {
		playAudio(audio[0], 1);	
	}
	else {
		playAudio(audio[1], 11);
	}

	clearInterval(leftTimer);
	clearInterval(upTimer);
	clearInterval(downTimer);
	clearInterval(directionTimer);

	setTimeout(explodeCat, 600);
	setTimeout(removeExplosion, 1200);
}

var runExplosions = function() {
	setTimeout(putGoku, 1000);
}

theme.play();
createCat(200, 0);
moveCat();
setInterval(runExplosions, 3000);