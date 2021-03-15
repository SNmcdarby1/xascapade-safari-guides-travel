function sendEmail(tempParams) {
    var tempParams, firstname, lastname, username, password, email, number, address, message, age = {
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("message").value,
        tour: document.getElementById("tour").value,
        location: document.getElementById("location").value,

        emailjs.send("service_aw4lcie", "template_p9qe11h", tempParams)
        .then(function(res) {
                console.log("success", res.status);
            },
            function(error) {
                console.log("failed", error);
            }

            //super function that holds our DOM 
            function _(x) {
                return document.getElementById(x);

            }

            function firstname() {
                //validate fullname
                if ((firstname == "" || (isNaN(firstname)) || firstname.length. <= 5)) {
                    _('firstnameError').innerHTML = "Full name is incorrect. Make sure it is greater that 5 characters and does not contain numbers"
                    return false;
                }

                function lastname() {
                    if ((lastname == "" || (isNaN(lastname)) || lastname.length. <= 5)) {
                        _('lastnameError').innerHTML = "Full name is incorrect. Make sure it is greater that 5 characters and does not contain numbers"
                        return false;
                    }

                }
                //email validation
                function email() {
                    if ((email.indexOf('@') <= 0) || email == "") {
                        _('emailError').innerHTML = "Email is not valid";
                        return false
                    }
                }
                //number validation
                function number() {
                    if ((number == "") || (isNaN(number))) {
                        _('numberError').innerHTML = "Number field is required and must contain numbers only."
                        return false;
                    }
                }

                // function to process stage three
                function message() {
                    message = _('message').value;
                    //validate message (!empty) && (length !<10)
                    if ((message == "") || (message.length <= 20)) {
                        _('messageError').innerHTML = "Message must be longer than 10 characters")
                    return false;
                }

                emailjs.send("service_aw4lcie", "template_p9qe11h", fullname, username, password, email, number, address, message, age)
                    .then(function(res) {
                            console.log("success", res.status);
                        },
                        function(error) {
                            console.log("failed", error);
                        }
                    );
                return false;
            }

            window.onload = function() {
                document.getElementById('contact-form').addEventListener('submit', function(event) {
                    event.preventDefault();
                    // generate a five digit number for the contact_number variable
                    this.contact_number.value = Math.random() * 100000 | 0;
                    // these IDs from the previous steps
                    emailjs.sendForm('contact_service', 'contact_form', this)
                        .then(function() {
                            console.log('SUCCESS!');
                        }, function(error) {
                            console.log('FAILED...', error);
                        });
                });
            }


            return false;

            // load message
            // load all users entered information
            _('popFullname').innerHTML = fullname; _('popUsername').innerHTML = username; _('popEmail').innerHTML = email; _('popNumber').innerHTML = number; _('poAddress').innerHTML = address; _('popAge').innerHTML = age; _('popMessage').innerHTML = message;

        };
        // 
        var data = {
            service_id: 'service_aw4lcie',
            template_id: 'template_p9qe11h',
            user_id: 'user_cbk0RT9vpd78BlYyPC67x',
            template_params: {
                'username': '',
                'g-recaptcha-response': 'user_cbk0RT9vpd78BlYyPC67x'
            }
        };

        emailjs.send("service_aw4lcie", "template_p9qe11h", tempParams)
        .then(function(res) {
                console.log("success", res.status);
            },
            function(error) {
                console.log("failed", error);
            }
        );
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            alert('Your mail is sent!');
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    }
}
// callback