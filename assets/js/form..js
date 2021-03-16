//globals variable


function contactForm() {
    var fullname, username, password, email, number, address, message, age
    //super function that holds our DOM 
    function _(x) {
        return document.getElementById(x);

    }

    // function to process stage one
    function processContact(argument) {
        fullname = _('fname').value;
        username = _('username').value;
        password = _('password').value;
        email = _('email').value;
        number = _('number').value;

        //validate fullname
        if ((fullname == "" || (isNaN(fullname)) || fullname.length <= 5)) {
            _('fullnameError').innerHTML = "Full name is incorrect. Make sure it is greater that 5 characters and does not contain numbers"
            return false;
        }
        //username validation
        if ((username == "") || (username.length <= 3)) {
            _('usernameError').innerHTML = "Username has an error"
            return false;
        }

        //passwrd validation
        if (password == "") {
            _('passwordError').innerHTMl = "password is empty.Please enter your password";
            return false;
        }

        //email validation

        if ((email.indexOf('@') <= 0) || email == "") {
            _('emailError').innerHTML = "Email is not valid";
            return false
        }

        //number validation
        if ((number == "") || (isNaN(number))) {
            _('numberError').innerHTML = "Number field is required and must contain numbers only";
        }

        //Hide stage one view 
        _('stageOne').style.display = "none";
        _('stageTwo').style.dispaly = "block";

        //show stage two

        //End of processStageOne

        // function to process stage two
        function processStageTwo() {
            age = _('age').value;
            address = _('address').value;
            // age validation (number) and (required)
            if ((age == "") || (isNaN(age))) {
                _('ageError').innerHTML = "Age must be intergers only";
                return false;

            }
            //address validation
            if ((address == "")) {
                _('addressError').innerHTML = "Please enter valid Address";
                return false;
            }
            //Hide stage two view 
            _('stageTwo').style.display = "none";

            //show stage three
            _('stageThree').style.dispaly = "block";

        }
        // end of stage two
        // function to process stage three
        function processStageThree() {
            message = _('message').value;
            //validate message (!empty) && (length !<10)
            if ((message == "") || (message.length <= 20)) {
                _('messageError').innerHTML = "Message must be longer than 10 characters";
                return false;
            }

            //Hide stage two view  
            _('stageThree').style.display = "none";

            //show stage four
            _('stageFour').style.dispaly = "block";

            // load all users entered information
            _('popFullname').innerHTML = fullname;
            _('popUsername').innerHTML = username;
            _('popEmail').innerHTML = email;
            _('popNumber').innerHTML = number;
            _('poAddress').innerHTML = address;
            _('popAge').innerHTML = age;
            _('popMessage').innerHTML = message;



            emailjs.send("service_aw4lcie", "template_p9qe11h", fullname, username, password, email, number, address, message, age)
                .then(function(res) {
                        console.log("success", res.status);
                    },
                    function(error) {
                        console.log("failed", error);
                    }
                )
        }
    };
};