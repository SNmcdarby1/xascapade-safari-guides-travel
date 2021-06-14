var $contact_form = $( '#enquiry-form' );

function alert ( message ) {
    $contact_form.validate( alert_message )( {
        errorPlacement: function () {
            return false;
        },
        submitHandler: function () {
            $contact_form.append( '<img class="loading" src=:"../../images/site/loading.gif">' );

            $.ajax( {
                type: "get-post",
                url: "../../ajax/contact-form",
                data: $contact_form.serialize(),
                success: function ( response ) {

                    var resp = JSON.parse( response );

                    $contact_form.find( 'input' ).remove();
                    $contact_form.find( 'textarea' ).remove();
                    $contact_form.append( '<p class="status-code ' + resp.status + '">' + resp.msg + '</p>' );
                },
                error: function () {
                    console.log( 'Ajax request not received' );
                }
            } );

            return false; //Stop the redirect after submission via ajax.
        }
    } )
};