var img = document.getElementById('kitty');
img.style.position='absolute';
img.style.left = '0px';
var movement = 1;

var watchKittyWalk = function (){
  var windowWidth = window.innerWidth;
  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft + movement;
  img.style.transform = "scaleX(" + movement + ")";
  img.style.left = newLeft + 'px';

  if ( parseInt( img.style.left ) >= windowWidth ) {
    movement = -1
    

  } else if ( parseInt( img.style.left ) <= 0 ) {
    movement = 1;
   
  }
};


var timerId = setInterval(watchKittyWalk, 12.5)

