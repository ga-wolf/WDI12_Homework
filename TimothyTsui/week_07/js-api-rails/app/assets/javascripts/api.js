$(document).ready(function() {
  var map = new Maplace({
    map_div: '#map',
    show_markers: false,
    locations: [{
        lat: 0,
        lon: -180,
        zoom: 1
    }]
  }).Load();

  var location = {
    lat: null,
    lon: null
  };

  $('form').on('submit', function(e) {
    $('#results').text('');
    console.log('start ajax');
    e.preventDefault();
    var query_params = {
      client_id: '2J1PW15P32OETU2JO1ERNC5JDFKDUPVG0DCKQZ1PW4ERL5ZE',
      client_secret: 'YUN4GNL5IPDHHT5VDPSCKVBBTEHPAWCQPSXVNHL1CYGVMJ0U',
      v: '20150105',
      limit: 10,
      intent: 'browse',
      radius: 5000
    };
    var location = $('#location').val().trim();
    var latlong_pattern = /-?\d+(\.\d+)?,-?\d+(\.\d+)?/;
    var map_locations = [];
    if (latlong_pattern.test(location)) {
      query_params['ll'] = location;
      var loc = location.split(',');
      map_locations.push({
          lat: loc[0],
          lon: loc[1],
          zoom: 14,
          icon: 'http://maps.google.com/mapfiles/kml/pal3/icon40.png'
      });
    } else {
      query_params['near'] = location;
    }
    query_params['query'] = $('#query').val();

    $.ajax('https://api.foursquare.com/v2/venues/search', {
      data: query_params
    }).done(function(data){
      var venues = data.response.venues;
      $table = $('<table>');
      $table.append(
        $('<tr>').append([
          $('<th>').text('Name'),
          $('<th>').text('Address'),
          $('<th>').text('City'),
          $('<th>').text('Distance (m)')
        ])
      );

      venues.forEach(function(venue){
        var address = venue.location.address || 'Not available';
        var city = venue.location.city || 'Not available';
        var distance = venue.location.distance || 'Not available';
        $table.append(
          $('<tr>').append([
            $('<td>').text(venue.name),
            $('<td>').text(address),
            $('<td>').text(city),
            $('<td>').text(distance)
          ])
        );
        map_locations.push({
          lat: venue.location.lat,
          lon: venue.location.lng,
          title: venue.name,
          html: '<h3>Content B1</h3>',
          icon: 'http://maps.google.com/mapfiles/markerB.png',
          show_infowindow: false
        });
        map.AddLocations(map_locations, true);
      });
      $('#results').append($table);
    });
  });

  if (navigator.geolocation) {
    $('#my_location').show();

    $('#my_location').on('click', function(e){
      e.preventDefault();
      navigator.geolocation.getCurrentPosition(function(position) {
        location.lat = position.coords.latitude;
        location.lon = position.coords.longitude;
        $('#location').val([ location.lat, location.lon ].join(','));

        var loc = {
          lat: location.lat,
          lon: location.lon,
          zoom: 14,
          icon: 'http://maps.google.com/mapfiles/kml/pal3/icon40.png'
        };
        map.o.show_markers = true;
        map.SetLocations([loc], true);
      });
    });
  }



});
