function initialize() {
  var myLatlng = new google.maps.LatLng(34.3004,-83.837644);
  var mapOptions = {
    zoom: 5,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
	  animation: google.maps.Animation.DROP,
      map: map,
      title: 'Ceramic Tile Services'
  });
  var styles = [
  {
    stylers: [
      { hue: "#000000" },
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 0 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },{
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      { visibility: "off" }
    ]
  }
];
map.setOptions({styles: styles});

}

google.maps.event.addDomListener(window, 'load', initialize);