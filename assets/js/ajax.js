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

$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    alert('Your mail is sent!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});
// code fragment