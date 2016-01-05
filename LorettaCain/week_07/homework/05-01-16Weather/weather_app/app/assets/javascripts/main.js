var weatherInfo;

$(document).ready(function(){

  var search = function(e){

    e.preventDefault();

      $.ajax('http://api.openweathermap.org/data/2.5/weather?q='+$('#search').val()+'&units=metric&APPID=5171b6581aa35ee6ecaad16fbeb9dd39').done(function(data){

        weatherInfo = data;

        var cityName = $('<p>'+weatherInfo.name+", "+weatherInfo.sys.country+'<p>');
        var temperature = $('<p>'+weatherInfo.main.temp+' ℃ </p>')
        var description = $('<p>'+weatherInfo.weather[0].description+'</p>');
        var shortDescription = $(weatherInfo.weather[0].main)

        cityName.appendTo('#result');
        description.appendTo('#result');
        temperature.appendTo('#result');

      });

  }

  $('form').on('submit', search);

});



