// Locatie van Jomarka
var huis = new google.maps.LatLng(51.245745, 5.826733);


function initialize()
{
	// Start gegens invoeren van google maps
	var mapProp = 
	{
		center:huis,
		zoom:16,
		mapTypeId:google.maps.MapTypeId.HYBRID
  	};

  	var map = new google.maps.Map(document.getElementById("googleMaps"),mapProp);
  	
  	// Positie van locatie aangeven op de map
  	var marker = new google.maps.Marker(
  	{
  		position:huis,
  	});
  	marker.setMap(map);
 
}

google.maps.event.addDomListener(window, 'load', initialize);