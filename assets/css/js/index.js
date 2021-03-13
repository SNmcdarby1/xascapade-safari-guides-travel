async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    myDisplay(myText);
}
$(document).off('.data-api')

$('#myModal').on('show.bs.modal', function(e) {
    if (!data) return e.preventDefault() // stops modal from being shown
})