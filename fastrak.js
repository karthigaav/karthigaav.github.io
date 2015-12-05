
var map;
var ctfastrak;
var trips;
var validBusArray = ['711','712','1432','1434','1435','1437','1438','1441','1443','1444','1447','1450','1455','1457','1458','1463','1464','1465','1467','1472','1473','1476','A73','A77','A82']
var busArray = [];
var alerts;
var userLat;
var userLng;
var destinationLat; 
var destinationLng; 
var isInRange;
var polygonCoords;
var fastrakPolygon;
var busStops = [
                {
                    "stop_id": 7984,
                    "stop_name": "Fenn Rd and CTFastrak",
                    "longitude": -72.756902,
                    "latitude": 41.696115
                },
                {
                    "stop_id": 12283,
                    "stop_name": "CTFastrak and East Main St Station",
                    "longitude": -72.766231,
                    "latitude": 41.671482
                },
                {
                    "stop_id": 12284,
                    "stop_name": "CTFastrak and East St Station",
                    "longitude": -72.758581,
                    "latitude": 41.687564
                },
                {
                    "stop_id": 12285,
                    "stop_name": "CTFastrak and Cedar St Station",
                    "longitude": -72.753671,
                    "latitude": 41.695952
                },
                {
                    "stop_id": 12286,
                    "stop_name": "CTFastrak and Newington Junction Station",
                    "longitude": -72.736253,
                    "latitude": 41.716183
                },
                {
                    "stop_id": 12287,
                    "stop_name": "CTFastrask and Elmwood Station",
                    "longitude": -72.724792,
                    "latitude": 41.730473
                },
                {
                    "stop_id": 12288,
                    "stop_name": "CTFastrak and Flatbush Ave Station",
                    "longitude": -72.71648,
                    "latitude": 41.741709
                },
                {
                    "stop_id": 12289,
                    "stop_name": "New Park Ave and Kane St Station",
                    "longitude": -72.708981,
                    "latitude": 41.750416
                },
                {
                    "stop_id": 12290,
                    "stop_name": "CTFastrak and Park St Station",
                    "longitude": -72.703676,
                    "latitude": 41.757096
                },
                {
                    "stop_id": 12291,
                    "stop_name": "CT Fastrak and Sigourney St Station",
                    "longitude": -72.694601,
                    "latitude": 41.764326
                },
                {
                    "stop_id": 12295,
                    "stop_name": "CT Fastrak and Sigourney St Station",
                    "longitude": -72.695062,
                    "latitude": 41.764211
                },
                {
                    "stop_id": 12296,
                    "stop_name": "CTFastrak and Parkville Station",
                    "longitude": -72.703906,
                    "latitude": 41.757087
                },
                {
                    "stop_id": 12297,
                    "stop_name": "CTFastrak and Kane St Station",
                    "longitude": -72.709077,
                    "latitude": 41.750461
                },
                {
                    "stop_id": 12298,
                    "stop_name": "CTFastrak and Flatbush Ave Station",
                    "longitude": -72.716347,
                    "latitude": 41.741191
                },
                {
                    "stop_id": 12299,
                    "stop_name": "CTFastrak and Elmwood Station",
                    "longitude": -72.724864,
                    "latitude": 41.730464
                },
                {
                    "stop_id": 12300,
                    "stop_name": "CTFastrak and Newington Junction Station",
                    "longitude": -72.736314,
                    "latitude": 41.716263
                },
                {
                    "stop_id": 12302,
                    "stop_name": "CTFastrak and East St Station",
                    "longitude": -72.758702,
                    "latitude": 41.687582
                },
                {
                    "stop_id": 12305,
                    "stop_name": "CTFastrak and New Britain Station G",
                    "longitude": -72.77913,
                    "latitude": 41.668404
                },
                {
                    "stop_id": 12320,
                    "stop_name": "Fenn Rd and Opp CTFastrak",
                    "longitude": -72.757302,
                    "latitude": 41.695338
                },
                {
                    "stop_id": 12383,
                    "stop_name": "CTFastrak and Sigourant St Lot",
                    "longitude": -72.694831,
                    "latitude": 41.76472
                },
                {
                    "stop_id": 12384,
                    "stop_name": "CT Fastrak and Sigourney Street Lot",
                    "longitude": -72.695134,
                    "latitude": 41.764434
                },
                {
                    "stop_id": 12385,
                    "stop_name": "Temple St and Grove St",
                    "longitude": -72.923996,
                    "latitude": 41.310826
                },
                {
                    "stop_id": 12441,
                    "stop_name": "New Park Ave and Opp CTFastrak",
                    "longitude": -72.724863,
                    "latitude": 41.731689
                },
                {
                    "stop_id": 12442,
                    "stop_name": "New Park Ave and CTFastrak",
                    "longitude": -72.724645,
                    "latitude": 41.731617
                },
                {
                    "stop_id": 12482,
                    "stop_name": "CTFastrak and Cedar St Lot",
                    "longitude": -72.753998,
                    "latitude": 41.69614
                },
                {
                    "stop_id": 12483,
                    "stop_name": "CTFastrak and Cedar St Lot",
                    "longitude": -72.754554,
                    "latitude": 41.696301
                },
                {
                    "stop_id": 12562,
                    "stop_name": "CTFastrak and New Britain Station L",
                    "longitude": -72.78034,
                    "latitude": 41.668673
                },
                {
                    "stop_id": 12563,
                    "stop_name": "CTFastrak and New Britain Station B",
                    "longitude": -72.779529,
                    "latitude": 41.668753
                },
                {
                    "stop_id": 12570,
                    "stop_name": "New Britain Ave and Hooker St",
                    "longitude": -72.85622,
                    "latitude": 41.675041
                },
                {
                    "stop_id": 12586,
                    "stop_name": "CTFastrak and New Britain Bay R Express",
                    "longitude": -72.778852,
                    "latitude": 41.668297
                },
                {
                    "stop_id": 12587,
                    "stop_name": "CTFastrak and New Britain Station S Express",
                    "longitude": -72.780049,
                    "latitude": 41.668923
                },
                {
                    "stop_id": 12589,
                    "stop_name": "CTFastrak and New Britain Station J",
                    "longitude": -72.779735,
                    "latitude": 41.668539
                },
                {
                    "stop_id": 12618,
                    "stop_name": "CTFastrak and New Britain Station D",
                    "longitude": -72.778948,
                    "latitude": 41.668619
                }
            ];  

  
  

