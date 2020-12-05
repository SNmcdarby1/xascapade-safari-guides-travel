// Sidenav
const icons = document.querySelector('.sidenav');
M.SideNav.init(SideNav, {
    menu
});

const icons = document.querySelectorByClassName('toggle-button')[0]
const navbarLinks = document.querySelectorByClassName('navbar-links')[0]

toggleButton.addEventListener('click'.anchor() => {
    navbarLinks.classLink.toggle('active')

});


//Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Abi Dhabi": null,
        "Rio": null,
        "Spain": null,
        "Aruba": null,
        "Kenya": null,
        "London": null,
        "Dublin": null,
        "Cancun Mexico": null,
        "Hawai": null,
        "Florida": null,
        "New York": null,
        "Jamaica": null,
        "France": null,
        "Australia": null,
        "China": null,
        "Netherlands": null,
        "China": null,
        "Malaysia": null,
        "Newzealand": null,
        "Ontrio": null,
        "Auckland": null,

    }
});
// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

// Scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

const ac = document.querySelector('.a.mobie-nav');
M.Autocomplete.init(ac, {
    data: {
        "Abi Dhabi": null,
        "Rio": null,
        "Spain": null,
        "Aruba": null,
        "Kenya": null,
        "London": null,
        "Dublin": null,
        "Cancun Mexico": null,
        "Hawai": null,
        "Florida": null,
        "New York": null,
        "Jamaica": null,
        "France": null,
        "Australia": null,
        "China": null,
        "Netherlands": null,
        "China": null,
        "Malaysia": null,
        "Newzealand": null,
        "Ontrio": null,
        "Auckland": null,

    }
});
// Material Boxed
$("button").click(function() {
    $("button").toggleClass(".box-1");
});
$(newFunction('')).css("background-color", "yellow");


var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
$('#myCarousel').on('slid.bs.carousel', function(_) {
    $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})