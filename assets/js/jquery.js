var instance = M.FormSelect.getInstance(elem);

$(document).ready(function() {
    $("p").click(function() {
        $(this).hide();
    });
});
$('select').formSelect('methodName');
$('select').formSelect('methodName', paramName);

var fontFamily = $("p").css("font-family");
"lato", "sans-serif"
$(".card-panel").css("background-color", "teal");
$("").text(fontFamily);
// 

$("tr:odd").addClass("odd");
$("tr:even").addClass("even");
// 
$("p").click(function() {
    $("p").css("color", "aqua")
});
$("h").hover(function() {
    $("h3").css("background", "lightblue")
});
$(".card-panel").mouseenter(function() {
    $("body").css("background-color", "")
});
$(".card-panel").mouseleave(function() {
    $("body").css("background-color", "azure");
});
// 
var x = new XMLHttpRequest();
x.open('POST', url);
x.send(formData);

// append allows multiple values for the same key
var formData = new FormData();
formData.append("article", "id-123");
formData.append("article", "id-42");

// send like request
formData.set("action", "like");
window.fetch(url, {
    method: 'POST',
    body: formData
});

// send reshare request
formData.set("action", "reshare"); // overrides previous "action"
window.fetch(url, {
    method: 'POST',
    body: formData
});