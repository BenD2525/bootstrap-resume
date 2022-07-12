function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [{
            lat: 40.785091,
            lng: -73.968285
        },
        {
            lat: 51.52612322726838,
            lng: -0.08825831443016598
        },
        {
            lat: 51.507023689130364,
            lng: -0.10493980192869969
        },
        {
            lat: 51.55492311521315,
            lng: -0.10833377168172918
        }
    ];
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markercluster = new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    });
}