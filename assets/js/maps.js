var map;
var InforObj = [];
var centerCords = {
    lat: 0.0236,
    lng: 37.9062

};

var markersOnMap = [ {
    placeName: "<h5>Nairobi National Park is a national park in Kenya that was established in 1946 about 7 km south of Nairobi. It  allows migrating wildlife to move between the park and the adjacent Kitengela plains. Herbivores gather in the park during the dry season</h5> (<b>Nairobi national park</b>)",
    LatLng: [ {
        lat: -1.373333,
        lng: 36.858889
    } ]
},
{
    placeName: "<h5>Masai Mara National Park,is an area of preserved savannah wilderness in southwestern Kenya, along the Tanzanian border. Its animals include lions, cheetahs, elephants, zebras and hippos. </h5>(<b>The Wildbeast</b>)",
    LatLng: [ {
        lat: -1.490000,
        lng: 35.143890
    } ]
},
{
    placeName: "<h5>Mombasa Mombasa is a tourism-based city; it has an extra-large port and an international airport, and is an important regional tourism centre. Located on the east coast of Kenya, it also is the home of one of the state houses, and is considered by some as a second capital in all but name.The city is known as the white and blue city in Kenya. It is the country's oldest (circa 900 AD) and second-largest city (after the capital Nairobi) </h5>(<b>White sandy beaches</b>,)",
    LatLng: [ {
        lat: -4.050000,
        lng: 39.666667
    } ]
},
{
    placeName: "<h5>Lamu  is one of the longest established, and best preserved remaining settlements of the Swahili tradition in east Africa that remains today. The island has continually been inhabited for over seven hundred years, and continues to be an important center in eastern Africa.</h5>(<b>UNESCO sights</b>,)",
    LatLng: [ {
        lat: -2.269444,
        lng: 40.902222

    } ]
},
];

window.onload = function () {
    initMap();
};

function addMarkerInfo () {
    for ( var i = 0; i < markersOnMap.length; i++ ) {
        var contentString = '<div id="Safari tours"><h4>' + markersOnMap[ i ].placeName +
            '</h4><p><p><b>Book now, </b> Kenya safaris tours with, <b>Xascapade safari guided tours. </b> </p></div>';

        const marker = new google.maps.Marker( {
            position: markersOnMap[ i ].LatLng[ 0 ],
            map: map
        } );

        const infowindow = new google.maps.InfoWindow( {
            content: contentString,
            maxWidth: 200
        } );

        marker.addListener( 'click', function () {
            closeOtherInfo();
            infowindow.open( marker.get( 'map' ), marker );
            InforObj[ 0 ] = infowindow;
        } );
        // marker.addListener('mouseover', function () {
        //     closeOtherInfo();
        //     infowindow.open(marker.get('map'), marker);
        //     InforObj[0] = infowindow;
        // });
        // marker.addListener('mouseout', function () {
        //     closeOtherInfo();
        //     infowindow.close();
        //     InforObj[0] = infowindow;
        // });
    }
}

function closeOtherInfo () {
    if ( InforObj.length > 0 ) {
        InforObj[ 0 ].set( "marker", null );
        InforObj[ 0 ].close();
        InforObj.length = 0;
    }
}

function initMap () {
    map = new google.maps.Map( document.getElementById( 'map' ), {
        zoom: 7,
        center: centerCords
    } );
    addMarkerInfo();
}

