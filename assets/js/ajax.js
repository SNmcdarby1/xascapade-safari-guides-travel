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