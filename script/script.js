// Sidenav
  const icons = document.querySelector('.sidenav');
  M.SideNav.init(SideNav, {
      menu
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
      $("navbar").toggleClass("blue");
  });
  $(newFunction()).css("background-color", "yellow");



  function newFunction() {
      return "body";
  }
  $("nav").toggleClass();

  $("input[type='text']").onclick("any", function() {
      if (!this.value) {
          alert("Please enter some text!");
      }
  });

  var input = $("input:image").css({
      background: "teal",
      border: "3px green solid"
  });
  $("div")
      .text(+input.length + ".")
      .css("color", "red");
  $("form").submit(function(event) {
      event.preventDefault();
  });