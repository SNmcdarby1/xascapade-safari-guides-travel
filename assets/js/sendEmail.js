function sendEmail ( tempParams ) {
    emailjs.send( "service_uq4jx2r", "template_tlarndr", "tempParams", {
        to_name: "xascapae@gmail.com",
        from_name: "user",
        message: "message",
        reply_to: "user_email",
        tour: "tour",
        location: "location",
        contact_form: "contact_form",
    } );

    var tempParams = {
        from_name: document.getElementById( "fromName" ).value,
        to_name: document.getElementById( "toName" ).value,
        email: document.getElementById( "email" ).value,
        subject: document.getElementById( "subject" ).value,
        tour: document.getElementById( "tour" ).value,
        location: document.getElementById( "location" ).value,
        nairobi: document.getElementById( "nairobi" ).value,
        Mombasa: document.getElementById( "Mombasa" ).value,
        lamu: document.getElementById( "lamu" ).value,
        tours: document.getElementById( "tours" ).value,
        self_tours: document.getElementById( "self_tours" ).value,
        group: document.getElementById( "group" ).value,
        experiecedtour: document.getElementById( "experiecedtour" ).value,
        ch1: document.getElementById( "ch1" ).value,
        ch2: document.getElementById( "ch2" ).value,
        r1: document.getElementById( "r1" ).value,
        r2: document.getElementById( "r2" ).value,
        nakuru: document.getElementById( "nakuru" ).value,

    };
    emailjs.send( "service_uq4jx2r", "template_tlarndr", tempParams, "user_frKMPC59Co9oA1oL0LV7I" )
        .then( function ( res ) {
            console.log( "success", res.status );
        },
            function ( error ) {
                console.log( "failed", error );
            }
        );
    return false;
}
//
function sendEmail ( tempParams ) {
    var tempParams = {
        from_name: document.getElementById( "fromName" ).value,
        to_name: document.getElementById( "toName" ).value,
        message: document.getElementById( "message" ).value,
        tour: document.getElementById( "tour" ).value,
        location: document.getElementById( "location" ).value,
    };


    emailjs.send( "service_uq4jx2r", "template_tlarndr", tempParams, "user_frKMPC59Co9oA1oL0LV7I" )
        .then( function ( res ) {
            console.log( "success", res.status );
        },
            function ( error ) {
                console.log( "failed", error );
            }
        );
    return false;

}
