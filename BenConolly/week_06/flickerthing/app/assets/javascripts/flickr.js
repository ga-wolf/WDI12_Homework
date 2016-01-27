var searchFlickr = function ( query ) {

  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON( flickrUrl, {
    method: 'flickr.photos.search',
    api_key: '7a682fd03f75ad178c17509635f70f1a',
    text: query,
    format: 'json',
    page: pageCount
  }).done( function ( info ) {
    displayPhotos( info.photos.photo )
  });
};

var pageCount = 1

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
    '_m.jpg'
  ].join('')
}

var displayPhotos = function ( photos ) {
  var images = ''
  _.each( photos, function ( photo ) {
    var photoURL = generateURL(photo);
    images += '<img src="' + photoURL + '">';
  });
  $('#results').append(images);
};



$( document ).ready( function () {
  $( '#search' ).on( 'submit', function ( e ) {
    e.preventDefault();

    var query = $( '#query' ).val();

    searchFlickr( query );
  });

  $( window ).on( 'scroll', function () {
    var scrollBottom = $(document).height() - ( $(window).scrollTop() + $(window).height() )
    
    var addPage = function () {
      if ( scrollBottom > 300 ) { return; }; // fine tune the amount based on performance
      pageCount += 1
      var query = $( '#query' ).val();
      
      searchFlickr( query );
      console.log(pageCount)
    }

    var throttled = _.throttle(addPage(), 10000, {leading: false} )
    throttled
      //Get rid of old search when new search
      //When you reach last page stop requesting things
  })
})