$( '#myForm' ).on( 'submit', function ( event ) {
    event.preventDefault(); // prevent reload

    var formData = new FormData( this );
    formData.append( 'service_aw4lcie', 'service_aw4lcie' );
    formData.append( 'template_p9qe11h', 'template_p9qe11h' );
    formData.append( 'user_cbk0RT9vpd78BlYyPC67x', 'user_cbk0RT9vpd78BlYyPC67x' )

    $.ajax( 'https://cdn.emailjs.com/sdk/2.2.4/email.min.js', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    } ).done( function () {
        alert( 'Your mail is sent!' );
    } ).fail( function ( error ) {
        alert( 'Oops... ' + JSON.stringify( error ) );
    } );

    emailjs.send( service_aw4lcie, template_p9qe11h, templateParams, user_cbk0RT9vpd78BlYyPC67x )
    emailjs.send( "service_aw4lcie", "template_p9qe11h", {
        to_name: "Xascapade tour guide travel",
        username: "xascapade travel",
        tour: "self tour guide",
        location: "Mombasa",
        contact_form: "xascapade@gmail.com",
        from_name: "user",
        reply_to: "user",
    } );
} )
console.log( sendEmail )