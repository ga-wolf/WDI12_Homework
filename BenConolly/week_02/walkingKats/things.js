var cat = document.getElementById('catawalk');
var danceKat = document.getElementById('danceKat');
var danceKat2 = document.getElementById('danceKat2');
var apertureLogo = document.getElementById('apertureLogo');
apertureLogo.style.top='-500px'

cat.style.position = 'absolute';
cat.style.left = '-300px';

var delta = 5
var danceTimer = 0

var triumph = new Audio('stillAlive.m4a');
var selfie = new Audio('takeASelfie.m4a')




var walkAround = function() {
  var oldLeft = parseInt(cat.style.left);
  var newLeft = oldLeft + delta;
  cat.style.left = newLeft + 'px';
  if ( ( window.innerWidth === newLeft ) && (delta >= 0 )) {
  	danceTimer = 0;
  	clearInterval(striding);
  	cat.className="hidden";
  	danceKat.className="blank";
  	danceKat2.className="blank";
    selfie.play()
	grooving = setInterval(danceParty, 1000)
	  }
  if ( newLeft >= ( theWidth + 10 ) ) {
  	delta = -5;
  	cat.className="flipped"
  } else if ( newLeft <= -300) {
  	// delta = 5;
  	// cat.className="blank"
    clearInterval(striding)
    triumph.play();
    portalLogo = setInterval(logoDown, 400);
    apertureLogo.className="blank"
  }
};

var striding = setInterval(walkAround, 20);
var grooving = setInterval(danceParty, 500);
var portalLogo = null;


var danceParty = function () {
	danceTimer += 1;
	if ( danceTimer >= 8) {
	clearInterval(grooving);
	danceKat.className="hidden";
	danceKat2.className="hidden";
  selfie.pause();
	cat.className="blank";
	striding = setInterval(walkAround, 20);
	}
}

var logoDown = function() {
  var oldTop = parseInt(apertureLogo.style.top);
  // console.log(oldTop)
  var newTop = oldTop + 10;
  // console.log(newTop)
  apertureLogo.style.top = newTop + 'px';
  // console.log(apertureLogo.style.top)
  if (parseInt(apertureLogo.style.top) >=140 ) {
    clearInterval(portalLogo)
  }
};