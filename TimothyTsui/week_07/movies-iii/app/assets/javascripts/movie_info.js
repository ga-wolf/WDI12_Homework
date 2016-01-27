$(document).ready(function() {
  var moviesCount = 0;
  var getMovieInfo = function(e) {
    e.preventDefault();
    var search = $('#search').val();

    $.ajax('http://www.omdbapi.com', {
      data: {
        t: search,
        tomatoes: true
      }
    }).done(function(info) {
      $img = $('<img/>');
      $img.attr('src', info['Poster']);
      $img.prependTo('#result');
    });
    // var xhr = new XMLHttpRequest();
    // xhr.ontimeout = function() {
    //   $('#result').text("Server timed out");
    // };
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState !== 4) { return; }
    //   if (xhr.status === 200){
    //     var updatePanel = function(panel) {
    //       var $title = panel.find('a');
    //       var $poster = panel.find('img');
    //       var $plot = panel.find('.plot');
    //       var $genre = panel.find('.genre');
    //       var $actors = panel.find('.actors');
    //       var $year = panel.find('.year');
    //       var $rated = panel.find('.rated');
    //       var $runtime = panel.find('.runtime');
    //       $title.text(movie['Title']);
    //       $poster.attr('src', movie['Poster']);
    //       $plot.text(movie['Plot']);
    //       $genre.text(movie['Genre']);
    //       $actors.text(movie['Actors']);
    //       $year.text(movie['Year']);
    //       $rated.text(movie['Rated']);
    //       $runtime.text(movie['Runtime'] + ' minutes');
    //     };
    //     var movie = JSON.parse(xhr.responseText);
    //     console.log(movie);
    //     var $panel = null;
    //     if (moviesCount === 0) {
    //       $panel = $('.movie-panel');
    //       updatePanel($panel);
    //     } else {
    //       $('a').attr('aria-expanded', 'false');
    //       $('.panel-collapse').attr('aria-expanded', 'false');
    //       $('.panel-collapse').removeClass('in');
    //       $newPanel = $('.movie-panel').clone();
    //       $newPanel.find('a').attr('href', 'movie' + moviesCount).attr('aria-expanded', 'true');
    //       $newPanel.find('.panel-collapse').attr('id', 'movie' + moviesCount).addClass('in').attr('aria-expanded', 'true');
    //       $lastPanel = $('.movie-panel').first();
    //       $collapse = $lastPanel.find('.panel-collapse');
    //       updatePanel($newPanel);
    //       $('#accordion').prepend($newPanel);
    //     }
    //     moviesCount++;
    //     $('#accordion').show();
    //   } else {
    //     $('#result').text("OMDB response error: " + xhr.status + ' ' + xhr.statusText);
    //   }
    // };
    // xhr.timeout = 2000;
    // xhr.open('GET', 'http://www.omdbapi.com?t=' + search);
    // xhr.send();
  };

  $('#get-info').on('click', getMovieInfo);
  $('#search').on('keypress', function(e){
    if (e.which === 13) {
      getMovieInfo(e);
    }
  });
});