function initMap() {
  //Create map object
  map = new google.maps.Map(document.getElementById('map'),
							{center: {lat:41.72,lng:-72.74},
							 zoom: 12
							});
							
var centerControlDiv = document.createElement('div');
var centerControl = new CenterControl(centerControlDiv, map);
centerControlDiv.index = 1;
map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

var destinationControlDiv = document.createElement('div');
var destinationControl = new DestinationControl(destinationControlDiv, map);
destinationControlDiv.index = 1;
map.controls[google.maps.ControlPosition.TOP_CENTER].push(destinationControlDiv);

var stopControlDiv = document.createElement('div');
var stopControl = new StopControl(stopControlDiv, map);
stopControlDiv.index = 1;
map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(stopControlDiv);

var routeControlDiv = document.createElement('div');
var routeControl = new RouteControl(routeControlDiv, map);
routeControlDiv.index = 1;
map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(routeControlDiv);
				
  //Define CTFastrak boundary
  polygonCoords = [
                    {lat: 41.806523, lng: -72.751854},
                    {lat: 41.806523, lng: -72.586373},
                    {lat: 41.726378, lng: -72.590493},
                    {lat: 41.616617, lng: -72.754944},
                    {lat: 41.645357, lng: -72.869614},
                    {lat: 41.750716, lng: -72.853821},
                    {lat: 41.806523, lng: -72.751854}
                ];
  fastrakPolygon = new google.maps.Polygon({paths: polygonCoords});
  google.maps.event.addListener(map, 'click', function (event) {console.log(google.maps.geometry.poly.containsLocation(event.latLng, fastrakPolygon));});
							
   //Load CTFastrak routes, parking, and multi-use trail access points
   ctfastrak = new google.maps.KmlLayer({map: map,
										url: 'https://kvn-dly.github.io/CTfastrak%20-%20%20Rapid%20Transit%20Service.kmz',
										preserveViewport: true,
										suppressInfoWindows: true
									   }); 
  
  //Display CTFastrak KML attributes in 'content-window' div
  ctfastrak.addListener('click', function(kmlEvent){
									var text = kmlEvent.featureData.name + '<br>' + kmlEvent.featureData.description;
									showInContentWindow(text);
									});

  //Send html to 'content-window' div
  function showInContentWindow(text) {
	var contentWindow = document.getElementById('content-window')
	contentWindow.innerHTML = text;
	};

  //Set map layer style for bus stops
  map.data.setStyle(function(feature){return({icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'red',
        fillOpacity: .3,
        strokeColor: 'white',
        strokeWeight: .5,
        scale: 4
      }})});
	  

  //Show approaching buses when a stop is clicked
  map.data.loadGeoJson('https://kvn-dly.github.io/fastrakStops.json');
  map.data.addListener('click', function(event){
										divtext = "";
										var i;
										
										for(i=0; i < Object.keys(trips["entity"]).length;i++){
											var j;
											for(j=0; j < Object.keys(trips["entity"][i].trip_update.stop_time_update).length;j++){
												if (trips["entity"][i].trip_update.stop_time_update[j].stop_id == event.feature.getProperty('stop_id')){
													var d = new Date(1970,0,1);
													var t;
													d.setSeconds(trips["entity"][i].trip_update.stop_time_update[j].arrival.time)
													d.setHours(d.getHours() - 5)
													t = d.toLocaleTimeString()
													divtext = divtext + '<br>' + trips["entity"][i].trip_update.vehicle.label + " : "+ t}}		
										}
										
										for(i=0; i < Object.keys(alerts["entity"]).length; i++){
											if (alerts["entity"][i].informed_entity.stop_id == event.feature.getProperty('stop_id')){
												divtext = divtext + '<br><hr><br>' + alerts["entity"][i].description_text.translation.text
											}
										}
									document.getElementById('content-header').innerHTML = event.feature.getProperty('stop_name');
									document.getElementById('content-content').innerHTML = divtext;
									});
    
  getTrips();  
  getBusLocations();
  getAlerts();

}

