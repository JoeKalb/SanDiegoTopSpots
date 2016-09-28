// 0_0 it works.... 
$.getJSON("topspots.json", function(stuff){
	$.each(stuff.topspots, function(index, items) {
		$('table').append($('<tr><td>' + stuff.topspots[index].name 
			+ '</td><td>'+ stuff.topspots[index].description 
			+ '</td><td><a href=http://www.google.com/maps/place/'+ stuff.topspots[index].location[0]
			+ ',' + stuff.topspots[index].location[1]
			+'><button id='+ index 
			+'>Open in Google Maps</button></a></td></tr>'));
	
	});
});