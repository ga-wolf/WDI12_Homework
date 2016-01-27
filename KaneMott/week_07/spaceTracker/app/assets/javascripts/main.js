var marker;
var map;
var issLatitude;
var issLongitude;
var spacePeople;

// ------------------------------------------------------------------------------------
// MAPS AND MARKER BITS
// ------------------------------------------------------------------------------------

// Initial map generation

function initMap(issLatitude, issLongitude) {
	map = new google.maps.Map(document.getElementById('map'),{
      center: {lat: issLatitude, lng: issLongitude},
      zoom: 3,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeId: google.maps.MapTypeId.TERRAIN
   })

}

// ISS marker image source/params

var image = {
    url: '/assets/issSmallBlack.png',
    // This marker is 20px sq
    size: new google.maps.Size(20, 20),

    // The anchor for this image is the center (dia/2)
    anchor: new google.maps.Point(10, 10)
  };

// Places marker on map

var placeISSLogo = function(issLatitude, issLongitude){
	marker = new google.maps.Marker({
    position: new google.maps.LatLng(issLatitude, issLongitude),
    map: map,
    icon: image
	})
}

// modifies map center and marker position without altering other settings or re-rendering

var updateMap = function(issLongitude,issLatitude){
	map.panTo({lat: issLatitude, lng: issLongitude})
}

var updateMarker = function(issLongitude,issLatitude){
	marker.setPosition({lat: issLatitude, lng: issLongitude})
}

// Updates lat/long on interval

var updateCoords = function(){
	setInterval(function(){
	
	$.ajax({ url: 'http://api.open-notify.org/iss-now', dataType: "jsonp" }).done(function (data) {
		issLatitude = data.iss_position.latitude;
		issLongitude = data.iss_position.longitude

		updateMap(issLongitude,issLatitude);
		updateMarker(issLongitude,issLatitude);

		$('.issCoords').html('Current ISS longitude:<br> '+issLongitude+'. <br><br> Current latitude:<br>'+issLatitude+'.')
	})

	 }, 100);
}

// ------------------------------------------------------------------------------------
// PEOPLE IN SPACE
// ------------------------------------------------------------------------------------


// Populates the information div with the number of people in space and their full names.
var genInfo = function(spacePeople){
	var astronauts = [];
	$('.info h3').text('There are '+spacePeople.people.length+' in space right now, they are:')

	for (var i = 0; i < spacePeople.people.length; i++){
		astronauts.push(spacePeople.people[i].name)	
	}

	$('.info p').text((astronauts.join(", "))+".");

};