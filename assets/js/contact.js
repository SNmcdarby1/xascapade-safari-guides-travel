function getFormData () {
    var form = document.getElementById( "contact_form" );
    var elements = form.elements; // all form elements
    var fields = Object.keys( elements ).map( function ( k ) {
        if ( elements[ k ].name !== undefined ) {
            return elements[ k ].name;
            // special case for Edge's html collection
        } else if ( elements[ k ].length > 0 ) {
            return elements[ k ].item( 0 ).name;
        }
    } ).filter( function ( item, pos, self ) {
        return self.indexOf( item ) == pos && item;
    } );
    var data = {};
    fields.forEach( function ( k ) {
        data[ k ] = elements[ k ].value;
        var str = ""; // declare empty string outside of loop to allow
        // it to be appended to for each item in the loop
        if ( elements[ k ].type === "checkbox" ) { // special case for Edge's html collection
            str = str + elements[ k ].checked + ", "; // take the string and append 
            // the current checked value to 
            // the end of it, along with 
            // a comma and a space
            data[ k ] = str.slice( 0, -2 ); // remove the last comma and space 
            // from the  string to make the output 
            // prettier in the spreadsheet
        } else if ( elements[ k ].length ) {
            for ( var i = 0; i < elements[ k ].length; i++ ) {
                if ( elements[ k ].item( i ).checked ) {
                    str = str + elements[ k ].item( i ).value + ", "; // same as above
                    data[ k ] = str.slice( 0, -2 );
                }
            }
        }
    } );

    // enquery form 
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


    // add form-specific values into the data
    data.formDataNameOrder = JSON.stringify( fields );
    data.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    data.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    console.log( data );
    return data;
}

function uploadComplete () {
    window.parent.document.getElementById( "popup" ).innerHtml = "";

}

function handleFormSubmit ( event ) { // handles form submit withtout any jquery
    event.preventDefault(); // we are submitting via xhr below
    var data = getFormData(); // get the values submitted in the form

    /* OPTION: Remove this comment to enable SPAM prevention, see README.md
    if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
      return false;
    }
    */

    if ( !validEmail( data.email ) ) { // if email is not valid show error
        document.getElementById( 'email-invalid' ).style.display = 'block';
        return false;
    } else {
        var url = event.target.action; //
        var xhr = new XMLHttpRequest();
        xhr.open( 'get-post', url );
        // xhr.withCredentials = true;
        xhr.setRequestHeader( 'Content-Type', 'application' );
        xhr.onreadystatechange = function () {
            console.log( xhr.status, xhr.statusText )
            console.log( xhr.responseText );
            document.getElementById( 'gform' ).style.display = 'none'; // hide form
            document.getElementById( 'thankyou_message' ).style.display = 'block';
            return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys( data ).map( function ( k ) {
            return encodeURIComponent( k ) + '=' + encodeURIComponent( data[ k ] )
        } ).join( '&' )
        xhr.send( encoded );
    }
}

function loaded () {
    console.log( 'contact form submission handler loaded successfully' );
    // bind to the submit event of our form
    var form = document.getElementById( 'contact_form' );
    form.addEventListener( "submit", handleFormSubmit, false )


    document.addEventListener( 'DOMContentLoaded', loaded, false );
    var form = false;
    var length = document.forms.length;
    for ( var i = 0; i < length; i++ ) {
        if ( form.id == "contact-form" ) {
            form = document.forms[ i ];
        }
    }
    async function getText ( file ) {
        let myObject = await fetch( file );
        let myText = await myObject.text();
        myDisplay( myText )
    }
};