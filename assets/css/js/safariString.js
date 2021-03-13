function safariString() {
    var product = '';
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i].length > safari.length) {
            safari = arguments[i];
        }
    }
    return safari;
}

function tourString() {
    var product = '';
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i].length > tour.length) {
            tour = arguments[i];
        }
    }
    return tour;
}