$(document).ready(function () {

  // var posterSearch = function () {
  //   var searchFor = "http://omdbapi.com/?s=" + $('#title').val()
  //   searchFor = searchFor.split(" ").join("+")
  //   console.log(searchFor)
  //   var request = new XMLHttpRequest();
  //   request.open('GET', searchFor);

  //   request.onreadystatechange = function () {
  //     if ( request.readyState !== 4 ) { return }
  //     info = JSON.parse( request.responseText );
  //     console.log(info)
  //     console.log(info.Search.length)
  //     var allPosters = ""
  //     for (var i = 0; i < info.Search.length; i++) {
  //       if (info.Search[i].Poster !== "N/A") {
  //         allPosters += '<img src=' + info.Search[i].Poster + '>'
  //       } else {
  //         allPosters += 'No poster for ' + info.Search[i].Title
  //       }
  //     };
  //     $('#poster').html( allPosters );
  //   };
  //   request.send();
  // }


  // $('#get-info').on('click', function () {
  //   posterSearch()
  // });

  //   $('#title').keypress(function (e) {
  //     if (e.which == 13) {
  //     posterSearch()
  //     }
  //   });

  var search = function (e) {
    e.preventDefault();

    var query = $('#title').val();

    $.ajax('http://omdbapi.com/?t=' + query).done( function (info){
      var $img = $('<img />');
      $img.attr('src', info['Poster']);
      $img.prependTo('#poster');
    });
  }

  $('form').on('submit', search);

});





// info = JSON.parse( request.responseText );