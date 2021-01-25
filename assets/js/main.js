// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBe4Xtfrilx5CMunc1AkuwYuxFySqAssXg",
  authDomain: "shortlist-ca273.firebaseapp.com",
  databaseURL: "https://shortlist-ca273-default-rtdb.firebaseio.com",
  projectId: "shortlist-ca273",
  storageBucket: "shortlist-ca273.appspot.com",
  messagingSenderId: "74331498692",
  appId: "1:74331498692:web:ed5058ccdf739d6e3d0191",
  measurementId: "G-M1WGCKLBJE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref();

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal('name');
  var number = getInputVal('number');
  var college = getInputVal('college');
  var email = getInputVal('email');
  var message = getInputVal('message');

  saveMessage(name, college, number, email, message);
  var form = document.getElementById("contactForm");
  form.reset();
  return clicked();

}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, number, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    college: college,
    number: number,
    email: email,
    message: message
  });
}

!(function ($) {
  "use strict";

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();
        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  // if ($('.nav-menu').length) {
  //   var $mobile_nav = $('.nav-menu').clone().prop({
  //     class: 'mobile-nav d-lg-none'
  //   });
  //   $('body').append($mobile_nav);
  //   $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
  //   $('body').append('<div class="mobile-nav-overly"></div>');
  //   $(document).on('click', '.mobile-nav-toggle', function (e) {
  //     $('body').toggleClass('mobile-nav-active');
  //     $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  //     $('.mobile-nav-overly').toggle();
  //   });
  //   $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
  //     e.preventDefault();
  //     $(this).next().slideToggle(300);
  //     $(this).parent().toggleClass('active');
  //   });
  //   $(document).click(function (e) {
  //     var container = $(".mobile-nav, .mobile-nav-toggle");
  //     if (!container.is(e.target) && container.has(e.target).length === 0) {
  //       if ($('body').hasClass('mobile-nav-active')) {
  //         $('body').removeClass('mobile-nav-active');
  //         $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  //         $('.mobile-nav-overly').fadeOut();
  //       }
  //     }
  //   });
  // } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
  //   $(".mobile-nav, .mobile-nav-toggle").hide();
  // }
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
  // Navigation active state on scroll
  // var nav_sections = $('section');
  // var main_nav = $('.nav-menu, .mobile-nav');

  // $(window).on('scroll', function () {
  //   var cur_pos = $(this).scrollTop() + 200;

  //   nav_sections.each(function () {
  //     var top = $(this).offset().top,
  //       bottom = top + $(this).outerHeight();

  //     if (cur_pos >= top && cur_pos <= bottom) {
  //       if (cur_pos <= bottom) {
  //         main_nav.find('li').removeClass('active');
  //       }
  //       main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
  //     }
  //     if (cur_pos < 300) {
  //       $(".nav-menu ul:first li:first").addClass('active');
  //     }
  //   });
  // });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 0, 'easeInOutExpo');
    return false;
  });



  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    // autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  });

})(jQuery);

$('.testimonial-carousel').owlCarousel({
  loop: true,
  margin: 20,
  // nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1100: {
      items: 3
    }
  }
})

function clicked() {
  return confirm('submitted');
}