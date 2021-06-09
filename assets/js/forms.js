$( document ).ready( function () {
    $( '#contact_form' ).on( 'submit', function () {
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

document.querySelector( '#contact-form' ).addEventListener( 'submit', function ( e ) {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
} );
