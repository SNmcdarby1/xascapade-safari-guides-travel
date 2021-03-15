$('#myForm').on('submit', function(event) {
        event.preventDefault(); // prevent reload

        var formData = new FormData(this);
        formData.append('service_aw4lcie', 'service_aw4lcie');
        formData.append('template_p9qe11h', 'template_p9qe11h');
        formData.append('user_cbk0RT9vpd78BlYyPC67x', 'user_cbk0RT9vpd78BlYyPC67x'
            ');

            $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
                type: 'POST',
                data: formData,
                contentType: false, // auto-detection
                processData: false // no need to parse formData to string
            }).done(function() {
                alert('Your mail is sent!');
            }).fail(function(error) {
                alert('Oops... ' + JSON.stringify(error));
            });
        }
        emailjs.send(service_aw4lcie, template_p9qe11h, templateParams, user_cbk0RT9vpd78BlYyPC67x)

    )
}
console.log(sendEmail)
// 