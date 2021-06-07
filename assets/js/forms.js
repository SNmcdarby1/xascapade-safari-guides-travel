$( document ).ready( function () {
    $( '#your-form-id' ).on( 'submit', function () {
        var formData = $( this ).serialize
        $.ajax( {
            type: 'post',
            url: 'your_url.contactform',
            data: formData,
            dataType: 'json',
            success: function ( response ) {
                //Anything you want to do after form is submitted
            }
        } );
    } );
} );