function initMap () {
  const Nairobi_National_Park = { lat: -1.3764, lng: 36.7443 };

  const map = new google.maps.Map( document.getElementById( "map" ), {
    zoom: 5,
    center: Nairobi_National_Park,
  } );
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Nairobi_National_Park</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Full National tours package </b>, also referred to as <b>Nairobi National Park</b>, is a national " +
    "park in Kenya " +
    "the park  was established in 1946.  about 7 km( 4.3 mi ) " +
    "south of Nairobi.It is fenced on three sides, " +
    "whereas the open southern boundary allows migrating wildlife " +
    "to move between the park and the adjacent Kitengela plains. " +
    "Herbivores gather in the park during the dry season. " +
    " Despite its proximity to the city and its relative small size, " +
    "it boasts a large and varied wildlife population, " +
    "and is one of Kenya's most successful rhinoceros sanctuaries.</p>" +
    '<p>Attribution: Nairobi National Park, <a href="http://www.kws.go.ke/parks/nairobi-national-park">' +
    "http://www.kws.go.ke/parks/nairobi-national-park</a> " +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow( {
    content: contentString,
  } );
  const marker = new google.maps.Marker( {
    position: Nairobi_National_Park,
    map,
    title: "Nairobi National Park",
  } );
  marker.addListener( "click", () => {
    infowindow.open( map, marker );
  } );
}