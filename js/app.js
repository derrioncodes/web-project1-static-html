// CLOSE ANNOUNCEMENT BANNER BUTTON
// $(document).ready(function () {


//   $(".close-announcement-banner").click(function () {
//     $(".announcement__banner").css("display", "none");
//   });
// });

$(document).ready(function () {
  // Check sessionStorage to see if banner was already closed
  if (sessionStorage.getItem("announcementBannerClosed") === "true") {
    $(".announcement__banner").addClass("hidden");
  }

  // Close button click
  $(".close-announcement-banner").on("click", function () {
    $(".announcement__banner").addClass("hidden");
    sessionStorage.setItem("announcementBannerClosed", "true");
  });
});



// OPEN/CLOSE MOBILE NAV
$(document).ready(function () {
  // Open mobile nav when clicking the menu button
  $('#mobile-nav-button_open').on('click', function () {
    $('.mobile__nav__drawer__bg')
      .removeClass('opacity-0 invisible')
      .addClass('opacity-100 visible');

    $('.mobile__nav__drawer__open')
      .removeClass('left-[-100%]')
      .addClass('left-0');

    $('body').addClass('overflow-hidden');
  });

  // Close mobile nav when clicking the close (X) button
  $('#mobile-nav-button-close').on('click', function () {
    // Slide drawer out
    $('.mobile__nav__drawer__open')
      .removeClass('left-0')
      .addClass('left-[-100%]');

    // Step 1: Fade out backdrop
    $('.mobile__nav__drawer__bg')
      .removeClass('opacity-100 visible')
      .addClass('opacity-0');

    // Step 2: After transition ends, hide it fully
    setTimeout(() => {
      $('.mobile__nav__drawer__bg').addClass('invisible');
      $('body').removeClass('overflow-hidden');
    }, 500); // match transition duration
  });

});



// OPEN/CLOSE MOBILE SUBNAV
$(document).ready(function () {
  // Open mobile subnav when clicking a nav item with sublinks
  $('.mobile-menu-list-item__link').on('click', function (e) {
    e.preventDefault();

    // Find the related subcontainer inside the same list item
    $(this).closest('.mobile-menu-list-item')
      .find('.mobile-nav__subcontainer')
      .removeClass('right-[-100%]')
      .addClass('right-0');

    $(this).closest('.mobile-subnav__back-btn')
      .find('.mobile-nav__subcontainer')
      .removeClass('right-0')
      .addClass('right-[-100%]');
  });

  // Close mobile subnav when clicking a nav item with sublinks
  $('.mobile-subnav__back-btn').on('click', function () {
    $(this).closest('.mobile-nav__subcontainer')
      .removeClass('right-0')
      .addClass('right-[-100%]');
  });

  // Close the whole mobile nav when clicking the close button
  $('.mobile-subnav__close-btn').on('click', function () {
    // Close subnav
    $('.mobile-nav__subcontainer')
      .removeClass('right-0')
      .addClass('right-[-100%]');

    // Close main drawer
    $('.mobile__nav__drawer__open')
      .removeClass('left-0')
      .addClass('left-[-100%]');

    // Fade out backdrop
    $('.mobile__nav__drawer__bg')
      .removeClass('opacity-100 visible')
      .addClass('opacity-0');

    // After fade completes, hide it and remove scroll lock
    setTimeout(function () {
      $('.mobile__nav__drawer__bg').addClass('invisible');
      $('body').removeClass('overflow-hidden');
    }, 500); // match duration-500 or whatever you use
  });
});

// OPEN/CLOSE MEDIUM SUBNAV MENU
$(document).ready(function () {
  $(".medium-nav-list-item").hover(
    function () {
      $(this).find(".medium-subnav-container")
        .stop(true, true)
        .css("display", "block")
        .animate({ opacity: 1 }, 150);
    },
    function () {
      $(this).find(".medium-subnav-container")
        .stop(true, true)
        .animate({ opacity: 0 }, 125, function () {
          $(this).css("display", "none");
        });
    }
  );
});

// OPEN/CLOSE SEARCH PANEL
$(document).ready(function () {
  // Open search panel
  $('.nav-search-button').on('click', function () {
    $('.search-overlay')
      .removeClass('opacity-0 invisible')
      .addClass('opacity-100 visible');

    $('.search-panel')
      .removeClass('top-[-100%]')
      .addClass('top-0');

    $('body').addClass('overflow-hidden');
  });

  // Close search panel
  $('.search-close-button').on('click', function () {
    // Slide search panel up
    $('.search-panel')
      .removeClass('top-0')
      .addClass('top-[-100%]');

    // Fade out background
    $('.search-overlay')
      .removeClass('opacity-100 visible')
      .addClass('opacity-0');

    // Fully hide after transition
    setTimeout(() => {
      $('.search-overlay').addClass('invisible');
      $('body').removeClass('overflow-hidden');
    }, 500); // Match your Tailwind `duration-500`
  });
});







