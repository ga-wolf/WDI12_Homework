$(document).ready( function () {

  var searchRain = function (e) {
    e.preventDefault();

    var query = $('#city').val();

    $.ajax('http://api.openweathermap.org/data/2.5/weather?q=' + query + '&APPID=fe516443e549ec653bda01e24e45f947').done(function (info) {
      if ( info.rain !== undefined ) {
        $('#response').append("<p>It is raining in " + query + "</p>")
      } else {
        $('#response').append("<p>It is not raining in " + query + "</p>")
      }
      $('#response').append('testing')
    })
  }

  $('#raining').on('submit', searchRain);

})