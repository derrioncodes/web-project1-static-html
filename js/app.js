

// OPEN/CLOSE MOBILE NAV
$(document).ready(function () {
    // Open mobile nav when clicking the menu button
    $('#mobile-nav-button_open').on('click', function () {
      // Show backdrop
      $('.mobile__nav__drawer__bg')
        .removeClass('opacity-50 invisible')
        .addClass('opacity-100 visible');
  
      // Slide in drawer
      $('.mobile__nav__drawer__open')
        .removeClass('left-[-100%]')
        .addClass('left-0');
  
      // Prevent background scrolling
      $('body').addClass('overflow-hidden');
    });
  
    // Close mobile nav when clicking the close (X) button
    $('#mobile-nav-button-close').on('click', function () {
      // Slide out drawer
      $('.mobile__nav__drawer__open')
        .removeClass('left-0')
        .addClass('left-[-100%]');
  
      // Delay hiding backdrop until after transition (500ms)
      setTimeout(function () {
        $('.mobile__nav__drawer__bg')
          .removeClass('opacity-100 visible')
          .addClass('opacity-50 invisible');
  
        // Re-enable background scrolling
        $('body').removeClass('overflow-hidden');
      }, 400); // match your `duration-500`
    });
  });
  