function getTrips(){
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://65.213.12.244/realtimefeed/tripupdate/tripupdates.json", true);
xhr.onload = function () {trips = eval("("+ xhr.response +")")}
xhr.send()
}

function getAlerts(){
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://65.213.12.244/realtimefeed/alert/alerts.json", true);
xhr.onload = function () {alerts = eval("("+ xhr.response +")")}
xhr.send()
}

function getBusLocations(){
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://65.213.12.244/realtimefeed/vehicle/vehiclepositions.json", true);
xhr.onload = function () {
	var feed = eval("("+ xhr.response +")");
	var coords = "";
	var i;
  for (var i = 0; i < busArray.length; i++) {
    busArray[i].setMap(null);
  }
  busArray = [];
	for(i=0; i < Object.keys(feed["entity"]).length;i++){
		if (validBusArray.indexOf(feed["entity"][i].id) > -1){
		var marker = new google.maps.Marker({
				position: {lat: feed["entity"][i].vehicle.position.latitude, lng: feed["entity"][i].vehicle.position.longitude},
				map: map,
				title: feed["entity"][i].id,
				icon: 'vehicle12.png'});
		busArray.push(marker);
		}
	}
}
xhr.send()
}

//Reload realtime data every 30 seconds
setInterval(function(){getBusLocations()}, 30000);
setInterval(function(){getTrips()}, 30000);
//setInterval(function(){getAlerts()}, 30000);

function DestinationControl(controlDiv, map) {
	// Set CSS for the control border.
	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = '#fff';
	controlUI.style.border = '2px solid #fff';
	controlUI.style.borderRadius = '3px';
	controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
	controlUI.style.cursor = 'pointer';
	controlUI.style.marginBottom = '5dp';
	controlUI.style.marginLeft = '5px';
	controlUI.style.marginRight = '5px';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Pick your destination';
	controlDiv.appendChild(controlUI);
	// Set CSS for the control interior.
	var controlText = document.createElement('div');
	controlText.style.color = 'rgb(25,25,25)';
	controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
	controlText.style.fontSize = 'Small';
	controlText.style.lineHeight = '20dp';
	controlText.style.paddingLeft = '3px';
	controlText.style.paddingRight = '3px';
	controlText.innerHTML = 'Pick Destination';
	controlUI.appendChild(controlText);
	controlUI.addEventListener('click', pickDestination);
}
/*
 * Allows the user to click on a location on the map to select thier location. 
 * Updates the global variables userLat and userLng to the position picked.
 */
