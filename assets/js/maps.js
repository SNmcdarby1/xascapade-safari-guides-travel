function initMap () {
    var map = new google.maps.Map( document.getElementById( "map" ), {
        zoom: 8,
        mapTypeId: "terrain",
        center: {
            lat: -1.3764,
            lng: 36.7443
        }
    } );

    var labels = "ABC"

    var locations = [ {
        lat: -1.286389,
        lng: 36.817223
    }, {
        lat: 4.0435,
        lng: 39.6682
    }, {
        lat: 1.3719,
        lng: 34.9381
    }, ];
    var markers = locations.map( function ( location, i ) {
        return new google.maps.Marker( {
            position: location,
            label: labels[ i % labels.length ]
        } );
    } );

    var nairobi = new google.maps.Marker( {
        position: {
            lat: -1.286389,
            lng: 36.817223
        }
    } );
    var mombasa = new google.maps.Marker( {
        position: {
            lat: 4.0435,
            lng: 39.6682
        }
    } );
    var mombasa = new google.maps.Marker( {
        position: {
            lat: 1.3719,
            lng: 34.9381
        }
    } );

    const MasaiMara = { lat: -1.376, lng: 36.744 };
    const map = new google.maps.Map(
        document.getElementById( "map" ) as HTMLElement,
        {
            zoom: 4,
            center: uluru,
        }
    );

    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Masai Mara</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Masai Mara</b>, also referred to as <b>The Mara</b>, is a large " +
        " national game reserve in Narok, Kenya" +
        " It is named in honor of the Maasai people " +
        "  the ancestral inhabitants of the area, " +
        "Mara" means "spotted" in the local Maasai language,. " +
    " who migrated to the area from the Nile Basin;" +
        " Mara" means "spotted" in the local Maasai language" +
    " due to the many short bushy trees which dot the landscape, " +
        "rock caves and ancient paintings. Uluru is listed as a World " +
        "Heritage Site.</p>" +
        '<p>Attribution: Masai Mara, <a href=" https://en.wikipedia.org/wiki/Maasai_Mara ">' +
        "https://en.wikipedia.org/w/index.php?title=Masai Mara</a> " +
        "(last visited August 6, 2015).</p>" +
        "</div>" +
        "</div>";

    const infowindow = new google.maps.InfoWindow( {
        content: contentString,
    } );

    const marker = new google.maps.Marker( {
        position: Masai Mara,
        map,
        title: "Masai Mara (The Mara)",
    } );
    marker.addListener( "click", () => {
        infowindow.open( map, marker );
    } );
}

// Continue creating markers like above...
var markers = [ nairobi, mombasa ]; // add additional markers to the array if you have them

var markerCluster = new MarkerClusterer( map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
} );
}