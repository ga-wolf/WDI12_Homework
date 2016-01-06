var ajaxInfo = { inProgress: false, page: 1 };

var searchFlickr = function (query) {

  console.log(query);

  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrUrl, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: query,
    format: 'json',
    page: ajaxInfo.page
  }).done(function(info) {
    console.log(info, ajaxInfo.pages);
    displayPhotos(info.photos.photo); // actual photos are buried deep in object
    if (ajaxInfo.pages === undefined) {
      ajaxInfo.pages = info.photos.pages;
    }

  }).always(function(){
    ajaxInfo.inProgress = false;
    if (ajaxInfo.page < ajaxInfo.pages){
      ajaxInfo.page += 1;
    }
  });
};

var displayPhotos = function (photos) {
  var images = '';
  _.each(photos, function(photo){
    var photoURL = generateURL(photo);
    // console.log(photoURL);
    images += '<img src="' + photoURL + '">';
  });
  $('#results').append(images + '<hr>');
};

var generateURL = function (photo) {
  return [
    'http://farm',
    photo.farm,
    '.static.flickr.com/',
    photo.server,
    '/',
    photo.id,
    '_',
    photo.secret,
    '_q.jpg' // change this for different sizes
  ].join('');
};

$(document).ready(function(){

  $('#search').on('submit', function(e){
    e.preventDefault();
    var query = $('#query').val();

    searchFlickr( query );
    console.log(ajaxInfo.page, ajaxInfo.pages, ajaxInfo.inProgress);
  });


  var checkScrollPos = function() {
    // console.log('checking scroll pos');
    var scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());
    if (scrollBottom > 400) { return; }
    console.log(ajaxInfo.page, ajaxInfo.pages, ajaxInfo.inProgress);
    if (ajaxInfo.page > ajaxInfo.pages) {
      $(window).off('scroll');
    } else if (ajaxInfo.inProgress) {
      console.log('Not doing anything until current ajax is done');
      return;
    } else {
      var query = $('#query').val();
      ajaxInfo.inProgress = true;
      ajax = searchFlickr( query );
    }
  };

  var checkScrollPosThrottle = _.throttle(checkScrollPos, 500);
  $(window).on('scroll', checkScrollPosThrottle);
});