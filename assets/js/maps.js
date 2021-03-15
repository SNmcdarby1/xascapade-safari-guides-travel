function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        mapTypeId: "terrain",
        center: {
            lat: -1.3764,
            lng: 36.7443
        }
    });

    var labels = "ABC"

    var locations = [{
        lat: -1.286389,
        lng: 36.817223
    }, {
        lat: 4.0435,
        lng: 39.6682
    }, {
        lat: 1.3719,
        lng: 34.9381
    }, ];
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var nairobi = new google.maps.Marker({
        position: {
            lat: -1.286389,
            lng: 36.817223
        }
    });
    var mombasa = new google.maps.Marker({
        position: {
            lat: 4.0435,
            lng: 39.6682
        }
    });
    var mombasa = new google.maps.Marker({
        position: {
            lat: 1.3719,
            lng: 34.9381
        }
    });
    // Continue creating markers like above...
    var markers = [nairobi, mombasa]; // add additional markers to the array if you have them

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}