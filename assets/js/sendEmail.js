
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

    function loadDoc ( contact_form ) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if ( this.readyState == 4 && this.status == 200 ) {
                document.getElementById( "get_post" ).innerHTML =
                    this.responseText;
            }
        };
        xhttp.open( "GET", "ajax_info.txt", true );
        xhttp.send();
    }


    var data = {
        service_id: 'service_aw4lcie',
        template_id: 'template_p9qe11h',
        user_id: 'user_cbk0RT9vpd78BlYyPC67x',
        template_params: {
            'username': 'James',
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
        }
    };
    ( {
        type: 'post',
        url: 'https://api.emailjs.com/api/v1.0/email/send',
        data: {
            'key': '8895ccc85872be3ea8732d921334e905',
            'message': {
                'from_email': 'Susan',
                'to': [ {
                    'email': $( '.email' ).val(), // get email from form
                    'name': $( '.name' ).val(), // get name from form
                    'type': 'to'
                } ]
            }
        }

    } );

    emailjs.send( "service_uq4jx2r", "template_tlarndr", tempParams, "user_frKMPC59Co9oA1oL0LV7I" )
        .then( function ( res ) {
            console.log( "success", res.status );
            return;
        },
            function ( error ) {
                console.log( "failed", error );
            }
        );
    return false;
}

function resetForm ( form ) {
    // clearing inputs
    var inputs = form.getElementsByTagName( 'input' );
    for ( var i = 0; i < inputs.length; i++ ) {
        switch ( inputs[ i ].type ) {
            // case 'hidden':
            case 'text':
                inputs[ i ].value = '';
                break;
            case 'radio':
            case 'checkbox':
                inputs[ i ].checked = false;
        }
    }

    // clearing selects
    var selects = form.getElementsByTagName( 'select' );
    for ( var i = 0; i < selects.length; i++ )
        selects[ i ].selectedIndex = 0;

    // clearing textarea
    var text = form.getElementsByTagName( 'textarea' );
    for ( var i = 0; i < text.length; i++ )
        text[ i ].innerHTML = '';

    return false;
}

