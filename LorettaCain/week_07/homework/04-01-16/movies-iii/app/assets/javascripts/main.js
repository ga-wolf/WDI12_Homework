$(document).ready(function(){
  $('#get-info').on('click', function(){

    var request = new XMLHttpRequest();
    request.open('GET', 'http://omdbapi.com/?t='+$('input').val());
    // request.open('GET', 'http://omdbapi.com/?t=jaws')

    request.onreadystatechange = function(){
      if (request.readyState !== 4) {
        return;
      }
      var info = JSON.parse(request.responseText);
      var poster = info['Poster']

      // request.responseText is now available
      var img = $('<img id="dynamic">');
      img.attr("src", poster );
      img.appendTo('#result');
 
    }

    request.send();

  });
});

// var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
// img.attr('src', responseObject.imgurl);
// img.appendTo('#imagediv');