function pickDestination() {
	google.maps.event.addListenerOnce(map, 'click', function (e) {
		var resultColor =
				google.maps.geometry.poly.containsLocation(e.latLng, fastrakPolygon) ?
				'blue' :
				'yellow';
		isInRange = google.maps.geometry.poly.containsLocation(e.latLng, fastrakPolygon)
				? true : false;
		if (isInRange === true) {
			destinationLat = e.latLng.lat().toString();
			destinationLng = e.latLng.lng().toString();
		} else {
			console.log("Out of Range, please retry.");
		}
		;
		new google.maps.Marker({
			position: e.latLng,
			map: map,
			icon: {
				path: google.maps.SymbolPath.CIRCLE,
				fillColor: resultColor,
				fillOpacity: .2,
				strokeColor: 'white',
				strokeWeight: .5,
				scale: 10
			}
		});
		console.log(isInRange);
		console.log(destinationLat);
		console.log(destinationLng);
		return [isInRange, destinationLat, destinationLng];
	});
}

function RouteControl(controlDiv, map) {
	// Set CSS for the control border.
	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = '#fff';
	controlUI.style.border = '2px solid #fff';
	controlUI.style.borderRadius = '3px';
	controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
	controlUI.style.cursor = 'pointer';
	controlUI.style.marginBottom = '5dp';
	controlUI.style.marginLeft = '5px';
	controlUI.style.marginRight = '5px';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Display the route';
	controlDiv.appendChild(controlUI);
	// Set CSS for the control interior.
	var controlText = document.createElement('div');
	controlText.style.color = 'rgb(25,25,25)';
	controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
	controlText.style.fontSize = 'Small';
	controlText.style.lineHeight = '20dp';
	controlText.style.paddingLeft = '3px';
	controlText.style.paddingRight = '3px';
	controlText.innerHTML = 'Show Route';
	controlUI.appendChild(controlText);
	controlUI.addEventListener('click', displayRoute);
//                controlUI.addEventListener('click', routeClosestBS);
}
function StopControl(controlDiv, map) {
	// Set CSS for the control border.
	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = '#fff';
	controlUI.style.border = '2px solid #fff';
	controlUI.style.borderRadius = '3px';
	controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
	controlUI.style.cursor = 'pointer';
	controlUI.style.marginBottom = '5dp';
	controlUI.style.marginLeft = '5px';
	controlUI.style.marginRight = '5px';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Display route to the closest stop';
	controlDiv.appendChild(controlUI);
	// Set CSS for the control interior.
	var controlText = document.createElement('div');
	controlText.style.color = 'rgb(25,25,25)';
	controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
	controlText.style.fontSize = 'Small';
	controlText.style.lineHeight = '20dp';
	controlText.style.paddingLeft = '3px';
	controlText.style.paddingRight = '3px';
	controlText.innerHTML = 'Show Closest Stop';
	controlUI.appendChild(controlText);
	controlUI.addEventListener('click', findStop);
}

/*
 * Custom button for pick location.
 */
function CenterControl(controlDiv, map) {
	// Set CSS for the control border.
	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = '#fff';
	controlUI.style.border = '2px solid #fff';
	controlUI.style.borderRadius = '3px';
	controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
	controlUI.style.cursor = 'pointer';
	controlUI.style.marginBottom = '5dp';
	controlUI.style.marginLeft = '5px';
	controlUI.style.marginRight = '5px';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Click your location on the map';
	controlDiv.appendChild(controlUI);
	// Set CSS for the control interior.
	var controlText = document.createElement('div');
	controlText.style.color = 'rgb(25,25,25)';
	controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
	controlText.style.fontSize = 'Small';
	controlText.style.lineHeight = '20dp';
	controlText.style.paddingLeft = '10dp';
	controlText.style.paddingRight = '10dp';
	controlText.innerHTML = 'Pick Location';
	controlUI.appendChild(controlText);
	controlUI.addEventListener('click', pickLocation);
}
/*
 * Allows the user to click on a location on the map to select thier location. 
 * Updates the global variables userLat and userLng to the position picked.
 */
