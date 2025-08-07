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

// SWIPER JS




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

// HERO SLIDER
document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".hero-carousel-wrapper");
  const slides = wrapper.querySelectorAll(".slide");
  const dotContainer = document.querySelector(".carousel-dots");
  let currentSlide = 0;
  let autoplayInterval;

  // === Setup dots ===
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Slide ${i + 1}`);
    dot.addEventListener("click", () => {
      showSlide(i);
      restartAutoplay();
    });
    dotContainer.appendChild(dot);
  });

  // === Show slide function ===
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    dotContainer.querySelectorAll("button").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    currentSlide = index;
  }

  // === Move to next slide ===
  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  // === Autoplay control ===
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000); // change every 5s
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // === Initialize ===
  showSlide(currentSlide);
  startAutoplay();
});

// COLLECTION GLIDE JS



// ACCORDIAN
document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;

      // Toggle active class
      this.classList.toggle("active");

      // Slide toggle effect
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});















