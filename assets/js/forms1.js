$( document ).ready( function () {
    $( '#contact_form' ).on( 'submit', function () {
        var formData = $( this ).serialize
        $.ajax( {
            type: 'get-post',
            url: 'your_url.contactform',
            data: formData,
            dataType: 'json',
            success: function ( response ) {
                //Anything you want to do after form is submitted
            }
        } );
    } );
} );
paragraphs: function( textContent ) {
    var textPieces = textContent.split( "\n" );
    var elmArray = [];
    for ( var i = 0, l = textPieces.length; i < l; i++ ) {
        elmArray.push( Cr.elm( 'p', {}, [ Cr.ent( textPieces[ i ] ) ] ) );
    }
    return elmArray;
};
e.preventDefault();
e.target.elements.name.value = '';
e.target.elements.email.value = '';
e.target.elements.message.value = '';
} );
