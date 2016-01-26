tweets = [];
page = 1;


var moveFish = function( fishContainer ) {
  var $fish = $( fishContainer );
  var duration = 15000 + Math.random() * 10000;
  var prop;
  if ( $fish.data("dir") === "left" ) {
    prop = { "left": innerWidth + "px" };
    $fish.find('img').css('transform', 'scaleX(1)');
  } else {
      prop = { "left": "-430px" }; // set the animation end position to be -fishContainer width
      $fish.find('img').css('transform', 'scaleX(-1)');
  }
  $fish.animate( prop, {
    duration: duration,
    easing: 'linear',
    complete: function() {
      $( this ).trigger('click');
    }
  });
};

var randFishSize = function( fishContainer ){
    var randSize = 0.6 + ( Math.random() * 0.4 );
    $( fishContainer ).css('transform', 'scale(' + randSize + ',' + randSize + ')');
    console.log('size: ' + randSize);
};

var randFishPos = function( fishContainer ) {
  var $fishContainer = $( fishContainer );
  // wait until img loaded so we get accurate fishContainer height
  // $fishContainer.find('img').load( function() {
    var fishContainerHeight = $fishContainer.outerHeight(true);
    var windowHeight = innerHeight;
    var maxY = windowHeight - fishContainerHeight;
    var randY = Math.random() * maxY;
    // console.log(windowHeight, fishContainerHeight, maxY, randY);
    $fishContainer.css('top', randY + 'px');
    console.log('y pos ' + randY);
  // });
};

var getNewData = function( asyncFlag ) {
  if ( asyncFlag === undefined ) { asyncFlag = true; }
  var link = '/pages/' + page + '.json';
  return $.ajax({
    url: link,
    dataType: 'json',
    async: asyncFlag
  }).done( function( data ){
    tweets = tweets.concat(data.tweets);
    if ( data.page === data.pages ) {
      page = 1;
    } else {
      page++;
    }
  });
};

$(document).ready(function() {
  // console.log('fishies');
  // setInterval(moveFish, 50);
  var fishTemplate = _.template( $('#fishTemplate').html() );
  var fishies = 2;

  getNewData(false);
// console.log(tweets);
  for ( var i = 0; i < fishies; i++ ){
    var fish = fishTemplate({ tweet_text: tweets.shift().post });
    $('#main').append( fish );
    $fish = $('.fishContainer').last();
    randFishSize( $fish );
    randFishPos( $fish );
    moveFish( $fish );
  }


  $('.fishContainer').on('click', function() {
    console.log('fish finished swimming', this);
    if ( tweets.length <= 2 ) {
      getNewData();
    }
    if ( tweets.length !== 0 ) {
      $( this ).find('.tweet').text( tweets.shift().post );
    }
    randFishSize( this );
    randFishPos( this );

    if ( $( this ).data( "dir" ) === "left" ) {
      $( this ).data( "dir", "right" );
    } else {
      $( this ).data( "dir", "left" );
    }
    moveFish( this );

  });
});