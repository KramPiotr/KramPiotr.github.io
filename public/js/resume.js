(function($) {
  "use strict"; // Start of use strict
  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  setTimeout(function(){ 
      $('.js-scroll-trigger').click(function() {
          $('.navbar-collapse').collapse('hide');
      });
  }, 3000);
  

})(jQuery); // End of use strict