function pickLocation() {
	google.maps.event.addListenerOnce(map, 'click', function (e) {
		var resultColor =
				google.maps.geometry.poly.containsLocation(e.latLng, fastrakPolygon) ?
				'green' :
				'red';
		isInRange = google.maps.geometry.poly.containsLocation(e.latLng, fastrakPolygon)
				? true : false;
		if (isInRange === true) {
			userLat = e.latLng.lat().toString();
			userLng = e.latLng.lng().toString();
		} else {
			console.log("Out of Range, please retry.");
		}
		;
		new google.maps.Marker({
			position: e.latLng,
			map: map,
			icon: {
				path: google.maps.SymbolPath.CIRCLE,
				fillColor: resultColor,
				fillOpacity: .2,
				strokeColor: 'white',
				strokeWeight: .5,
				scale: 10
			}
		});
		console.log(isInRange);
		console.log(userLat);
		console.log(userLng);
		return [isInRange, userLat, userLng];
	});
}
/*
 * Calculates the distance between points.
 */
function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1 / 180;
	var radlat2 = Math.PI * lat2 / 180;
	var radlon1 = Math.PI * lon1 / 180;
	var radlon2 = Math.PI * lon2 / 180;
	var theta = lon1 - lon2;
	var radtheta = Math.PI * theta / 180;
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist);
	dist = dist * 180 / Math.PI;
	dist = dist * 60 * 1.1515;
	if (unit === "K") {
		dist = dist * 1.609344;
	}
	;
	if (unit === "N") {
		dist = dist * 0.8684;
	}
	;
	return dist;
}
/*
 * Displays the route (by walking) between the start and destination on the map.
 * Takes in the start Latitude, Longitude, end Latitude, end Longitude. 
 */
function displayWalkRoute(startLat, startLng, endLat, endLng) {
	var start = new google.maps.LatLng(startLat, startLng);
	var end = new google.maps.LatLng(endLat, endLng);
	var directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(map);
	var request = {
		origin: start,
		destination: end,
		travelMode: google.maps.TravelMode.WALKING
	};
	var directionsService = new google.maps.DirectionsService();
	directionsService.route(request, function (response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
		}
	});
}
/*
 * Displays a route (by bus) on the map.
 * Takes in the start Latitude, Longitude, end Latitude, end Longitude.
 */
function displayBusRoute(startLat, startLng, endLat, endLng) {
	var start = new google.maps.LatLng(startLat, startLng);
	var end = new google.maps.LatLng(endLat, endLng);
	var directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(map);
	var request = {
		origin: start,
		destination: end,
		travelMode: google.maps.TravelMode.TRANSIT
	};
	var directionsService = new google.maps.DirectionsService();
	directionsService.route(request, function (response, status) {
		if (status === google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
		}
	});
}
/*
 * Finds the closest stop in the busStops array to the starting location.
 * Returns the index of the array with the closest stop.
 */
function displayRoute() {
	if(userLat === null || userLng === null || destinationLat === null || destinationLng === null){
		console.log("Must select both location and destination");
	} else {
		varStartIndex = calcClosestStop(userLat, userLng);
		varDestIndex = calcClosestStop(destinationLat, destinationLng);
//                    displayWalkRoute(userLat, userLat, busStops[varStartIndex].latitude, busStops[varStartIndex].longitude);
		displayBusRoute(busStops[varStartIndex].latitude, busStops[varStartIndex].longitude, busStops[varDestIndex].latitude, busStops[varDestIndex].longitude);
		displayWalkRoute(busStops[varDestIndex].latitude, busStops[varDestIndex].longitude, destinationLat, destinationLng);
		
	}
}
/*
 * Automatically displays the route (by walking) to the closest busstop.
 */
function findStop() {
	var closestI = calcClosestStop(userLat, userLng, busStops);
	displayWalkRoute(userLat, userLng, busStops[closestI].latitude, busStops[closestI].longitude);
	console.log(closestI);
	console.log(busStops[closestI].latitude);
	console.log(busStops[closestI].longitude);
}
function calcClosestStop(startLat, startLng) {
	var minI;
	var currentDistance;
	var minDistance = 1000000;
	for (i = 0; i < busStops.length; i++) {
		currentDistance = distance(busStops[i].latitude, busStops[i].longitude, startLat, startLng, "M");
		console.log(currentDistance);
		if (currentDistance < minDistance) {
			minDistance = currentDistance;
			minI = i;
		}
	}
	return minI;
}
