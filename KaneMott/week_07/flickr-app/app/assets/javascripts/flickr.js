// ---------------------------------------------------------------
  //  2. PERMISSIONS AND SERVER QUERY
  // ---------------------------------------------------------------

  // This is the beginning of our search, this is what gets us our data object to work with,
  // Joel's API key is the one provided here, then we have the .done() on the end to handle the server response data.

var currentPage;
var totalPages;

var searchFlickr = function (query) {

  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrUrl, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: query,
    format: 'json',
    page: currentPage
  }).done(function (info) {

// This is our call to stage 3 - displaying images on the screen, our photos are buried deep in the returned object.
  // Object (info)
    // Key (photos)
      // Value (photo)

    displayPhotos(info.photos.photo);
    currentPage = info.photos.page;
    totalPages = info.photos.pages;
  });

};

// ---------------------------------------------------------------
  //  4 GENERATE OUR IMAGE HTML
  // ---------------------------------------------------------------

  // This is a horrible string concatination for our image URL.
  // We've split it into an array for readability, then call
  // .join() at the end to make it into a workable string.

var generateURL = function (photo) {
  return [,
    'http://farm',
    photo.farm,
    '.static.flickr.com/',
    photo.server,
    '/',
    photo.id,
    '_',
    photo.secret,
    '_q.jpg' // This can be modified to provide different image sizes etc.
  ].join('');
};

// ---------------------------------------------------------------
  // 3. DISPLAY OUR PHOTOS
  // ---------------------------------------------------------------

  // I have greyed out the old way we might have added these images on to the page with jquery.
  // We are not doing it this way this time because of how many results we are getting and how much we are adding.

  // ---------------------------------------------------------------

    // var $img = $('<img>'.attr('src', photoURL));
    // $img.appendTo('#results');

  // ---------------------------------------------------------------

  // The old way says:

  // GET me a URL
  //  put URL in <img src>
  //    put <img src = URL > in <#results>
  //  }
  // }

  // Repeat until all are appended.
  // This is CPU intensive and eats phone batteries etc quickly.

  // Instead we take all those <img src = URL >, 
  //  add them to a single big string and 
  //    append it once in one big batch.

var displayPhotos = function(photos){

  var images = '';

  _.each(photos, function(photo){

// SEE STEP 4 FOR THIS FUNCTION

    var photoURL = generateURL(photo);

    images += '<a href= "'+"https://www.flickr.com/photos/"+photo.owner+"/"+photo.id+'"><img src="'+photoURL+'"></a>';

  })
  $('#results').append(images);
}

// ---------------------------------------------------------------
  // 5. INFINITE SCROLL FUNCTION
  // ---------------------------------------------------------------
  
  // This triggers a LOT, it triggers virtually on every pixel when you scroll down, so we do not want to call it
  // unless we are near the bottom of the page, then we will want to be able to fire the command to make more images.

var throttled = _.throttle(function(){
  updatePage();
  console.log("Throttled " + currentPage + " " + $query);

    }, 1000, {trailing: false});

$(window).on("scroll", function(){


	var scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());

// -
  // This says: if we're MORE than 400px ignore this code (return).
  // We will need to fine tune this value a little bit but this is the basis of our infinite scroll trigger.

  if (scrollBottom > 400){ return } else { throttled(); } 

// -
  // we want to update the page value when this triggers so it isn't generating the same images, 
  // we also only want it to fire ONCE at the bottom of the page.
  // Joel has suggested possibly underscore throttle or debounce - 
  // but if we find this confusing we can do it with variables.

});

// We also want to clear old results on new search, avoid duplicating images.
// page number in pages

// ---------------------------------------------------------------
  // 1. SEARCH FUNCTION
  // ---------------------------------------------------------------


  // Our search is in a form, we call preventDefault() to prevent it actually making 
  //a submit request.
var $query

$(document).ready(function () {

  $('#search').on('submit', function (e) {
    e.preventDefault();

    $('#results').empty();
    currentPage = 1;

    var query = $('#query').val();
    $query = query;

    searchFlickr( query );
  });

}); 

// ----------------------

var updatePage = function(info){
  if ( currentPage < totalPages) {
    searchFlickr( $query );
    currentPage += 1;
  };
};


// ---------------------------------------------------------------
  // HOMEWORK AND IMPORTANT NOTES
  // ---------------------------------------------------------------


  // To recap: 
  // STEP 1: The user clicks a button which calls searchFlickr( query ) - query is the value of our search bar.

  // STEP 2: searchFlickr makes a request for data from the server and returns an object, then calls 
  // displayPhotos - passing it some of that data - (object.photos.photo);

 // STEP 3: displayPhotos goes through all the photo data handed to it, uses generateURL to create the HTML from the flickr API.

 // STEP 4: generateURL concatinates our HTML/Variables into a useable string and passes it back to displayPhotos.
 // displayPhotos renders this URL as an IMG SRC to our page.

  // ---------------------------------------------------------------
  // HOMEWORK
  // ---------------------------------------------------------------

  // STEP 5:

  // Our goal tonight is to complete step 5. 
  // Step 5 will be an infinite stroll function, when the user gets close to the bottom of the page, 
  // we want to render more images to the page.

  // Bonus:
  // Clear all images if a new search is submitted
  // Avoid duplicate images. If we reach the end, stop rendering.
