
function loadDoc ( contact_form ) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if ( this.readyState == 4 && this.status == 200 ) {
            document.getElementById( "get-post" ).innerHTML =
                this.responseText;
        }
    };
    xhttp.open( "get-post", "ajax_info.txt", true );
    xhttp.send();
}
$.ajax( {
    url: url,
    dataType: "json",
    type: "Post",
    async: true,
    data: {},
    success: function ( data ) {

    },
    error: function ( xhr, exception ) {
        var msg = "";
        if ( xhr.status === 0 ) {
            msg = "Not connect.\n Verify Network." + xhr.responseText;
        } else if ( xhr.status == 404 ) {
            msg = "Requested page not found. [404]" + xhr.responseText;
        } else if ( xhr.status == 500 ) {
            msg = "Internal Server Error [500]." + xhr.responseText;
        } else if ( exception === "parsererror" ) {
            msg = "Requested JSON parse failed.";
        } else if ( exception === "timeout" ) {
            msg = "Time out error." + xhr.responseText;
        } else if ( exception === "abort" ) {
            msg = "Ajax request aborted.";
        } else {
            msg = "Error:" + xhr.status + " " + xhr.responseText;
        }

    }
} );
$( "submit" ).click( function () {
    $post( "get-post.asp", {
        tempParams: "",
        fromname: "",
        toname: "",
        email: "",
        tour: "",
        location: "",
        message: ""
    },
        function ( data, status ) {
            alert( `Data: ${ data }\\nStatus: ${ status }` );
        } );
} );


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
    type: 'get-post',
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
}
);

