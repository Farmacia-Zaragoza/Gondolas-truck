var initMap = function initMap(){
    //get lat and long value from html
    var latitudeValue = parseFloat(document.getElementById('latitude').textContent);
    var longitudeValue = parseFloat(document.getElementById('longitude').textContent);
    //console.log(latitudeValue, -longitudeValue);

    //get map icon
    var mapIcon = document.getElementById('mapIcon').getAttribute('data');
    console.log(mapIcon);

    // Map options
    var options = {
      zoom:8,
      center:{lat:40.5053907,lng:-3.6724659}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);
 
    // Add marker
    var marker = new google.maps.Marker({
      position:{lat:latitudeValue, lng:-longitudeValue},
      map:map,
      icon:mapIcon
    });
  };
