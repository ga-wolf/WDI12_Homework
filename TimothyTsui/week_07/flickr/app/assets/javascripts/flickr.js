var currentPage = 1;

var searchFlickr = function (query) {
  console.log('Doing ajax request on page ' + currentPage);
  // prevent future scroll events from firing this function until this one is done
  $(window).off('scroll', checkScrollPos);
  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrUrl, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: query,
    format: 'json',
    page: currentPage
  }).done(function(info) {
    console.log(info);
    displayPhotos(info.photos.photo, info.photos.page, info.photos.pages); // actual photos are buried deep in object
    if (info.photos.page < info.photos.pages){
      $(window).on('scroll', checkScrollPos); // turn on scroll detection only when there are more photos
    }
    currentPage++;
  });
};

// make ajax request once every 4s so if user keeps scrolling to bottom of page
// continuously, it won't fire off dozens of simultaneous ajax requests
var throttledSearchFlickr = _.throttle(searchFlickr, 4000, {trailing: false});

var checkScrollPos = function() {
  var scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());
  if (scrollBottom < 400){
    var query = $('#query').val();
    throttledSearchFlickr( query );
  }
};

var displayPhotos = function (photos, page, pages) {
  var images = '';
  _.each(photos, function(photo){
    var photoURL = generateURL(photo);
    images += '<img src="' + photoURL + '">';
  });
  // i know styling in tags is bad but i cbf-ed adding a css just for this element
  $('#results').append(images + '<p style="background-color: grey; color: white; text-align: right">Page ' + page + ' / ' + pages + '</p>');
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
    currentPage = 1;  // reset page counter to first page on new search
    $('#results').empty();  // clear all previous photos
    var query = $('#query').val();
    searchFlickr( query );
  });

  $(window).on('scroll', checkScrollPos);
});