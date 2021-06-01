function myFunction() {
var tempParams
emailjs.send( "service_aw4lcie", "template_p9qe11h", {
    to_name: "xascapae@gmail.com",
    from_name: "user",
    message: "message",
    reply_to: "user_email",
    tour: "tour",
    location: "location",
    contact_form: "contact_form",

emailjs.send( "service_aw4lcie", "template_p9qe11h", tempParams )
    .then( function ( res ) {
            console.log( "success", res.status );
        },

        function ( error ) {
            ( "failed", error );
const contact_form = [ "fullname", "tourlocation", "email", "message", "tours" ];
tourlocation = [ "mombasa", "nairobi", "nakuru", "lamu" ];
tour = [ "Self_guided_tour", "group_tours", "experienced_tours", "private_tours" ];
fullname = [ "firstname", "lastname" ];

function uploadComplete() {
    document.getElementById( "popup" ).innerHtml = "";

    $( document ).ready( function () {
        parent.uploadComplete();
        document.getElementById( "" ).
        _( 'popFirstname' ).innerHTML = firstname;
        _( 'popLastname' ).innerHTML = lastname
        _( 'popUsername' ).innerHTML = username
        _( 'popEmail' ).innerHTML = email
        _( 'popNumber' ).innerHTML = number
        _( 'popLocation' ).innerHTML = Location
        _( 'popMessage' ).innerHTML = message
        return false;
    } )

( function () {
        "use strict";

        /**
         * Easy selector helper function
         */
        const select = ( el, all = false ) => {
            el = el.trim()
            if ( all ) {
                return [ ...document.querySelectorAll( el ) ]
            } else {
                return document.querySelector( el )
            }
        }

        /**
         * Easy event listener function
         */
        const on = ( type, el, listener, all = false ) => {
            let selectEl = select( el, all )
            if ( selectEl ) {
                if ( all ) {
                    selectEl.forEach( e => e.addEventListener( type, listener ) )
                } else {
                    selectEl.addEventListener( type, listener )
                }
            }
        }

        /**
         * Easy on scroll event listener 
         */
        const onscroll = ( el, listener ) => {
            el.addEventListener( 'scroll', listener )
        }
        /**
         * Navbar links active state on scroll
         */
        let navbarlinks = select( '#navbar .scrollto', true )
        const navbarlinksActive = () => {
            let position = window.scrollY + 200
            navbarlinks.forEach( navbarlink => {
                if ( !navbarlink.hash ) return
                let section = select( navbarlink.hash )
                if ( !section ) return
                if ( position >= section.offsetTop && position <= ( section.offsetTop + section.offsetHeight ) ) {
                    navbarlink.classList.add( 'active' )
                } else {
                    navbarlink.classList.remove( 'active' )
                }
            } )
        }
        window.addEventListener( 'load', navbarlinksActive )
        onscroll( document, navbarlinksActive )

        /**
         * Scrolls to an element with header offset
         */
        const scrollto = ( el ) => {
            let header = select( '#header' )
            let offset = header.offsetHeight

            if ( !header.classList.contains( 'header-scrolled' ) ) {
                offset -= 16
            }

            let elementPos = select( el ).offsetTop
            window.scrollTo( {
                top: elementPos - offset,
                behavior: 'smooth'
            } )
        }

        /**
         * Toggle .header-scrolled class to #header when page is scrolled
         */
        let selectHeader = select( '#header' )
        if ( selectHeader ) {
            const headerScrolled = () => {
                if ( window.scrollY > 100 ) {
                    selectHeader.classList.add( 'header-scrolled' )
                } else {
                    selectHeader.classList.remove( 'header-scrolled' )
                }
            }
            window.addEventListener( 'load', headerScrolled )
            onscroll( document, headerScrolled )
        }
var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  };}}} 
 $(document).ready(function(){
    $('.sidenav').sidenav();};