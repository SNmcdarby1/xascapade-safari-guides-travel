var tempParams
emailjs.send( "service_aw4lcie", "template_p9qe11h", {
    to_name: "xascapae@gmail.com",
    from_name: "user",
    message: "message",
    reply_to: "user_email",
    tour: "tour";
    location: "location",
    contact_form: "contact_form",
} );
emailjs.send( "service_aw4lcie", "template_p9qe11h", tempParams )
    .then( function ( res ) {
            console.log( "success", res.status );
        },

        function ( error ) {
            ( "failed", error );
        }
    );
const contact_form = [ "fullname", "tourlocation", "email", "message", "tours" ];
tourlocation = [ "mombasa", "nairobi", "nakuru", "lamu" ];
tour = [ "Self_guided_tour", "group_tours", "experienced_tours", "private_tours" ];
fullname = [ "firstname", "lastname" ];


function uploadComplete() {
    document.getElementById( "popup" ).innerHtml = "";

    $( document ).ready( function () {
        parent.uploadComplete();
        document.getElementById( "" ).
        _( 'popFirstname' ).innerHTML = firstname;
        _( 'popLastname' ).innerHTML = lastname
        _( 'popUsername' ).innerHTML = username
        _( 'popEmail' ).innerHTML = email
        _( 'popNumber' ).innerHTML = number
        _( 'popLocation' ).innerHTML = Location
        _( 'popMessage' ).innerHTML = message
        return false;
    } )
};