var tempParams
emailjs.send( "service_aw4lcie", "template_p9qe11h", {
    to_name: "xascapae@gmail.com",
    from_name: "user",
    message: "message",
    reply_to: "user_email",
    tour: "tour",
    location: "location",
    contact_form: "contact_form",
} );

;

emailjs.send( "service_aw4lcie", "template_p9qe11h", tempParams )
    .then( function ( res ) {
            console.log( "success", res.status );
        },

        function ( error ) {
            ( "failed", error );
        }
    );
console.log