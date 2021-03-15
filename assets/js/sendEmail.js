function sendEmail(tempParams) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("message").value,
        message: document.getElementById("tour").value,
        message: document.getElementById("location").value,
    };
    emailjs.send("service_aw4lcie", "template_p9qe11h", tempParams)
        .then(function(res) {
                console.log("success", res.status);
            },
            function(error) {
                console.log("failed", error);
            }
        );
    return false;
}
//
function sendEmail(tempParams) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("message").value,
        tour: document.getElementById("tour").value,
        location: document.getElementById("location").value,
    };
    emailjs.send("service_aw4lcie", "template_p9qe11h", {
        to_name: "xascapae@gmail.com",
        from_name: "user",
        message: "message",
        reply_to: "user_email",
        tour: "tour",
        location: "location",
        contact_form: "contact_form",
    });


    emailjs.send("service_aw4lcie", "template_p9qe11h", tempParams)
        .then(function(res) {
                console.log("success", res.status);
            },
            function(error) {
                console.log("failed", error);
            }
        );
    return false;

}