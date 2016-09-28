var isLat = 32.715;
var isLng = -117.164;

var map;

// Making the map 
function initMap() {
        // Create a map object and specify the DOM element for display.
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: isLat, lng: isLng},
          scrollwheel: true,
          zoom: 11
});   	
        // makes the markers!!!
		$.getJSON("topspots.json", function(things){
			$.each(things.topspots, function(index, items){
        		var marker = new google.maps.Marker({
      			position: {
        			lat: items.location[0],
        			lng: items.location[1]
      			},
      		map: map
    	});
		marker.setMap(map);
});
});
}

// 0_0 it works.... 
$.getJSON("topspots.json", function(stuff){ // Grab the json file
	$.each(stuff.topspots, function(index, items) { // sort through the topspots
		$('table').append($('<tr><td>' + items.name // append the name
			+ '</td><td>'+ items.description // append the description
			+ '</td><td><a href=http://www.google.com/maps/place/'+ items.location[0] 
			+ ',' + items.location[1] // append the link with the button
			+'><button type="button" class="btn btn-info" id='+ index // give each button an id number
			+'>Location</button></a></td></tr>'));
	});
});
