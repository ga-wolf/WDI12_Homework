/*
Create a new Javascript file and link to it with a script tag at the bottom.
Create a variable to store a reference to the img.
Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
*/

var cat = document.getElementsByTagName('img')[0];
var oldImage = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
var newImage = "https://media.giphy.com/media/M5T9ySMRsE98c/giphy.gif";
var delta = 10;
cat.style.left = "0px";    
var fromLtR= true;
var walkLeft;        
var walkRight;

var dancingMusic = new Audio("https://www.youtube.com/audiolibrary_download?vid=38625e05962d91d3");
dancingMusic.muted = true;
dancingMusic.play();   

//Cat walk from Left to Right
var catWalk = function () {

	newStyleLeft = parseInt(cat.style.left) + delta;
	cat.style.left = newStyleLeft + 'px'; 

	//Check the actual screen size after removed image size
	var actualScreenSize = window.innerWidth - cat.width;


	if (newStyleLeft > (actualScreenSize / 2) && newStyleLeft < (actualScreenSize / 2) + 8) {	// 8 : matching the interval range

	    fromLtR = true;
	    clearInterval(walkRight);
	    danceNow();
	}

	//Conditionally if it walks till the end of the screen, then it walking back and forth
	if (newStyleLeft >= actualScreenSize) {		//Time to walk back to left
		clearInterval(walkRight);
		cat.className = "";
		cat.className = "turnLeft";
		walkLeft = setInterval(catWalkReverse, 50);

	} else {
		cat.style.left = newStyleLeft + 'px';
	}	 
}

var danceNow = function() {
	cat.src = newImage;
	cat.style.width = "200px";
	cat.style.height = "250px";
	dancingMusic.muted = false;
  	danceCat = setInterval(danceTimer, 10000); 		//Dancing for 10 seconds
}

var danceTimer = function() {

//Facing which way to go after danced 
  if (fromLtR) { 
      clearInterval(danceCat);
      dancingMusic.muted = true;
      cat.src = oldImage;
      walkRight = setInterval(catWalk, 50);
    } else {
      clearInterval(danceCat);
      dancingMusic.muted = true;
      cat.src = oldImage;
      walkLeft = setInterval(catWalkReverse, 50);
    }
}

// Cat walk from Right to Left
var catWalkReverse = function () {
	newStyleLeft = parseInt(cat.style.left) - delta;
	cat.style.left = newStyleLeft + 'px'; 

	//Check the actual screen size after removed image size
	var actualScreenSize = window.innerWidth - cat.width;

	if (newStyleLeft < (actualScreenSize / 2) && newStyleLeft > (actualScreenSize / 2) - 8) {	// 8 : matching the interval range
	    fromLtR = false;
	    clearInterval(walkLeft);
	    danceNow();
	}

	if (newStyleLeft <= 0) {		
		clearInterval(walkLeft);
		cat.className = "";
		cat.className = "turnRight";
		walkRight = setInterval(catWalk, 100);

	} else {
		cat.style.left = newStyleLeft + 'px';
	}	 
}

// Start catWalk() now
walkRight = setInterval(catWalk, 50);


