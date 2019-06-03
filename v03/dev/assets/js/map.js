function initMap() {
    var streetViewOptions = {
      panControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
      },
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
      },
      addressControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      visible: false
    };
    
    var street = new google.maps.StreetViewPanorama(document.getElementById('map'), streetViewOptions);
    
    var mapOptions = {
      center: new google.maps.LatLng(40.5053907,-3.6724659),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      panControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
      },
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.LEFT_BOTTOM
      },
      streetView: street
    };
    
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    google.maps.event.addListener(map, 'visible_changed', function() {
      alert('a');
    });
    
    map.setTilt(45);
  }