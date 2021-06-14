function validateForm () {
    var name = document.getElementById( 'name' ).value;
    if ( name == "" ) {
        document.querySelector( '.status' ).innerHTML = "Name cannot be empty";
        return false;
    }
    var email = document.getElementById( 'email' ).value;
    if ( email == "" ) {
        document.querySelector( '.status' ).innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( !re.test( email ) ) {
            document.querySelector( '.status' ).innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject = document.getElementById( 'subject' ).value;
    if ( subject == "" ) {
        document.querySelector( '.status' ).innerHTML = "Subject cannot be empty";
        return false;
    }
    var message = document.getElementById( 'message' ).value;
    if ( message == "" ) {
        document.querySelector( '.status' ).innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector( '.status' ).innerHTML = "Sending...";
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
( function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll( '.needs-validation' )

    // Loop over them and prevent submission
    Array.prototype.slice.call( forms )
        .forEach( function ( form ) {
            form.addEventListener( 'submit', function ( event ) {
                if ( !form.checkValidity() ) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add( 'was-validated' )
            }, false )
        } )

} );

/**
* PHP Email Form Validation - v3.1
* URL: https://bootstrapmade.com/sendEmail_mail_-form/
* Author: BootstrapMade.com
*/
( function () {
    "use strict";

    let forms = document.querySelectorAll( '.sendEmail-form' );

    forms.forEach( function ( e ) {
        e.addEventListener( 'submit', function ( event ) {
            event.preventDefault();

            let thisForm = this;

            let action = thisForm.getAttribute( 'action' );
            let recaptcha = thisForm.getAttribute( 'data-recaptcha-site-key' );

            if ( !action ) {
                displayError( thisForm, 'The form action property is not set!' )
                return;
            }
            thisForm.querySelector( '.loading' ).classList.add( 'd-block' );
            thisForm.querySelector( '.error-message' ).classList.remove( 'd-block' );
            thisForm.querySelector( '.sent-message' ).classList.remove( 'd-block' );

            let formData = new FormData( thisForm );

            if ( recaptcha ) {
                if ( typeof grecaptcha !== "undefined" ) {
                    grecaptcha.ready( function () {
                        try {
                            grecaptcha.execute( recaptcha, { action: 'sendEmail_form_submit' } )
                                .then( token => {
                                    formData.set( 'recaptcha-response', token );
                                    sendEmail_mail_form_submit( thisForm, action, formData );
                                } )
                        } catch ( error ) {
                            displayError( thisForm, error )
                        }
                    } );
                } else {
                    displayError( thisForm, 'The reCaptcha javascript API url is not loaded!' )
                }
            } else {
                sendEmail_mail_form_submit( thisForm, action, formData );
            }
        } );
    } );

    function sendEmail_mail_form_submit ( thisForm, action, formData ) {
        fetch( action, {
            method: 'get-post',
            body: formData,
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        } )
            .then( response => {
                if ( response.ok ) {
                    return response.text()
                } else {
                    throw new Error( `${ response.status } ${ response.statusText } ${ response.url }` );
                }
            } )
            .then( data => {
                thisForm.querySelector( '.loading' ).classList.remove( 'd-block' );
                if ( data.trim() == 'OK' ) {
                    thisForm.querySelector( '.sent-message' ).classList.add( 'd-block' );
                    thisForm.reset();
                } else {
                    throw new Error( data ? data : 'Form submission failed and no error message returned from: ' + action );
                }
            } )
            .catch( ( error ) => {
                displayError( thisForm, error );
            } );
    }

    function displayError ( thisForm, error ) {
        thisForm.querySelector( '.loading' ).classList.remove( 'd-block' );
        thisForm.querySelector( '.error-message' ).innerHTML = error;
        thisForm.querySelector( '.error-message' ).classList.add( 'd-block' );
    }

} )();