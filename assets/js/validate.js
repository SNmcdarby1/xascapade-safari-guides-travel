add_action( 'init', 'add_message', 10, 0 );
function add_message ( _contact_form ) {
    $var = "_contact_form";

    if ( cond ) {
        add_message( _document );

        $( document ).ready( function () {
            $( "#contact_form" ).validate( {
                // rules: {
                // name: {
                // required: true,
                // minlength: 3
                // },
                // age: {
                // required: true,
                // number: true,
                // min: 18
                // },
                // email: {
                // required: true,
                // email: true
                // },
                // weight: {
                // required: {
                // depends: function ( elem ) {
                // return $( "#message" ).val() >
                // }
                // },
                // document.getElementById( customer ).addEventListener( change, function () {
                // var id = this.value;
                // alert( id );
                // var csrfToken = $( '[name=_csrfToken]' ).val();
                // $.ajax( {
                // type: "POST",
                // url: '<contact_form echo Router::url(array("controller" => "Customers", "action" => "fill")); ?>',
                // data: { 'id': id },
                // beforeSend: function ( xhr ) {
                // xhr.setRequestHeader( 'X-CSRF-Token', csrfToken );
                // },
                // success: function ( data ) {
                // alert( data );
                // data = JSON.parse( data );
                // alert( "id: " + data.id );
                // }
                // } );
                // document.getElementById( 'name' ).value = "test"
                // document.getElementById( 'invoice_to_address' ).value = "test"
                // document.getElementById( 'currencies' ).value = 3;
                // } );
                // 
                // function to process stage one
                function contact_form( argument )
                firstname = _( 'fromName' ).value;
                lastname = _( 'toName' ).value;
                username = _( 'user' ).value;
                password = _( 'password' ).value;
                message = _( 'message' ).value;
                location = _( 'location' ).value;
                email = _( 'email' ).value;
                number = _( 'number' ).value;


                function tempParam( argument )
                firstname = _( 'fromName' ).value;
                lastname = _( 'toName' ).value,
                username = _( 'user' ).value;
                password = _( 'password' ).value;
                message = _( 'message' ).value;
                location = _( 'location' ).value;
                email = _( 'email' ).value;
                number = _( 'number' ).value;

                // validate fullname
                if (( firstname == "" || ( isNaN( firstname ) ) || firstname.length <= 5 ) ) {
                _( 'firstnameError' ).innerHTML = "First name is incorrect. Make sure it is greater that 5 characters and does not contain numbers"
                return false;
            }

            if ( ( lastname == "" || ( isNaN( lastname ) ) || lastname.length <= 5 ) ) {
                _( 'lastnameError' ).innerHTML = "Last name is incorrect. Make sure it is greater that 5 characters and does not contain numbers"
                return false;
            }
            // username validation
            if ( ( username == "" ) || ( username.length <= 3 ) ) {
                _( 'usernameError' ).innerHTML = "Username has an error"
                return false;
            }

            // passwrd validation
            if ( password == "" ) {
                _( 'passwordError' ).innerHTMl = "password is empty.Please enter your password";
                return false;
            }

            // email validation

            if ( ( email.indexOf( '@' ) <= 0 ) || email == "" ) {
                _( 'emailError' ).innerHTML = "Email is not valid";
                return false
            }

            // number validation
            if ( ( number == "" ) || ( isNaN( number ) ) ) {
                _( 'numberError' ).innerHTML = "Number field is required and must contain numbers only";
            }



            // function to process stage two

            // address validation
            if ( ( location == "" ) ) {
                _( 'addressError' ).innerHTML = "Please enter valid Address";
                return false;
            }


            // end of stage two
            function to process stage three

            function message () {
                message = _( 'message' ).value;
                validate message( !empty ) && ( length! < 10 )
                if ( ( message == "" ) || ( message.length <= 20 ) ) {
                    _( 'messageError' ).innerHTML = "Message must be longer than 10 characters";
                    return false;
                }
                // load all users entered information
                _( 'popFirstname' ).innerHTML = firstname;
                _( 'popLastname' ).innerHTML = lastname;
                _( 'popUsername' ).innerHTML = username;
                _( 'popEmail' ).innerHTML = email;
                _( 'popNumber' ).innerHTML = number;
                _( 'popLocation' ).innerHTML = Location;
                _( 'popMessage' ).innerHTML = message;


                postMessage( contact_form( tempParam( argument ) ) )
                emailjs.send( "service_aw4lcie", "template_p9qe11h", firstname, lastname, username, password, email, number, location, message )
                    .then( function ( res ) {
                        console.log( "success", res.status );
                    },
                        function ( error ) {
                            console.log( "failed", error );
                        }
                    )
            }
        }
        };
    number: true,
        min: 0
})

};