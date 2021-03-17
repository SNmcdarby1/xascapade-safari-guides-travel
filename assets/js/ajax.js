$("button").click(function() {
    ("demo_test.asp", function(data, status) {
        alert("Data: " + data + "\nStatus: " + status);
    });


    $("button").click(function() {
        $.post("demo_test_post.asp", {
                tempParams: "",
                fromname: "",
                toname: "",
                email: "",
                tour: "",
                location: "",
                message: ""
            },
            function(data, status) {
                alert(`Data: ${ data }\\nStatus: ${ status }`);
            });
    });
});

var data = {
    service_id: 'service_aw4lcie',
    template_id: 'template_p9qe11h',
    user_id: 'user_cbk0RT9vpd78BlYyPC67x',
    template_params: {
        'username': 'James',
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
};
({
    type: 'POST',
    url: 'https://api.emailjs.com/api/v1.0/email/send',
    data: {
        'key': '8895ccc85872be3ea8732d921334e905',
        'message': {
            'from_email': 'Susan',
            'to': [{
                'email': $('.email').val(), // get email from form
                'name': $('.name').val(), // get name from form
                'type': 'to'
            }]
        }
    }

});